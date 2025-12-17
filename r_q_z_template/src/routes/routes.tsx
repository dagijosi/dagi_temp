import React from "react";
import { CATCH_ALL, SETTINGS, ABOUT, PRICING, CONTACT, PRIVACY } from "./types/routeConstants";
import { createRoute } from "./types/createRoute";

// Lazy-loaded pages
const Homepage = React.lazy(() => import("../pages/Homepage"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const SettingPage = React.lazy(() => import("../theme-system/Setting"));
const About = React.lazy(() => import("../pages/About"));
const PricingPage = React.lazy(() => import("../pages/PricingPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const Privacy = React.lazy(() => import("../pages/Privacy"));

// Routes using createRoute
const routes = [
  createRoute({ index: true, Component: Homepage}),
  createRoute( SETTINGS,  SettingPage),
  createRoute( ABOUT,  About),
  createRoute( PRICING,  PricingPage),
  createRoute( CONTACT,  ContactPage),
  createRoute( PRIVACY,  Privacy),
  createRoute(CATCH_ALL, ErrorPage),
];

export default routes;
