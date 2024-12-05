import React, { useState, useEffect, useRef, useCallback } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  shopId: string;
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 29.99,
    image: "https://via.placeholder.com/150",
    shopId: "101",
  },
  {
    id: "2",
    name: "Product 2",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    shopId: "102",
  },
  {
    id: "3",
    name: "Product 3",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    shopId: "103",
  },
  // Add more products as needed for testing
];

const InfiniteProductListSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Simulated API call
  const fetchProducts = useCallback(async () => {
    if (!hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const newProducts: Product[] = sampleProducts.map((product, index) => ({
        ...product,
        id: `${product.id}-${page}-${index}`,
      }));
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setHasMore(page < 5); // Stop after 5 pages
      setLoading(false);
    }, 1000);
  }, [page, hasMore]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <p className="text-center text-gray-500 mt-4">
          Loading more products...
        </p>
      )}
      {!hasMore && (
        <p className="text-center text-gray-500 mt-4">
          No more products to load.
        </p>
      )}
      {/* Invisible div for IntersectionObserver */}
      <div ref={observerRef} className="h-1 w-full"></div>
    </div>
  );
};

export default InfiniteProductListSection;
