import React from "react";
import { Link } from "react-router-dom";
import { FaTasks, FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";

const Sidebar = ({ name, path }) => {
  const menuItems = [
    {
      to: `addtask`,
      icon: <MdAssignmentAdd size={25} />,
      label: "Add Task",
    },
    { to: `task`, icon: <FaTasks size={25} />, label: "Tasks" },
    { to: `profile`, icon: <FaUser size={25} />, label: "Profile" },
    {
      to: `settings`,
      icon: <IoSettings size={25} />,
      label: "Settings",
    },
  ];

  return (
    <div className="flex min-h-screen items-center bg-black text-white">
      <div className="flex flex-col gap-10 p-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={`/${name}/${item.to}`}
            className={`block text-lg text-gray-300 hover:bg-gray-700 p-2 rounded transition duration-200 ${
              path === item.to && "bg-gray-700"
            }`}
            aria-label={item.label}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;