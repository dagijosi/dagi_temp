import React from "react";
import { CATCH_ALL, DASHBOARD, SETTING } from "./types/routeConstants";
import { createRoute } from "./types/createRoute";
import Layout from "../layout/Layout";

// Lazy-loaded pages
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const Setting = React.lazy(() => import("../theme-system/Setting"));

// Routes using createRoute
const routes = [
  createRoute(DASHBOARD, Dashboard, { layout: Layout }),
  createRoute(SETTING, Setting, { layout: Layout }),
  createRoute(CATCH_ALL, ErrorPage),
];

export default routes;
