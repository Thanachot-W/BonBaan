import { createBrowserRouter, useMatch } from "react-router";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import ServicesPage from "../pages/ServicesPage";
import InsertServicePage from "../pages/InsertServicePage";
import ServicesCategoriesPage from "../pages/ServicesCategoriesPage";
import ServicesReviewsPage from "../pages/ServicesReviewsPage";
import OrdersPage from "../pages/OrdersPage";
import InboxPage from "../pages/InboxPage";
import ChatsPage from "../pages/ChatsPage";
import UsersPage from "../pages/UsersPage";
import LogoutPage from "../pages/LogoutPage";
import EditServicePage from "../pages/EditServicePage";
import { OrderID, ServiceID } from "./param-ids";
import { serviceAction, serviceLoader } from "../routes/editServiceRoute";
import OrderPage from "../pages/OrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/logout",
    element: <LogoutPage />
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
            path: "/inbox",
            element: <InboxPage />,
            handle: {
              crumb: () => "คำขอ",
            },
          },
          {
            path: "/orders",
            handle: {
              crumb: () => "คำสั่งซื้อ",
            },
            children: [
              {
                index: true,
                element: <OrdersPage />
              },
              {
                path: "/orders/:id",
                element: <OrderPage />,
                handle: {
                  crumb: () => <OrderID />
                }
              }
            ]
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
                path: "/services/:id",
                element: <EditServicePage />,
                loader: serviceLoader,
                action: serviceAction,
                handle: {
                  crumb: () => <ServiceID />,
                },
              },
              {
                path: "/services/insert",
                element: <InsertServicePage />,
                handle: {
                  crumb: () => "สร้างบริการใหม่",
                },
              },
              {
                path: "/services/categories",
                element: <ServicesCategoriesPage />,
                handle: {
                  crumb: () => "หมวดหมู่",
                },
              },
              {
                path: "/services/reviews",
                element: <ServicesReviewsPage />,
                handle: {
                  crumb: () => "รีวิว",
                },
              },
            ],
          },
          {
            path: "/chat",
            element: <ChatsPage />,
            handle: {
              crumb: () => "พูดคุย",
            },
          },
          {
            path: "/users",
            element: <UsersPage />,
            handle: {
              crumb: () => "ผู้ใช้",
            },
          },
        ],
      },
    ],
  },
]);

export default router;
