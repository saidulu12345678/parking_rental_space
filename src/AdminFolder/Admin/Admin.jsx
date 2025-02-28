import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import Profile from "../profile/profile";
import AdminAddParking from "../Addlocation/Addlocation";
import BookingAdmin from "../BookedDetails/BookedDetails";
import {
  UserOutlined,
  EnvironmentOutlined,
  FileOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Admin.css";

const { Sider, Content } = Layout;

const AdminPanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("profile");
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("islogin") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("islogin");
    localStorage.removeItem("username");
    navigate("/login");
  };

  const renderComponent = () => {
    switch (selectedMenu) {
      case "profile":
        return <Profile />;
      case "maps":
        return <AdminAddParking />;
      case "bookings":
        return <BookingAdmin />;
      default:
        return <Profile />;
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">Admin</div>
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["profile"]}
          selectedKeys={[selectedMenu]}
          onClick={(e) => setSelectedMenu(e.key)}
        >
          <Menu.Item key="profile" icon={<UserOutlined />}>Profile</Menu.Item>
          <Menu.Item key="maps" icon={<EnvironmentOutlined />}>Maps</Menu.Item>
          <Menu.Item key="bookings" icon={<FileOutlined />}>Bookings</Menu.Item>
          {isLoggedIn ? (
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="login" icon={<LoginOutlined />} onClick={() => navigate("/login")}>
              Login
            </Menu.Item>
          )}
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Content style={{ margin: "16px", padding: "24px", background: "#fff" }}>
          {renderComponent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPanel;
