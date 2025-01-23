import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router";

const Layout = () => {
  return(
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1">
        <Header title="page" />
        <div className="p-8">
          <Outlet className="flex-1"/>
        </div>
      </main>
    </div>
  );
};

export default Layout;