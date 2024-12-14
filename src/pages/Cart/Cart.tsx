import React, { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { loadStripe } from "@stripe/stripe-js";

// Define Stripe public key
const stripePromise = loadStripe("your-stripe-public-key-here");

interface CartItem {
  images: any;
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const { cartItems } = useAppSelector((state: any) => state.cart);
  const [couponCode, setCouponCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0); // Discount value in percentage
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Calculate total cost with optional discount
  const totalCost = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price ,
    0
  );
  const discountedCost = totalCost - (totalCost * discount) / 100;

  // Handle coupon code input change
  const handleCouponChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(event.target.value);
  };

  // Handle apply coupon
  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10); // 10% discount for this example
    } else if (couponCode === "DISCOUNT20") {
      setDiscount(20); // 20% discount for this example
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  // Handle Stripe payment
  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const stripe = await stripePromise;
      // Create a payment intent on your backend (you need to implement this API)
      const response = await fetch("/create-checkout-session", {
        method: "POST",
      });

      const session = await response.json();

      // Redirect to Stripe checkout page
      const { error }: any = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error("Stripe error:", error);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b last:border-b-0"
          >
            <div className="flex items-center">
              <img
                src={item.images[0]} // Use the first image from the images array
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-gray-500">Price: ${item.price}</p>
              </div>
            </div>
            <div className="text-right">
              <p>Quantity: {1}</p>
              <p>Total: ${item.price * 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Coupon code section */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={couponCode}
          onChange={handleCouponChange}
          placeholder="Enter Coupon Code"
          className="p-2 border rounded-md mr-2"
        />
        <button
          onClick={applyCoupon}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Apply Coupon
        </button>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">
          Total Cost: ${discountedCost.toFixed(2)}
        </h2>

        <button
          onClick={handleCheckout}
          className={`bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
