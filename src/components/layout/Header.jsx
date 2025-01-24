import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Header = ({ title }) => {
  return (
    <header className="p-4 bg-white shadow-md">
      <Breadcrumbs />
    </header>
  );
};

export default Header;
