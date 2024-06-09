import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <div className="sticky top-0  h-[80vh]  rounded-lg w-[26%]  z-50 overflow-hidden bg-red-400   overflow-y-auto">
        <div
          className="absolute right-0 w-8 h-8  cursor-pointer bg-red-500 font-extrabold"
          onClick={() => setIsSidebarOpen((preValue) => !preValue)}
        >
          _-_-kghghgh
        </div>
      </div>
    </>
  );
};

export default Sidebar;
