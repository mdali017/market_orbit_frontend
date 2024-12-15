import { FC } from "react";
import { Layout, Menu } from "antd";
import {
  ShopOutlined,
  ProductOutlined,
  MessageOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

interface VendorSiderProps {
  collapsed: boolean;
  onCollapse: (value: boolean) => void;
}

const VendorSider: FC<VendorSiderProps> = ({ collapsed, onCollapse }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
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
          <Link to="/dashboard/vendor">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="shop" icon={<ProductOutlined />}>
          <Link to="/dashboard/vendor/shop">Shop</Link>
        </Menu.Item>
        <Menu.Item key="products" icon={<ProductOutlined />}>
          <Link to="/dashboard/vendor/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="orders" icon={<OrderedListOutlined />}>
          <Link to="/vendor/orders">Orders</Link>
        </Menu.Item>
        <Menu.Item key="reviews" icon={<MessageOutlined />}>
          <Link to="/vendor/reviews">Reviews</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default VendorSider;
