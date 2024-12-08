import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
