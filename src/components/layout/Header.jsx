import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const Header = ({ title }) => {
  return (
    <header className="py-4 px-8 bg-white shadow-md">
      <Breadcrumbs />
    </header>
  );
};

export default Header;
