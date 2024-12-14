import { Link } from "react-router-dom";
import { addToCart, clearCart } from "../../../redux/features/cartSlice";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

const ProductCard = ({ item }: any) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: any) => state.cart.cartItems); // Assuming your cart slice has `items`
  // console.log(cart);
  const handleAddToCart = (item: any) => {
    const currentVendorId = cart.length > 0 ? cart[0].shopId : null;

    if (currentVendorId && currentVendorId !== item.shopId) {
      // Vendor mismatch
      Swal.fire({
        icon: "warning",
        title: "Vendor Mismatch",
        text: "Your cart contains products from another vendor. Do you want to replace the cart with the new product?",
        showCancelButton: true,
        confirmButtonText: "Replace Cart",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(clearCart());
          dispatch(addToCart(item));
          Swal.fire({
            icon: "success",
            title: "Cart Replaced",
            text: "Your cart has been updated with the new product.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      return;
    }

    // Add item to cart
    const result = dispatch(addToCart(item));
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Product Added",
        text: "Product has been added to your cart.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <article className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label={`Product: ${item.name}`}
          className="block"
        >
          <img
            alt={item.name}
            className="object-cover w-full h-48"
            src={item.image || item.images?.[0]}
          />
        </a>
        <div className="flex flex-col flex-1 p-4">
          <a
            href="#"
            className="text-xs uppercase tracking-wide font-semibold text-violet-600 hover:underline mb-1"
          >
            Category
          </a>
          <Link to={`/product-details/${item.id}`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.name}
            </h3>
          </Link>
          <div className="flex justify-between text-sm text-gray-500 mb-3">
            <span>${item.price}</span>
            <span>{item.ratings}⭐</span>
          </div>
          <button
            onClick={() => handleAddToCart(item)}
            className="mt-auto py-2 px-4 text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
