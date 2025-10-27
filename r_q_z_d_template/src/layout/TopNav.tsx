// src/components/TopNav.tsx (UI IMPROVED)

import React from "react";
import { FaBars, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

interface TopNavProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const TopNav: React.FC<TopNavProps> = ({ setSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-white shadow-sm">
      
      {/* Left Side: Menu/Toggle Button & Title */}
      <div className="flex items-center">
        {/* Toggle button for mobile */}
        <button
          className="text-gray-400 hover:text-indigo-600 focus:outline-none lg:hidden mr-4 p-2 rounded-full"
          onClick={() => setSidebarOpen(true)} 
          aria-label="Open sidebar"
        >
          <FaBars className="w-5 h-5" />
        </button>
        
      </div>
      
      {/* Right Side: Icons and Profile */}
      <div className="flex items-center space-x-3 md:space-x-4">
        
        {/* Search Bar (Hidden on small screens) */}
        <div className="relative hidden md:block">
            <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 w-48"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>

        {/* Notification Icon */}
        <button className="text-gray-400 hover:text-indigo-600 relative p-2 rounded-full hover:bg-gray-100 transition">
          <FaBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-1 ring-white bg-red-500"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2 cursor-pointer group p-2 rounded-full hover:bg-gray-100 transition">
          <FaUserCircle className="w-7 h-7 text-indigo-500" />
          <span className="text-sm font-semibold text-gray-700 hidden sm:block">
            DAGI User
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;