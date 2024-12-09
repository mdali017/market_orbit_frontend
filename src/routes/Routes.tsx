import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Shop from "../pages/Shop/Shop";

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
    ],
  },
]);
