import { Link } from "react-router-dom";

const ProductCard = ({ item }: any) => {
  console.log(item);
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
            src={item.image || item.images[0]}
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
          <div className="flex justify-between text-sm text-gray-500">
            <span>${item.price}</span>
            <span>{item.ratings}⭐</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
