import React from "react";

const Header = ({ title }) => {
  return (
    <header className="p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 ">{title}</h1>
    </header>
  );
};

export default Header;
