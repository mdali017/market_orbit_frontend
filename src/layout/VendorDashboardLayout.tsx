import React, { useState } from "react";
import { Layout, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import VendorSider from "../pages/Dashboard/VendorDashboard/VendorSideBar/VendorSideBar";
import ProfileMenu from "../pages/Dashboard/VendorDashboard/VendorProfileMenu/VendorProfileMenu";

const { Header, Content } = Layout;

const VendorDashboardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logged out");
    navigate("/login");
  };

  return (
    <Layout className="min-h-screen">
      <VendorSider collapsed={collapsed} onCollapse={setCollapsed} />

      <Layout>
        <Header className="bg-white p-0 flex justify-end items-center pr-6">
          <Dropdown
            overlay={<ProfileMenu onLogout={handleLogout} />}
            placement="bottomRight"
          >
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

export default VendorDashboardLayout;
