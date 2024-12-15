import { FC } from "react";
import { Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

interface ProfileMenuProps {
  onLogout: () => void; // Add this if you need to handle logout
}

const ProfileMenu: FC<ProfileMenuProps> = ({ onLogout }) => {
  return (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        danger
        onClick={onLogout}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default ProfileMenu;
