import React, { useState } from "react";
import { FaBars, FaSearch, FaCog } from "react-icons/fa";
import { SETTING, DASHBOARD, PROFILE, USERS, ACTIVITY } from "../routes/types/routeConstants";
import { useNavigate, useLocation } from "react-router-dom";
import { CustomDropdown, NotificationDropdown, Breadcrumb } from "../components/ui";
import type { BreadcrumbItem } from "../components/ui";

interface TopNavProps {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const breadcrumbMap: Record<string, string> = {
  [DASHBOARD]: "Dashboard",
  [SETTING]: "Settings",
  [PROFILE]: "Profile",
  [USERS]: "Users",
  [ACTIVITY]: "Activity",
};

const TopNav: React.FC<TopNavProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathname = location.pathname;
    const crumbs: BreadcrumbItem[] = [];
    
    // Always start with Dashboard
    crumbs.push({ name: "Dashboard", path: DASHBOARD });

    // If not on Dashboard, add current page
    if (pathname !== DASHBOARD && breadcrumbMap[pathname]) {
      crumbs.push({ name: breadcrumbMap[pathname], path: pathname });
    }

    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-transparent backdrop-blur-md border-b border-theme-border/10 transition-all duration-300">
      
      {/* Left Side: Menu/Toggle Button & Breadcrumb */}
      <div className="flex items-center">
        {/* Toggle button for all screen sizes */}
        <button
          className="text-theme-text/70 hover:text-theme-icon focus:outline-none mr-4 p-2 rounded-full hover:bg-theme-surface/50 transition-colors"
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          <FaBars className="w-5 h-5" />
        </button>

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbs} />
      </div>
      
      {/* Right Side: Icons and Profile */}
      <div className="flex items-center space-x-4">
        
        {/* Search Bar (Hidden on small screens) */}
        <div className={`relative hidden md:block transition-all duration-300 ${isSearchFocused ? 'w-64' : 'w-48'}`}>
            <input 
                type="text" 
                placeholder="Search..." 
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2 text-sm text-theme-text bg-theme-surface/50 border border-theme-border/50 rounded-full focus:ring-2 focus:ring-theme-icon/50 focus:border-theme-icon transition-all duration-300 shadow-sm placeholder:text-theme-text/40"
            />
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${isSearchFocused ? 'text-theme-icon' : 'text-theme-text/40'}`} />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
            <button 
              onClick={() => navigate(SETTING)}
              className="p-2 text-theme-text/70 hover:text-theme-icon hover:bg-theme-surface/50 rounded-full transition-all duration-200 group relative"
              aria-label="Settings"
            >
              <FaCog className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Notification Dropdown */}
            <NotificationDropdown />
        </div>

        {/* User Profile Separator */}
        <div className="h-8 w-px bg-theme-border/40 mx-2 hidden sm:block"></div>

        {/* User Profile */}
        <CustomDropdown
            options={["Profile", "Settings", "Logout"]}
            onSelect={(value) => {
                if (value === "Settings") navigate(SETTING);
                if (value === "Profile") navigate('/profile');
                console.log("Selected:", value);
            }}
            selected={
                location.pathname === SETTING ? "Settings" : 
                location.pathname === '/profile' ? "Profile" : 
                undefined
            }
            width="w-48"
            trigger={
                <div className="flex items-center space-x-3 cursor-pointer group p-1.5 pr-3 rounded-full hover:bg-theme-surface border border-transparent hover:border-theme-border/50 hover:shadow-sm transition-all duration-200">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-theme-icon to-purple-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-theme-surface flex items-center justify-center overflow-hidden">
                          <img 
                              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                              alt="User" 
                              className="w-full h-full object-cover"
                          />
                      </div>
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-theme-background"></div>
                  </div>
                  <div className="hidden sm:flex flex-col items-start leading-tight">
                     <span className="text-sm font-semibold text-theme-text group-hover:text-theme-icon transition-colors">
                        DAGI User
                     </span>
                     <span className="text-xs text-theme-text/50">Admin</span>
                  </div>
                </div>
            }
        />
      </div>
    </div>
  );
};

export default TopNav;