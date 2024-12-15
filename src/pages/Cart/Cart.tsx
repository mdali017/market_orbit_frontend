// Cart.tsx
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

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
  const [discount, setDiscount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Calculate total cost with optional discount
  const totalCost = cartItems.reduce(
    (acc: number, item: CartItem) => acc + item.price,
    0
  );
  const discountedCost = totalCost - (totalCost * discount) / 100;

  // Handle navigation to Checkout page with cart data
  const handleCheckout = () => {
    navigate("/checkout", {
      state: { cartItems, totalCost: discountedCost },
    });
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
                src={item.images[0]}
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
