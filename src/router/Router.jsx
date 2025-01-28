import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import ServicesPage from "../pages/ServicesPage";
import InsertServicePage from "../pages/InsertServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/home",
            element: <HomePage />,
            handle: {
              crumb: () => "หน้าหลัก",
            },
          },
          {
            path: "/services",
            handle: {
              crumb: () => "บริการ",
            },
            children: [
              {
                index: true,
                element: <ServicesPage />,
              },
              {
                path: "/services/insert",
                element: <InsertServicePage />,
                handle: {
                  crumb: () => "สร้างบริการใหม่",
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
