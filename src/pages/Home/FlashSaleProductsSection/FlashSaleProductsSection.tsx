import React from "react";
import { useGetAllFlashSaleProductsQuery } from "../../../redux/api/api";

const FlashSaleProductsSection: React.FC = () => {
  const {
    data: allFlashSaleProducts,
    isLoading,
    isError,
  } = useGetAllFlashSaleProductsQuery(undefined);

  // Handle errors or no data cases
  if (isError) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Flash Sale Products
        </h1>
        <p className="text-center text-red-500">Failed to load products.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Flash Sale Products
      </h1>
      {isLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allFlashSaleProducts?.data?.length ? (
            allFlashSaleProducts.data.flatMap((flashSale: any) =>
              flashSale.products.map((product: any) => (
                <div
                  key={product.product.id}
                  className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
                >
                  <img
                    src={product.product.images[0]}
                    alt={product.product.name}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-medium">{product.product.name}</h3>
                  <p className="text-gray-500 line-through">
                    ${product.product.price.toFixed(2)}
                  </p>
                  <p className="text-green-500 font-bold">
                    $
                    {(
                      product.product.price -
                      (product.product.price * product.discount) / 100
                    ).toFixed(2)}
                  </p>
                  <p className="text-sm text-red-500">
                    {product.discount}% OFF
                  </p>
                </div>
              ))
            )
          ) : (
            <p className="text-center text-gray-500">
              No flash sale products available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FlashSaleProductsSection;
