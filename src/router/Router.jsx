import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import ServicesPage from "../pages/ServicesPage";
import InsertServicesPage from "../pages/InsertServicePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    element: <ProtectedRoute />,
    children: [
      { element: <Layout />, children: [
          { path: '/หน้าหลัก', element: <HomePage /> },
          { path: '/บริการ', element: <ServicesPage /> },
          { path: '/บริการ/สร้างบริการใหม่', element: <InsertServicesPage /> }
        ]}
    ]
  }
]);

export default router;