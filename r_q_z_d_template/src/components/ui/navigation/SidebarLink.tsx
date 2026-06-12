import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarTooltip } from "../overlays";

interface SidebarLinkProps {
  link: { 
    name: string; 
    href: string; 
    icon: React.ElementType 
  };
  isActive: boolean;
  isOpen: boolean;
  isMobile: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ 
  link, 
  isActive, 
  isOpen, 
  isMobile, 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={link.href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex items-center h-11 sm:h-12 rounded-xl transition-all duration-200 group touch-manipulation overflow-hidden
        ${
          isActive
            ? "bg-theme-icon/10 text-theme-icon shadow-lg shadow-theme-icon/20"
            : "text-theme-text/70 hover:bg-theme-text/5 hover:text-theme-icon active:bg-theme-text/10"
        }
      `}
    >
      <motion.div 
        className="flex items-center absolute inset-y-0 left-0"
        animate={{ 
          left: isOpen ? "0%" : "50%",
          x: isOpen ? "0%" : "-50%",
          paddingLeft: isOpen ? (isMobile ? "12px" : "16px") : "0px",
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <SidebarTooltip 
          content={link.name} 
          show={!isOpen && !isMobile && isHovered}
        >
          <div className="flex items-center justify-center min-w-[24px] shrink-0">
            <link.icon className="w-4 h-4" />
          </div>
        </SidebarTooltip>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: isMobile ? 0.15 : 0.4, 
                ease: [0.4, 0, 0.2, 1],
                delay: isMobile ? 0 : 0.1
              }}
              className="font-semibold whitespace-nowrap ml-3 overflow-hidden text-base"
            >
              {link.name}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default SidebarLink;
