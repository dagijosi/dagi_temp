// src/components/Layout.js (UI IMPROVED)

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import TopNav from "./TopNav";

const Layout = () => {
  // Start with the sidebar open for a desktop dashboard view
  const [sidebarOpen, setSidebarOpen] = useState(true); 

  return (
    <div className="flex h-screen bg-gray-50 font-sans antialiased"> {/* BG and Font */}
      
      {/* 1. Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
      />

      {/* 2. Main Content Area */}
      <div 
        className={`
          flex-1 flex flex-col overflow-hidden transition-all duration-300
          ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-20'} 
        `}
      >
        {/* Top Navigation */}
        <header className="bg-white sticky top-0 z-10 shadow-sm border-b border-gray-100">
          <TopNav 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen} 
          />
        </header>

        {/* Main Content (Outlet) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6"> {/* Increased padding */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;