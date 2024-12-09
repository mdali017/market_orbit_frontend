import { useState } from "react";
import { Space, Spin } from "antd";
import {
  useGetAllProductsByShopQuery,
  useGetSingleShopQuery,
} from "../../redux/api/api";
import { useParams } from "react-router-dom";
import ShopHeaderSection from "./ShopHeaderSection/ShopHeaderSection";
import ShopDetails from "./ShopDetails/ShopDetails";
import ShopProductSection from "./ShopProductSection/ShopProductSection";
// import ShopHeader from "./ShopHeader";
// import ShopDetails from "./ShopDetails";
// import ProductList from "./ProductList";

const Shop = () => {
  const { id } = useParams();
  const [cart, setCart] = useState<any[]>([]);
  const [followedShops, setFollowedShops] = useState<string[]>([]);

  const { data: shopData, isLoading: shopLoading } = useGetSingleShopQuery(id);
  const { data: productsData, isLoading: productsLoading } =
    useGetAllProductsByShopQuery(id);

  const addToCart = (product: any) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const toggleFollow = (vendorId: string) => {
    setFollowedShops((prev) =>
      prev.includes(vendorId)
        ? prev.filter((id) => id !== vendorId)
        : [...prev, vendorId]
    );
  };

  if (shopLoading || productsLoading) {
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <Spin size="large" />
      </div>
    );
  }

  const shop = shopData?.data;
  const products = productsData?.data || [];

  return (
    <div style={{ padding: 24 }}>
      {shop ? (
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <ShopHeaderSection
            shop={shop}
            followedShops={followedShops}
            toggleFollow={toggleFollow}
          />
          <ShopDetails shop={shop} />
          <ShopProductSection products={products} addToCart={addToCart} />
        </Space>
      ) : (
        <p>No shop data available</p>
      )}
    </div>
  );
};

export default Shop;
