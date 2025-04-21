import React from "react";
import { NavLink } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa6";
import { MdInsights, MdEventAvailable, MdGroups2 } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import logo from "../../assets/NextIQz.png";

const Sidebar = ({ isSidebarOpen, handleNavigation }) => {
  const menuItems = [
    { name: "News", path: "/news", icon: <FaNewspaper /> },
    { name: "Insights", path: "/insights", icon: <MdInsights /> },
    { name: "Events", path: "/events", icon: <MdEventAvailable /> },
    { name: "Community", path: "/community", icon: <MdGroups2 /> },
    { name: "Podcast", path: "/podcast", icon: <FaMicrophoneAlt /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-md text-black transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-10`}
    >
      <header className="flex items-center justify-between p-[12.5px] bg-blue-700 shadow-md">
      <div className="ml-4">
          <img src={logo} alt="Logo" width={150} />
        </div>
      </header>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 mt-1 py-3 space-x-4 ${
                isActive
                  ? "border-2 border-blue-700 text-black m-2 rounded-3xl"
                  : "hover:bg-blue-700 m-2 rounded-2xl"
              }`
            }
            onClick={handleNavigation}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
      <div className="navbar fixed bottom-0 left-0 w-full text-center mb-2">
        <p className="text-black text-sm">
          Copyright © NextIQz Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
