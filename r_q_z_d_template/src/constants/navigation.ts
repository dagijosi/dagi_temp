import {
  FaChartLine,
  FaUsers,
  FaHistory,
  FaShoppingCart,
  FaUserFriends,
  FaFileExport,
  FaChartPie,
} from "react-icons/fa";
import {
  DASHBOARD,
  USERS,
  ACTIVITY,
  ORDERS,
  ORDERS_PENDING,
  CUSTOMERS,
  ANALYTICS,
  ANALYTICS_TRAFFIC,
  EXPORTS,
} from "../routes/types/routeConstants";

export interface NavLink {
  name: string;
  href?: string;
  icon?: React.ElementType;
  permissions?: string[];
  roles?: string[];
  entitlement?: string;
  children?: NavLink[];
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
    name: "Sales",
    links: [
      {
        name: "Orders",
        icon: FaShoppingCart,
        children: [
          { name: "All Orders", href: ORDERS, icon: FaShoppingCart },
          { name: "Pending", href: ORDERS_PENDING, icon: FaHistory },
        ],
      },
      { name: "Customers", href: CUSTOMERS, icon: FaUserFriends },
    ],
  },
  {
    name: "Management",
    links: [
      { name: "Users", href: USERS, icon: FaUsers, permissions: ["users.view"] },
    ],
  },
  {
    name: "Reports",
    links: [
      {
        name: "Analytics",
        icon: FaChartPie,
        children: [
          { name: "Sales Report", href: ANALYTICS, icon: FaChartLine },
          { name: "Traffic", href: ANALYTICS_TRAFFIC, icon: FaChartPie },
        ],
      },
      { name: "Exports", href: EXPORTS, icon: FaFileExport },
    ],
  },
];
