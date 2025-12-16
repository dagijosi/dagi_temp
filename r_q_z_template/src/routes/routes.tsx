import React from "react";
import { CATCH_ALL, SETTINGS } from "./types/routeConstants";
import { createRoute } from "./types/createRoute";

// Lazy-loaded pages
const Homepage = React.lazy(() => import("../pages/Homepage"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const SettingPage = React.lazy(() => import("../theme-system/Setting"));

// Routes using createRoute
const routes = [
  createRoute({ index: true, Component: Homepage}),
  createRoute( SETTINGS,  SettingPage),
  createRoute(CATCH_ALL, ErrorPage),
];

export default routes;
