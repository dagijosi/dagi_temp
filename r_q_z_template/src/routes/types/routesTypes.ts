import React, { type JSX } from "react";

export type RouteWrapper = (children: React.ReactNode) => JSX.Element;

export type RouteProps = {
  Component: React.ComponentType;
  layout?: React.ComponentType<{ children: React.ReactNode }>;
  wrappers?: RouteWrapper[];
  protected?: boolean;
  publicOnly?: boolean;
  allowedRoles?: string[]; // new field for role-based access
  meta?: Record<string, unknown>;
};

export type AppRoute = RouteProps & {
  path?: string;
  index?: boolean;
  children?: AppRoute[];
};
