import {
  FaChartLine,
  FaUsers,
  FaHistory,
  FaUser,
  FaInfoCircle,
} from "react-icons/fa";
import {
  DASHBOARD,
  SETTING,
  PROFILE,
  USERS,
  ACTIVITY,
} from "../routes/types/routeConstants";

export interface NavLink {
  name: string;
  href: string;
  icon: React.ElementType;
  permissions?: string[];
  roles?: string[];
  entitlement?: string;
}

export interface NavCategory {
  name: string;
  links: NavLink[];
  module?: string;
}

export const navigationCategories: NavCategory[] = [
  {
    name: "Overview",
    links: [
      { name: "Dashboard", href: DASHBOARD, icon: FaChartLine },
      { name: "Activity", href: ACTIVITY, icon: FaHistory },
    ],
  },
  {
    name: "Management",
    links: [
      { name: "Users", href: USERS, icon: FaUsers, permissions: ["users.view"] },
    ],
  },
  {
    name: "Account",
    links: [
      { name: "Profile", href: PROFILE, icon: FaUser },
      { name: "Settings", href: SETTING, icon: FaInfoCircle },
    ],
  },
];
