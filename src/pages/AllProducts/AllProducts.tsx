import AllProductsLayout from "./AllProductsLayout/AllProductsLayout";
import AllProductsSideBar from "./AllProductsSideBar/AllProductsSideBar";
import AllProductsTopSection from "./AllProductsTopSection/AllProductsTopSection";

const AllProducts = () => {
  return (
    <div>
      <AllProductsTopSection />
      <div className="flex">
        <AllProductsSideBar />
        <div className="flex-grow">
          <AllProductsLayout />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
