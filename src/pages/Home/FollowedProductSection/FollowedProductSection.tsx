import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { useGetAllFollowedShopProductsQuery } from "../../../redux/api/api";
import ProductCard from "../../../components/common/ProductCard/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  shopId: string;
}

interface FollowedShopsProductsProps {
  userId: string;
}

const FollowedProductsSection: React.FC<FollowedShopsProductsProps> = ({
  userId,
}) => {
  const [followedShopsProducts, setFollowedShopsProducts] = useState<Product[]>(
    []
  );

  const { data, isLoading, error } = useGetAllFollowedShopProductsQuery({
    shopId: "9594a846-b662-4528-9852-1a915606eded",
    customerId: "6fbb8f5c-a7b7-48ac-a707-488732266b80",
  });

  useEffect(() => {
    if (data?.success) {
      const products = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.images[0], // Assuming the first image is used
        shopId: item.shopId,
      }));
      setFollowedShopsProducts(products);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Typography.Text>Loading followed shops products...</Typography.Text>
    );
  }

  if (error) {
    return (
      <Typography.Text type="danger">
        Failed to load products. Please try again.
      </Typography.Text>
    );
  }

  return (
    <div className="container mx-auto">
      <Typography.Title level={3}>
        Products from Followed Shops
      </Typography.Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {followedShopsProducts.map((product) => (
          // <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
          //   <Card
          //     hoverable
          //     cover={<img alt={product.name} src={product.image} />}
          //   >
          //     <Card.Meta
          //       title={product.name}
          //       description={`$${product.price.toFixed(2)}`}
          //     />
          //   </Card>
          // </Col>
          <ProductCard item={product} />
        ))}
      </div>
    </div>
  );
};

export default FollowedProductsSection;
