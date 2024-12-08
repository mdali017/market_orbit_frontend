import React, { useState, useEffect, useRef, useCallback } from "react";
import { useGetAllProductsQuery } from "../../../redux/api/api";

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  shopId: string;
}

const InfiniteProductListSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const { data: allProductsResponse, isLoading } =
    useGetAllProductsQuery(undefined);

  useEffect(() => {
    if (isLoading || !allProductsResponse?.data) return;

    // Paginate the fetched data
    const pageSize = 5; // Adjust page size as needed
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const newProducts = allProductsResponse.data.slice(startIndex, endIndex);

    setProducts((prev) => [...prev, ...newProducts]);
    setHasMore(newProducts.length > 0);
    setLoading(false);
  }, [allProductsResponse, page]);

  const loadMoreProducts = useCallback(() => {
    if (hasMore) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  }, [hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
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
  }, [hasMore, loadMoreProducts]);

  if (isLoading && products.length === 0) {
    return <div>Loading...</div>;
  }

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
              src={product.images[0] || "https://via.placeholder.com/150"}
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
