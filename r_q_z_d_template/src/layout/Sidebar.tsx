// src/components/Sidebar.tsx (UI IMPROVED)

import React from "react";
import { Link } from "react-router-dom"; 
import { FaHome, FaInfoCircle, FaEnvelope, FaTimes, FaAngleDoubleLeft, FaAngleDoubleRight, FaChartLine } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const links = [
    // Added a Dashboard link to better reflect the purpose
    { name: "Dashboard", href: "/dashboard", icon: FaChartLine }, 
    { name: "Reports", href: "/reports", icon: FaHome },
    { name: "Settings", href: "/settings", icon: FaInfoCircle },
    { name: "Support", href: "/support", icon: FaEnvelope },
  ];

  const currentPath = window.location.pathname;

  return (
    <>
      {/* 1. Mobile Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/40 transition-opacity lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. Sidebar Container */}
      <div
        className={`
          fixed top-0 left-0 h-screen bg-white text-gray-800 transition-all duration-300 ease-in-out z-30
          shadow-2xl lg:shadow-xl
          ${isOpen ? 'w-64' : 'w-20'}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center h-16 mb-8 px-4 border-b border-gray-100 overflow-hidden">
          <h1 
            className={`text-2xl font-extrabold text-indigo-600 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            DAGI
          </h1>
          
          {/* Close Button for Mobile */}
          <button 
            className="absolute top-4 right-4 lg:hidden text-gray-400 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1 px-3">
          {links.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  flex items-center p-3 rounded-xl transition duration-200 group
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                  }
                `}
                onClick={() => setIsOpen(false)} 
              >
                {/* Icon */}
                <link.icon className={`w-5 h-5 ${isOpen ? 'mr-3' : 'mx-auto'} ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-indigo-600'}`} />
                
                {/* Link name */}
                <span 
                  className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 hidden'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
        
        {/* Minimize/Maximize Toggle (Desktop) */}
        <div 
          className={`absolute bottom-4 ${isOpen ? 'right-4' : 'right-0 left-0 text-center'} transition-all duration-300 hidden lg:block`}
        >
          <button 
            className="p-2 text-indigo-600 hover:text-white hover:bg-indigo-600 bg-gray-100 rounded-full shadow-lg transition duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Minimize sidebar" : "Maximize sidebar"}
          >
            {isOpen ? <FaAngleDoubleLeft className="w-4 h-4" /> : <FaAngleDoubleRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;