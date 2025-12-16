// src/components/Sidebar.tsx (Ui Improved - Premium)

import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import { FaHome, FaInfoCircle, FaEnvelope, FaTimes, FaAngleDoubleLeft, FaAngleDoubleRight, FaChartLine, FaLayerGroup } from "react-icons/fa";
import { DASHBOARD, SETTING } from "../routes/types/routeConstants";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: "Dashboard", href: DASHBOARD, icon: FaChartLine }, 
    { name: "Settings", href: SETTING, icon: FaInfoCircle },
  ];

  return (
    <>
      {/* 1. Mobile Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. Sidebar Container */}
      <div
        className={`
          fixed top-0 left-0 h-screen transition-all duration-500 ease-in-out z-30
          bg-theme-surface/90 backdrop-blur-xl border-r border-theme-border
          ${isOpen ? 'w-64' : 'w-20'}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center h-20 px-6 border-b border-theme-border/50">
              <div className="flex items-center text-theme-icon min-w-max">
                 <div className="p-2 bg-theme-icon/10 rounded-xl shrink-0">
                    <FaLayerGroup className="w-6 h-6" />
                 </div>
                 <h1 
                    className={`text-2xl font-bold tracking-tight text-theme-text overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-w-[200px] opacity-100 ml-3' : 'max-w-0 opacity-0 ml-0'
                    }`}
                >
                    DAGI
                </h1>
              </div>
              
              {/* Close Button for Mobile */}
              <button 
                className="ml-auto lg:hidden text-theme-text/60 hover:text-theme-icon transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col space-y-2 px-4 py-8">
              {links.map((link) => {
                const isActive = currentPath === link.href;
                return (
                  <SidebarLink 
                    key={link.name}
                    link={link}
                    isActive={isActive}
                    isOpen={isOpen}
                    onClick={() => {
                        // Only close on mobile (lg breakpoint is 1024px)
                        if (window.innerWidth < 1024) {
                            setIsOpen(false);
                        }
                    }}
                  />
                );
              })}
            </nav>
            
            {/* Toggle Button (Desktop) */}
            <div className="p-4 border-t border-theme-border/50 hidden lg:block">
              <button 
                className={`
                    w-full flex items-center h-12 px-3 rounded-xl transition-all duration-200 group
                    text-theme-text/70 hover:bg-theme-text/5 hover:text-theme-icon
                    ${!isOpen && "justify-center"}
                `}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Minimize sidebar" : "Maximize sidebar"}
              >
                  {/* Icon Wrapper for consistent sizing - Left Align to match links */}
                  <div className="flex items-center justify-center min-w-[24px]">
                      {isOpen ? <FaAngleDoubleLeft className="w-5 h-5" /> : <FaAngleDoubleRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />}
                  </div>

                  {/* Text Label */}
                  <span 
                    className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out text-left ${
                         isOpen ? 'max-w-[200px] opacity-100 ml-4' : 'max-w-0 opacity-0 ml-0'
                    }`}
                  >
                    Collapse Sidebar
                  </span>
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

// Helper Component for Links to handle Tooltips cleanly
const SidebarLink: React.FC<{
    link: { name: string; href: string; icon: React.ElementType };
    isActive: boolean;
    isOpen: boolean;
    onClick: () => void;
}> = ({ link, isActive, isOpen, onClick }) => {
    return (
        <Link
            to={link.href}
            onClick={onClick}
            className={`
                relative flex items-center h-12 px-3 rounded-xl transition-all duration-200 group
                ${isActive 
                    ? 'bg-theme-icon text-white shadow-lg shadow-theme-icon/20' 
                    : 'text-theme-text/70 hover:bg-theme-text/5 hover:text-theme-icon'
                }
            `}
        >
            <div className="flex items-center justify-center min-w-[24px]">
                <link.icon className={`w-5 h-5 transition-transform duration-300 ${!isOpen && "group-hover:scale-110"}`} />
            </div>
            
            <span 
                className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-w-[200px] opacity-100 ml-4' : 'max-w-0 opacity-0 ml-0'
                }`}
            >
                {link.name}
            </span>

            {/* Tooltip for Collapsed State */}
            {!isOpen && (
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-theme-text text-theme-surface text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-xl z-50">
                    {link.name}
                    {/* Tiny arrow */}
                    <div className="absolute top-1/2 right-full -mt-1 -mr-1 border-4 border-transparent border-r-theme-text"></div>
                </div>
            )}
        </Link>
    );
}

export default Sidebar;