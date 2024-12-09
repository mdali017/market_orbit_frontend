import React from "react";
import { Card, Row, Col, Space, Tag, Typography } from "antd";

const { Text } = Typography;

interface ShopDetailsProps {
  shop: any;
}

const ShopDetails: React.FC<ShopDetailsProps> = ({ shop }) => (
  <Card className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <Row gutter={16} className="md:flex-row">
      <Col span={24} md={8} className="flex flex-col">
        <Space direction="vertical" className="space-y-4">
          <Tag color="blue" className="font-semibold text-lg capitalize">
            {`Vendor: ${shop.vendor.name}`}
          </Tag>
          <Text className="text-gray-700 text-base">{`Email: ${shop.vendor.email}`}</Text>
        </Space>
      </Col>
      <Col span={24} md={16} className="flex flex-col justify-center">
        {/* Additional Information about Shop */}
        <div className="mt-6">
          <Text className="text-gray-600">More information about this shop could go here. Provide extra details or descriptions to enhance the user experience.</Text>
        </div>
      </Col>
    </Row>
  </Card>
);

export default ShopDetails;
