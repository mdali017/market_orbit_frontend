import React, { useState } from "react";
import { useLocation } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  inventoryCount: number;
  images: string[];
  discounts: number;
  ratings: number;
  categoryId: string;
  shopId: string;
  createdAt: string;
  updatedAt: string;
}

const Checkout: React.FC = () => {
  const location = useLocation();
  const cartData = location.state as {
    cartItems: CartItem[];
    totalCost: number;
  };

  const [coupon, setCoupon] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  const cartItems = cartData?.cartItems || [];
  const subTotal = cartData?.totalCost || 0;
  const total = subTotal - discount;

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(subTotal * 0.1); 
      alert("Coupon applied successfully!");
    } else {
      setDiscount(0);
      alert("Invalid coupon code.");
    }
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "Stripe") {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/payments/create-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: cartItems.map((item) => ({
                name: item.name,
                price: item.price,
                quantity: 1,
                image: item.images[0],
              })),
            }),
          }
        );

        const data = await response.json();
        console.log(data);
        if (data.id) {
          window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
        } else {
          alert("Failed to initiate payment.");
        }
      } catch (error) {
        alert("Error processing payment. Please try again.");
        console.error(error);
      }
    } else {
      alert("Currently only Stripe is supported.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between items-center font-semibold mt-4">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>Discount</span>
          <span>${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg mt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Coupon Code */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Apply Coupon</h2>
        <div className="flex">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon code"
            className="border rounded-l-lg px-4 py-2 flex-grow"
          />
          <button
            onClick={applyCoupon}
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="flex flex-col space-y-4">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Aamarpay"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Aamarpay
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
            Stripe
          </label>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-right">
        <button
          onClick={handlePayment}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
