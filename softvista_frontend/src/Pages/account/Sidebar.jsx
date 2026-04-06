import React from "react";

import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="space-y-1">
      <Link to={`/account/profile`} className="bg-green-300 text-gray-900 px-4 py-2 rounded-md flex items-center font-semibold hover:bg-gray-900 hover:text-white">
        <FaUser className="me-2" /> Profile
      </Link>
      <Link to={`/account/change-password`} className="bg-green-300 text-gray-900 px-4 py-2 rounded-md flex items-center font-semibold hover:bg-gray-900 hover:text-white">
        <FaLock className="me-2" /> Change Password
      </Link>
      <Link className="bg-green-300 text-gray-900 px-4 py-2 rounded-md flex items-center font-semibold hover:bg-gray-900 hover:text-white">
        <IoLogOut size={20} className="me-2" /> Logout
      </Link>
    </div>
  );
};

export default Sidebar;
