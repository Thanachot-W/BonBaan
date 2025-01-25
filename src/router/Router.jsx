import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '/หน้าหลัก',
            element: <HomePage />
          }
        ]
      }
    ]
  }
]);

export default router;