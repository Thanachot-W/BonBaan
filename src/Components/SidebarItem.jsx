import React from "react";

const SidebarItem = ({ text, icon, active }) => {
  return (
    <li
      className={`flex items-center px-6 py-3 space-x-3 text-lg rounded-lg ${
        active ? " bg-purple-300 text-[#5E17EB] " : "hover:bg-[#c6bcff] hover:mr-2 hover:ml-2 hover:text-[#5e17eb] cursor-pointer"
      }`}
    >
      <span className="material-icons">{icon}</span>
      <span>{text}</span>
    </li>
  );
};

export default SidebarItem;

