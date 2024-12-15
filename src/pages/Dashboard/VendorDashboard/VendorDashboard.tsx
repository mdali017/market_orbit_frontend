import React from "react";
import { Card, Col, Row } from "antd";
import { DollarOutlined, ShoppingCartOutlined, StarOutlined, InboxOutlined, LineChartOutlined } from "@ant-design/icons";
// import { useGetLoggedInUserShopQuery } from "../../../redux/api/api";

const stats = [
  {
    title: "Total Sales",
    value: "$15,300",
    icon: <DollarOutlined style={{ color: "#4caf50", fontSize: 24 }} />,
  },
  {
    title: "Total Orders",
    value: "256 Orders",
    icon: <ShoppingCartOutlined style={{ color: "#1890ff", fontSize: 24 }} />,
  },
  {
    title: "Pending Orders",
    value: "42 Orders",
    icon: <InboxOutlined style={{ color: "#ff9800", fontSize: 24 }} />,
  },
  {
    title: "Completed Orders",
    value: "200 Orders",
    icon: <LineChartOutlined style={{ color: "#673ab7", fontSize: 24 }} />,
  },
  {
    title: "Average Rating",
    value: "4.5/5",
    icon: <StarOutlined style={{ color: "#ff5722", fontSize: 24 }} />,
  },
  {
    title: "Products Listed",
    value: "120 Products",
    icon: <InboxOutlined style={{ color: "#2196f3", fontSize: 24 }} />,
  },
];

const VendorDashboard: React.FC = () => {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "16px" }}>Vendor Dashboard</h1>
      
      {/* Statistics Section */}
      <Row gutter={[16, 16]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              bordered={false}
              style={{
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ marginRight: "16px" }}>{stat.icon}</div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "16px", color: "#555" }}>
                    {stat.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VendorDashboard;
