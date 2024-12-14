import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Checkout: React.FC = () => {
  // Sample cart data
  const cartItems: CartItem[] = [
    { id: 1, name: "Product 1", price: 20, quantity: 2 },
    { id: 2, name: "Product 2", price: 15, quantity: 1 },
    { id: 3, name: "Product 3", price: 10, quantity: 3 },
  ];

  const [coupon, setCoupon] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  // Calculate total cost
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subTotal - discount;

  // Handle coupon code
  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(subTotal * 0.1); // 10% discount
      alert("Coupon applied successfully!");
    } else {
      setDiscount(0);
      alert("Invalid coupon code.");
    }
  };

  // Handle payment submission
  const handlePayment = () => {
    if (paymentMethod === "Aamarpay") {
      // Redirect to Aamarpay payment gateway
      alert("Proceeding to Aamarpay...");
    } else if (paymentMethod === "Stripe") {
      // Redirect to Stripe payment gateway
      alert("Proceeding to Stripe...");
    } else {
      alert("Please select a payment method.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {/* Cart Summary */}
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="flex justify-between items-center font-semibold mt-4">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <span>Discount</span>
          <span>${discount}</span>
        </div>
        <div className="flex justify-between items-center font-bold text-lg mt-2">
          <span>Total</span>
          <span>${total}</span>
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
