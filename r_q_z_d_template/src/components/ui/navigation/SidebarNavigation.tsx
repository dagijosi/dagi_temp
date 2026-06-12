import React from "react";
import { useLocation } from "react-router-dom";
import { navigationCategories } from "../../../constants/navigation";
import SidebarCategory from "./SidebarCategory";
import SidebarLink from "./SidebarLink";
import { useAbility } from "../../../hooks/useAbility";
import { useBusinessModules } from "../../../hooks/useBusinessModules";

interface SidebarNavigationProps {
  isOpen: boolean;
  isMobile: boolean;
  onLinkClick: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  isOpen,
  isMobile,
  onLinkClick,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { can, isPlatformMode } = useAbility();
  const { isModuleEnabled } = useBusinessModules();

  // Filter categories and links based on user permissions, roles, entitlements, and platform mode
  const categoriesToRender = isPlatformMode
    ? navigationCategories.filter((category) =>
        ["Platform", "Overview"].includes(category.name),
      )
    : navigationCategories.filter((category) => isModuleEnabled(category.module));

  const visibleCategories = categoriesToRender
    .map((category) => ({
      ...category,
      links: category.links.filter((link) => {
        return can({
          permission: link.permissions,
          role: link.roles,
          entitlement: link.entitlement,
        });
      }),
    }))
    .filter((category) => category.links.length > 0); // Only show categories with visible links

  const handleLinkClick = () => {
    if (isMobile) {
      onLinkClick();
    }
  };

  return (
    <nav
      className={`flex-1 flex flex-col py-4 sm:py-6 overflow-hidden ${isOpen ? "px-2 sm:px-3" : "px-2"}`}
    >
      <div className="flex flex-col space-y-3 sm:space-y-4 overflow-y-auto overflow-x-hidden">
        {visibleCategories.map((category, categoryIndex) => (
          <SidebarCategory
            key={category.name}
            name={category.name}
            isOpen={isOpen}
            isMobile={isMobile}
            categoryIndex={categoryIndex}
          >
            {category.links.map((link) => {
              const isActive = currentPath === link.href;

              return (
                <SidebarLink
                  key={link.name}
                  link={link}
                  isActive={isActive}
                  isOpen={isOpen}
                  isMobile={isMobile}
                  onClick={handleLinkClick}
                />
              );
            })}
          </SidebarCategory>
        ))}
      </div>
    </nav>
  );
};

export default SidebarNavigation;
