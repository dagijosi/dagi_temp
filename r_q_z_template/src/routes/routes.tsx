import React from "react";
import { CATCH_ALL } from "./types/routeConstants";
import { createRoute } from "./types/createRoute";

// Lazy-loaded pages
const Homepage = React.lazy(() => import("../pages/Homepage"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));

// Routes using createRoute
const routes = [
  createRoute({ index: true, Component: Homepage}),
  createRoute(CATCH_ALL, ErrorPage),
];

export default routes;
