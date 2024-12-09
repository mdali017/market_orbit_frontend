import React from "react";
import { Row, Col, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductCard from "../../../components/common/ProductCard/ProductCard";
// import ProductCard from "./ProductCard"; // Import the custom ProductCard

const { Text } = Typography;

interface ProductListProps {
  products: any[];
  addToCart: (product: any) => void;
}

const ShopProductSection: React.FC<ProductListProps> = ({
  products,
  addToCart,
}) => (
  <Row gutter={[16, 16]}>
    {products.length > 0 ? (
      products.map((product) => (
        <Col span={12} key={product.id}>
          <div className="relative">
            <ProductCard item={product} />
            {/* Add to Cart button overlay */}
            <div className="absolute bottom-4 right-4">
              <ShoppingCartOutlined
                className="text-2xl text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 cursor-pointer"
                onClick={() => addToCart(product)}
              />
            </div>
          </div>
        </Col>
      ))
    ) : (
      <Text>No products available</Text>
    )}
  </Row>
);

export default ShopProductSection;
