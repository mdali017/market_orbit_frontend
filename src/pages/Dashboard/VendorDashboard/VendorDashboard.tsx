import React, { useState } from "react";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  ShopOutlined,
  ProductOutlined,
  MessageOutlined,
  OrderedListOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const VendorDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="bg-gray-800"
      >
        <div className="vendor-logo p-4 text-center">
          {!collapsed ? (
            <h1 className="text-white text-xl font-bold">Vendor Portal</h1>
          ) : (
            <ShopOutlined className="text-white text-2xl" />
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          className="bg-gray-800"
        >
          <Menu.Item key="dashboard" icon={<ShopOutlined />}>
            <Link to="/vendor/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="Shop " icon={<ProductOutlined />}>
            <Link to="/shop/products">Shop </Link>
          </Menu.Item>
          <Menu.Item key="Products " icon={<ProductOutlined />}>
            <Link to="/vendor/products">Products </Link>
          </Menu.Item>
          <Menu.Item key="Orders " icon={<OrderedListOutlined />}>
            <Link to="/vendor/orders">Orders </Link>
          </Menu.Item>
          <Menu.Item key="reviews" icon={<MessageOutlined />}>
            <Link to="/vendor/reviews">Reviews</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header className="bg-white p-0 flex justify-end items-center pr-6">
          <Dropdown overlay={profileMenu} placement="bottomRight">
            <div className="cursor-pointer flex items-center">
              <Avatar icon={<UserOutlined />} className="mr-2" />
              <span className="text-gray-700">Vendor Name</span>
            </div>
          </Dropdown>
        </Header>

        <Content className="m-4 p-6 bg-white rounded-lg shadow-md">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default VendorDashboard;
