const ProductDetaSection: React.FC = () => {
  const product = {
    name: "Example Product",
    price: "$49.99",
    category: "Electronics",
    description:
      "This is a detailed description of the product, highlighting its features, benefits, and specifications.",
    shop: {
      name: "Tech Store",
      link: "/shop/tech-store",
    },
    images: [
      "/images/product1.jpg",
      "/images/product2.jpg",
      "/images/product3.jpg",
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Product 1",
        price: "$29.99",
        image: "/images/related1.jpg",
      },
      {
        id: 2,
        name: "Product 2",
        price: "$39.99",
        image: "/images/related2.jpg",
      },
      {
        id: 3,
        name: "Product 3",
        price: "$19.99",
        image: "/images/related3.jpg",
      },
    ],
    reviews: [
      { user: "John Doe", rating: 5, comment: "Amazing product!" },
      { user: "Jane Smith", rating: 4, comment: "Good value for money." },
    ],
  };

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4">
        <a href="/" className="text-blue-500">
          Home
        </a>{" "}
        &gt;{" "}
        <a
          href={`/category/${product.category.toLowerCase()}`}
          className="text-blue-500"
        >
          {product.category}
        </a>{" "}
        &gt; <span>{product.name}</span>
      </nav>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="flex space-x-4 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover rounded-lg border border-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold">
            {product.price}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <a
            href={product.shop.link}
            className="text-blue-500 underline text-lg"
          >
            Visit {product.shop.name}
          </a>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.relatedProducts.map((related) => (
            <div
              key={related.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
            >
              <img
                src={related.image}
                alt={related.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="font-semibold text-lg">{related.name}</h3>
              <p className="text-green-600 font-semibold">{related.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold">{review.user}</h3>
              <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetaSection;
