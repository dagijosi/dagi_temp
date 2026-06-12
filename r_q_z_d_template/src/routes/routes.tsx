import React from "react";
import { Navigate } from "react-router-dom";
import { 
  CATCH_ALL, 
  DASHBOARD, 
  SETTING, 
  PROFILE, 
  USERS, 
  ACTIVITY,
  ORDERS,
  ORDERS_PENDING,
  CUSTOMERS,
  ANALYTICS,
  ANALYTICS_TRAFFIC,
  EXPORTS,
  LOGIN,
  SIGNUP,
  HOME
} from "./types/routeConstants";
import { createRoute } from "./types/createRoute";
import Layout from "../layout/Layout";

// Lazy-loaded pages
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const Setting = React.lazy(() => import("../theme-system/Setting"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Users = React.lazy(() => import("../pages/Users"));
const Activity = React.lazy(() => import("../pages/Activity"));
const Login = React.lazy(() => import("../pages/Login"));
const Signup = React.lazy(() => import("../pages/Signup"));
const Orders = React.lazy(() => import("../pages/Orders"));

// Dummy component for other demo routes
const DemoPage = ({ name }: { name: string }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-theme-text mb-4">{name}</h1>
    <p className="text-theme-text/60 text-sm">This is a demo page for {name.toLowerCase()}.</p>
  </div>
);

// Routes using createRoute
const routes = [
  createRoute(HOME, () => <Navigate to={DASHBOARD} replace />),
  createRoute(LOGIN, Login, { publicOnly: true }),
  createRoute(SIGNUP, Signup, { publicOnly: true }),
  createRoute(DASHBOARD, Dashboard, { layout: Layout, protected: true }),
  createRoute(SETTING, Setting, { layout: Layout, protected: true }),
  createRoute(PROFILE, Profile, { layout: Layout, protected: true }),
  createRoute(USERS, Users, { layout: Layout, protected: true }),
  createRoute(ACTIVITY, Activity, { layout: Layout, protected: true }),
  createRoute(ORDERS, Orders, { layout: Layout, protected: true }),
  createRoute(ORDERS_PENDING, () => <DemoPage name="Pending Orders" />, { layout: Layout, protected: true }),
  createRoute(CUSTOMERS, () => <DemoPage name="Customers" />, { layout: Layout, protected: true }),
  createRoute(ANALYTICS, () => <DemoPage name="Analytics" />, { layout: Layout, protected: true }),
  createRoute(ANALYTICS_TRAFFIC, () => <DemoPage name="Traffic Analytics" />, { layout: Layout, protected: true }),
  createRoute(EXPORTS, () => <DemoPage name="Exports" />, { layout: Layout, protected: true }),
  createRoute(CATCH_ALL, ErrorPage),
];

export default routes;
