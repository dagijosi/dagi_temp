import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Logo } from "../Logo";
import { SidebarTooltip } from "../overlays/SidebarTooltip";

interface SidebarHeaderProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ 
  isOpen, 
  isMobile, 
  onClose 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center h-16 sm:h-20 px-3 sm:px-4 border-b border-theme-border/50 relative">
      <motion.div 
        className="flex items-center text-theme-icon absolute inset-0 px-3 sm:px-4"
        animate={{ 
          x: isOpen ? 0 : '50%',
          translateX: isOpen ? '0%' : '-50%'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ display: 'flex', alignItems: 'center', height: '100%' }}
      >
        <SidebarTooltip content="DAGI" show={!isOpen && !isMobile && isHovered}>
          <div className="shrink-0 text-theme-icon">
            <Logo size={40} useCurrentColor={true} />
          </div>
        </SidebarTooltip>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: isMobile ? 0.2 : 0.4, 
                ease: [0.4, 0, 0.2, 1],
                delay: isMobile ? 0 : 0.1
              }}
              className="flex flex-col ml-2 sm:ml-3 overflow-hidden"
            >
              <span className="text-base sm:text-lg font-bold tracking-tight text-theme-text whitespace-nowrap">
                DAGI
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-theme-text/50 uppercase tracking-widest whitespace-nowrap">
                The Best Template
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Close Button for Mobile */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="ml-auto text-theme-text/60 hover:text-theme-icon transition-colors relative z-10 p-2 rounded-lg hover:bg-theme-text/5"
            onClick={onClose}
            aria-label="Close menu"
          >
            <FaTimes className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarHeader;
