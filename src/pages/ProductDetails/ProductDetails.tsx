import CustomerReviewSection from "./CustomerReviewSection/CustomerReviewSection";
import ProductDetaSection from "./ProductDataSection/ProductDataSection";
import RelatedProductsSection from "./RelatedProductsSection/RelatedProductsSection";

const ProductDetails = () => {
  return (
    <div>
      <ProductDetaSection />
      <RelatedProductsSection />
      <CustomerReviewSection />
    </div>
  );
};

export default ProductDetails;
