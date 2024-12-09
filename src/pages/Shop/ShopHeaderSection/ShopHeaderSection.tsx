import React from "react";
import { Row, Col, Typography, Button, Tooltip } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

interface ShopHeaderProps {
  shop: any;
  followedShops: string[];
  toggleFollow: (vendorId: string) => void;
}

const ShopHeaderSection: React.FC<ShopHeaderProps> = ({
  shop,
  followedShops,
  toggleFollow,
}) => {
  const isFollowing = followedShops.includes(shop.id);

  return (
    <div className="p-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl shadow-lg">
      <Row
        justify="space-between"
        align="middle"
        className="lg:flex-row flex-col gap-6"
      >
        <Col className="text-white">
          <Title level={2} className="text-3xl text-white font-bold tracking-tight">
            {shop.name}
          </Title>
          <Text type="secondary" className="text-lg opacity-90">
            {shop.description}
          </Text>
        </Col>
        <Col>
          <Tooltip title={isFollowing ? "Following" : "Not Following"}>
            <Button
              type={isFollowing ? "primary" : "default"}
              icon={isFollowing ? <HeartFilled /> : <HeartOutlined />}
              onClick={() => toggleFollow(shop.id)}
              className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 transform ${
                isFollowing
                  ? "bg-pink-600 text-white hover:bg-pink-700"
                  : "bg-white text-purple-600 hover:bg-purple-50"
              } rounded-full px-6 py-3 shadow-lg`}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </div>
  );
};

export default ShopHeaderSection;
