import React, { Suspense, type JSX, type ReactElement } from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import type { AppRoute } from "./types/routesTypes";
import RoleGuard from "./RoleGuard";
import LoadingComponent from "../components/ui/LoadingComponent";

/**
 * Applies an array of wrapper functions to a React element.
 *
 * @param element - The base React element to wrap
 * @param wrappers - An array of wrapper functions
 * @returns The element wrapped by all provided wrappers
 *
 * @example
 * applyWrappers(<Page />, [
 *   (children) => <ProtectedRoute>{children}</ProtectedRoute>,
 *   (children) => <RoleGuard allowedRoles={['admin']}>{children}</RoleGuard>
 * ])
 */
const applyWrappers = (
  element: ReactElement,
  wrappers?: ((children: React.ReactNode) => JSX.Element)[]
): ReactElement => {
  if (!wrappers?.length) return element;
  return wrappers.reduceRight((acc, wrap) => wrap(acc), element);
};

/**
 * Builds an array of wrapper functions for a given route based on flags
 *
 * Supports:
 * - Protected / Public routes (`protected` / `publicOnly`)
 * - Role-based access (`allowedRoles`)
 * - Custom wrappers (`wrappers`)
 *
 * @param route - The AppRoute object
 * @returns An array of wrapper functions
 *
 * @example
 * getWrappersFromFlags(route)
 * // returns: [(children) => <ProtectedRoute>{children}</ProtectedRoute>, ...]
 */
const getWrappersFromFlags = (
  route: AppRoute
): ((children: React.ReactNode) => JSX.Element)[] => {
  const wrappers: ((children: React.ReactNode) => JSX.Element)[] = [];

  // Protected / Public routes
  if (route.protected || route.publicOnly) {
    wrappers.push((children) => (
      <ProtectedRoute isPublicOnly={route.publicOnly}>{children}</ProtectedRoute>
    ));
  }

  // Role-based guard
  const allowedRoles = route.allowedRoles ?? [];
  if (allowedRoles.length > 0) {
    wrappers.push((children) => <RoleGuard allowedRoles={allowedRoles}>{children}</RoleGuard>);
  }

  // Custom wrappers
  if (route.wrappers) wrappers.push(...route.wrappers);

  return wrappers;
};

/**
 * Recursively renders an array of routes as React Router <Route> elements.
 *
 * Supports:
 * - Index routes
 * - Nested routes
 * - Layout wrappers
 * - Protected / Public routes
 * - Role-based access
 * - Custom wrappers
 * - Lazy-loading via Suspense
 *
 * @param routes - Array of AppRoute objects
 * @returns React nodes containing all routes
 *
 * @example
 * <Routes>
 *   {renderRoutes(routes)}
 * </Routes>
 */
export const renderRoutes = (routes: AppRoute[]): React.ReactNode => {
  return routes.map((route, idx) => {
    const { path, index, Component, children, layout: LayoutWrapper } = route;
    const wrappers = getWrappersFromFlags(route);

    // Lazy + Suspense wrapper
    let element: ReactElement = (
      <Suspense
        fallback={
         <LoadingComponent/>
        }
      >
        <Component />
      </Suspense>
    );

    // Apply layout if provided
    if (LayoutWrapper) {
      element = <LayoutWrapper>{element}</LayoutWrapper>;
    }

    // Apply all wrappers (ProtectedRoute, RoleGuard, custom wrappers)
    element = applyWrappers(element, wrappers);

    // Return Route element
    if (index) {
      return <Route key={`index-${idx}`} index element={element} />;
    }

    return (
      <Route key={path || `route-${idx}`} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
};
