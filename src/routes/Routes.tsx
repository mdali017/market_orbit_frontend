import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/Authentication/Signup";
import Login from "../pages/Authentication/Login";
import VendorDashboard from "../pages/Dashboard/VendorDashboard/VendorDashboard";
import VendorProductsManagement from "../pages/Dashboard/VendorDashboard/ProductManagement/ProductManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-details/:id", // make dynamic this
        element: <ProductDetails />,
      },
      {
        path: "/shop/:id",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "dashboard/vendor",
    element: <VendorDashboard />,
    children: [
      {
        path: "products",
        element: <VendorProductsManagement />,
      },
    ],
  },
]);
