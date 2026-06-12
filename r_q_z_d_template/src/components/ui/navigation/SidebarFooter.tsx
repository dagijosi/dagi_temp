import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt, FaCog, FaUser, FaChevronRight } from "react-icons/fa";
import { useAuthStore } from "../../../store/authStore";
import {  SidebarFooterFlyout } from "../overlays";
import { LOGIN, SETTING } from "../../../routes/types/routeConstants";

interface MenuItem {
  id: string;
  icon: React.ElementType;
  label: string;
  href?: string;
  onClick: () => void;
  color?: string;
  hoverColor?: string;
}

interface SidebarFooterProps {
  isOpen: boolean;
  isMobile: boolean;
  onLinkClick?: () => void;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  isOpen,
  isMobile,
  onLinkClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout: clearLocalSession, user } = useAuthStore();
  const [isHoveredUser, setIsHoveredUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleSignOut = () => {
    clearLocalSession();
    navigate(LOGIN);
  };

  const handleSettings = () => {
    navigate(SETTING);
    setShowMenu(false);
    if (isMobile && onLinkClick) {
      onLinkClick();
    }
  };

  const handleProfile = () => {
    navigate("/profile");
    setShowMenu(false);
    if (isMobile && onLinkClick) {
      onLinkClick();
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems: MenuItem[] = [
    {
      id: "settings",
      icon: FaCog,
      label: "Settings",
      href: SETTING,
      onClick: handleSettings,
    },
    {
      id: "profile",
      icon: FaUser,
      label: "Profile",
      href: "/profile",
      onClick: handleProfile,
    },
    {
      id: "signout",
      icon: FaSignOutAlt,
      label: "Sign Out",
      onClick: handleSignOut,
      color: "text-theme-text/70",
      hoverColor: "hover:bg-red-500/10 hover:text-red-500",
    },
  ];

  const userAvatar = (
    <div className="relative shrink-0">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-theme-icon to-purple-500 p-0.5">
        <div className="w-full h-full rounded-xl bg-theme-surface flex items-center justify-center overflow-hidden">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      {/* Online Status Dot */}
      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-theme-surface rounded-full shadow-sm" />
    </div>
  );

  return (
    <div className={`mt-auto transition-all duration-300 ${isOpen ? "p-3" : "p-2"}`}>
      {isOpen ? (
        <div className="relative" ref={menuRef}>
          {/* Menu Dropdown */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                className="absolute bottom-full left-0 w-full mb-3 p-1.5 bg-theme-surface border border-theme-border/50 rounded-2xl shadow-2xl z-20 space-y-1 backdrop-blur-xl bg-theme-surface/90"
              >
                {menuItems.map((item) => {
                  const isActive = item.href && location.pathname === item.href;
                  return (
                    <button
                      key={item.id}
                      className={`w-full flex items-center h-10 px-3 rounded-xl transition-all duration-200 group ${
                        isActive 
                          ? "bg-theme-icon/10 text-theme-icon shadow-sm" 
                          : item.color || "text-theme-text/70 hover:bg-theme-text/5 hover:text-theme-icon"
                      } ${item.hoverColor || ""}`}
                      onClick={item.onClick}
                      aria-label={item.label}
                    >
                      <div className={`flex items-center justify-center min-w-5 shrink-0 transition-colors ${isActive ? 'text-theme-icon' : 'opacity-60 group-hover:opacity-100'}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="font-semibold whitespace-nowrap ml-3 text-sm tracking-tight">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* User Card */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={toggleMenu}
            className={`w-full flex items-center p-2 rounded-2xl transition-all duration-300 border group ${
              showMenu 
                ? "bg-theme-icon/5 border-theme-icon/20 ring-4 ring-theme-icon/5" 
                : "bg-theme-text/[0.03] border-theme-border/20 hover:bg-theme-text/[0.06] hover:border-theme-border/50 hover:shadow-md"
            }`}
          >
            {userAvatar}
            
            <div className="flex items-center justify-between flex-1 ml-3 min-w-0">
              <div className="flex flex-col items-start min-w-0">
                <span className="text-sm font-bold text-theme-text truncate w-full text-left tracking-tight">
                  {user?.name}
                </span>
                <div className="mt-0.5">
                  <span className="text-[9px] font-black text-theme-icon/70 uppercase tracking-[0.1em]">
                    {user?.role}
                  </span>
                </div>
              </div>
              <FaChevronRight 
                size={12} 
                className={`text-theme-text/20 transition-all duration-300 transform group-hover:text-theme-icon/50 ${showMenu ? 'rotate-90 text-theme-icon/50' : ''}`} 
              />
            </div>
          </motion.button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {!isMobile ? (
            <SidebarFooterFlyout
              user={user}
              menuItems={menuItems}
              show={isHoveredUser}
              onMouseEnter={() => setIsHoveredUser(true)}
              onMouseLeave={() => setIsHoveredUser(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 border ${
                  isHoveredUser 
                    ? "bg-theme-icon/10 border-theme-icon/30 shadow-lg shadow-theme-icon/10" 
                    : "bg-theme-text/[0.03] border-theme-border/20 hover:border-theme-border/50"
                }`}
                aria-label="User Profile"
              >
                {userAvatar}
              </motion.button>
            </SidebarFooterFlyout>
          ) : (
            <button
              onClick={handleProfile}
              className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-theme-text/[0.03] border border-theme-border/20 text-theme-icon"
              aria-label="User Profile"
            >
              {userAvatar}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarFooter;
