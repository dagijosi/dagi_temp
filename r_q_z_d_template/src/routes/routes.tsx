import React from "react";
import { CATCH_ALL, DASHBOARD, SETTING, PROFILE, USERS, ACTIVITY } from "./types/routeConstants";
import { createRoute } from "./types/createRoute";
import Layout from "../layout/Layout";

// Lazy-loaded pages
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const Setting = React.lazy(() => import("../theme-system/Setting"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Users = React.lazy(() => import("../pages/Users"));
const Activity = React.lazy(() => import("../pages/Activity"));

// Routes using createRoute
const routes = [
  createRoute(DASHBOARD, Dashboard, { layout: Layout }),
  createRoute(SETTING, Setting, { layout: Layout }),
  createRoute(PROFILE, Profile, { layout: Layout }),
  createRoute(USERS, Users, { layout: Layout }),
  createRoute(ACTIVITY, Activity, { layout: Layout }),
  createRoute(CATCH_ALL, ErrorPage),
];

export default routes;
