import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuthStore } from "../../../store/authStore";
import { SidebarTooltip } from "../overlays/SidebarTooltip";

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
  const { logout: clearLocalSession } = useAuthStore();
  const [isHoveredSub, setIsHoveredSub] = useState(false);
  const [isHoveredSignOut, setIsHoveredSignOut] = useState(false);

  // Mock organization data
  const currentOrg = {
    subscription: {
      plan: {
        code: "pro",
        name: "Pro Plan"
      }
    }
  };

  const handleSignOut = () => {
    // Immediate local cleanup and redirect
    clearLocalSession();
    navigate("/");
  };

  return (
    <div
      className={`border-t border-theme-border/50 ${isOpen ? "p-3 sm:p-4" : "p-2"} relative space-y-3`}
    >
      {/* Subscription Status - Open State (Compact Card) */}
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="open-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => {
              // navigate("/organization?tab=subscription");
              if (isMobile && onLinkClick) {
                onLinkClick();
              }
            }}
            className="group/sub cursor-pointer relative overflow-hidden bg-linear-to-br from-theme-icon to-theme-icon/90 rounded-2xl py-3 px-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10"
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 mb-0.5 leading-none">
                  Current Plan
                </span>
                <span className="text-sm font-extrabold text-white truncate leading-tight">
                  {currentOrg.subscription.plan.name}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl px-2.5 py-1 border border-white/30 hover:bg-white/40 transition-all duration-200 shadow-sm active:scale-95">
                <span className="text-[10px] font-black text-white uppercase tracking-tighter">
                  Upgrade
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Subscription Status - Closed State (Micro-indicator) */
          <motion.div
            key="closed-sub"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onMouseEnter={() => setIsHoveredSub(true)}
            onMouseLeave={() => setIsHoveredSub(false)}
            onClick={() => {
              // navigate("/organization?tab=subscription");
              if (isMobile && onLinkClick) {
                onLinkClick();
              }
            }}
            className="flex flex-col items-center justify-center py-1 group/sub cursor-pointer relative"
          >
            <div className="relative">
              <div
                className={`w-2.5 h-2.5 rounded-full ${currentOrg?.subscription?.plan.code === "free" ? "bg-amber-400" : "bg-theme-icon"} shadow-sm`}
              />
              <div
                className={`absolute inset-0 w-full h-full rounded-full animate-ping opacity-40 ${currentOrg?.subscription?.plan.code === "free" ? "bg-amber-400" : "bg-theme-icon"}`}
              />
            </div>
            {/* Tooltip for collapsed state */}
            {!isMobile && (
              <SidebarTooltip 
                content={currentOrg?.subscription?.plan.name || "Free"} 
                show={isHoveredSub}
              >
                <div className="absolute inset-0" />
              </SidebarTooltip>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sign Out Button */}
      <motion.button
        className="w-full flex items-center h-10 sm:h-11 px-2.5 rounded-xl transition-all duration-200 group text-theme-text/70 hover:bg-red-500/10 hover:text-red-500 relative touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed"
        animate={{
          x: isOpen ? 0 : "0%",
          justifyContent: isOpen ? "flex-start" : "center",
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setIsHoveredSignOut(true)}
        onMouseLeave={() => setIsHoveredSignOut(false)}
        onClick={handleSignOut}
        aria-label="Sign out"
      >
        <div className="flex items-center justify-center min-w-5 shrink-0">
          <FaSignOutAlt className="w-4 h-4" />
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: isMobile ? 0.15 : 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: isMobile ? 0 : 0.1,
              }}
              className="font-semibold whitespace-nowrap ml-3 overflow-hidden text-base"
            >
              Sign Out
            </motion.span>
          )}
        </AnimatePresence>

        {/* Tooltip for Collapsed State */}
        {!isOpen && !isMobile && (
          <SidebarTooltip 
            content="Sign Out" 
            show={isHoveredSignOut}
          >
            <div className="absolute inset-0" />
          </SidebarTooltip>
        )}
      </motion.button>
    </div>
  );
};

export default SidebarFooter;
