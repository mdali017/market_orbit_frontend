import React, { useState, useEffect } from "react";
import { Card, Row, Col, Typography } from "antd";

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

const followedShopsProductsMock: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    shopId: "shop1",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 129.99,
    image: "https://via.placeholder.com/150",
    shopId: "shop2",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    shopId: "shop3",
  },
  {
    id: "4",
    name: "Gaming Mouse",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    shopId: "shop1",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    price: 59.99,
    image: "https://via.placeholder.com/150",
    shopId: "shop2",
  },
  {
    id: "6",
    name: "USB-C Hub",
    price: 25.99,
    image: "https://via.placeholder.com/150",
    shopId: "shop3",
  },
];

const FollowedProductsSection: React.FC<FollowedShopsProductsProps> = ({
  userId,
}) => {
  const [followedShopsProducts, setFollowedShopsProducts] = useState<Product[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchFollowedShopsProducts = async () => {
  //       try {
  //         // Simulated API call to fetch followed shops and their products
  //         const response = await fetch(
  //           `/api/users/${userId}/followed-shops-products`
  //         );
  //         const data = await response.json();
  //         setFollowedShopsProducts(data);
  //         setLoading(false);
  //       } catch (error) {
  //         console.error("Error fetching followed shops products:", error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchFollowedShopsProducts();
  //   }, [userId]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setFollowedShopsProducts(followedShopsProductsMock);
      setLoading(false);
    }, 1000);
  }, [userId]);

  if (loading) {
    return (
      <Typography.Text>Loading followed shops products...</Typography.Text>
    );
  }

  return (
    <div className="container mx-auto">
      <Typography.Title level={3}>
        Products from Followed Shops
      </Typography.Title>
      <Row gutter={[16, 16]}>
        {followedShopsProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
            >
              <Card.Meta
                title={product.name}
                description={`$${product.price.toFixed(2)}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FollowedProductsSection;
