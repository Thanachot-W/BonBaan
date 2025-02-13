import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { SidebarTrigger } from "../ui/sidebar";

const Header = ({ title }) => {
  return (
    <header className="py-3 px-8 bg-white shadow-md flex gap-8">
      <SidebarTrigger />
      <Breadcrumbs />
    </header>
  );
};

export default Header;
