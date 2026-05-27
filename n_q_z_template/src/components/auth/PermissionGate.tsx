'use client';

import React from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { Permission, UserRole } from '@/types/auth';

interface PermissionGateProps {
  children: React.ReactNode;
  permissions?: Permission[];
  roles?: UserRole[];
  all?: boolean; // If true, all permissions must match. If false, any must match.
  fallback?: React.ReactNode;
}

export const PermissionGate: React.FC<PermissionGateProps> = ({
  children,
  permissions = [],
  roles = [],
  all = false,
  fallback = null,
}) => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <>{fallback}</>;
  }

  const hasRole = roles.length === 0 || roles.includes(user.role);
  
  const hasPermission = permissions.length === 0 || (all 
    ? permissions.every(p => user.permissions.includes(p))
    : permissions.some(p => user.permissions.includes(p))
  );

  if (hasRole && hasPermission) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};
