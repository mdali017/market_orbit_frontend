import { useParams } from "react-router-dom";
import {
  useGetAllRelatedProductsByCategoryQuery,
  useGetSingleProductQuery,
} from "../../../redux/api/api";
import ProductCard from "../../../components/common/ProductCard/ProductCard";

const RelatedProductsSection = () => {
  const { id } = useParams();
  const {
    data: product1,
    isLoading: productLoading,
    error: productError,
  } = useGetSingleProductQuery(id);

  const relatedProductsCategoryId = product1?.data?.category?.id;

  // Fetch related products when category ID is available
  const {
    data: RelatedProducts,
    isLoading: relatedProductsLoading,
    error: relatedProductsError,
  } = useGetAllRelatedProductsByCategoryQuery(relatedProductsCategoryId, {
    skip: !relatedProductsCategoryId, // Skip query if no category ID is available
  });

  if (productLoading || relatedProductsLoading) {
    return <div>Loading...</div>;
  }

  if (productError || relatedProductsError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="container mx-auto">
      {/* Related Products */}
      <section className="mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RelatedProducts?.data?.slice(0, 4).map((related: any) => (
            <ProductCard key={related.id} item={related} />
            // <div
            //   key={related.id}
            //   className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
            // >
            //   <img
            //     src={related.image}
            //     alt={related.name}
            //     className="w-full h-48 object-cover mb-4 rounded-lg"
            //   />
            //   <h3 className="font-semibold text-lg">{related.name}</h3>
            //   <p className="text-green-600 font-semibold">{related.price}</p>
            // </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RelatedProductsSection;
