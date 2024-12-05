import ScrollToTopButton from "../../components/common/ScrollToTopButton ";
import CategoriesListSection from "./CategoriesListSection/CategoriesListSection";
import FlashSaleProductsSection from "./FlashSaleProductsSection/FlashSaleProductsSection";
// import CategoriesList from "./CategoriesListSection/CategoriesListSection";
import FollowedProductsSection from "./FollowedProductSection/FollowedProductSection";
import HeroSection from "./HeroSection/HeroSection";
import InfiniteProductListSection from "./InfiniteProductListSection/InfiniteProductListSection";
import TreadingSection from "./TreadingSection/TreadingSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TreadingSection />
      <FollowedProductsSection userId="1" />
      <InfiniteProductListSection />
      <CategoriesListSection />
      <FlashSaleProductsSection />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
