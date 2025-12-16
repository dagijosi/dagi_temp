import React from "react";
import { FaBars, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { SETTING } from "../routes/types/routeConstants";

interface TopNavProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const TopNav: React.FC<TopNavProps> = ({ setSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between h-16 px-6 bg-transparent">
      
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
                className="pl-10 pr-4 py-2 text-sm text-theme-text bg-theme-surface border border-theme-border rounded-lg focus:ring-2 focus:ring-theme-primary focus:border-theme-primary transition duration-150 w-48 placeholder:text-theme-text/50"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-theme-icon" />
        </div>

        <button 
          onClick={() => window.location.href = SETTING}
          className="bg-theme-surface hover:bg-theme-surface/80 text-theme-text border border-theme-border/50 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
        >
          Appearance
        </button>

        {/* Notification Icon */}
        <button className="text-theme-text/70 hover:text-theme-primary relative p-2 rounded-full hover:bg-theme-surface/50 transition">
          <FaBell className="w-5 h-5" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full ring-1 ring-theme-surface bg-red-500"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2 cursor-pointer group p-2 rounded-full hover:bg-theme-surface/50 transition">
          <FaUserCircle className="w-7 h-7 text-theme-icon" />
          <span className="text-sm font-semibold text-theme-text hidden sm:block">
            DAGI User
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;