'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedRoles 
}) => {
  const { user, isAuthenticated, isLoading } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        // Redirect to home if not logged in
        router.replace(`/?redirect=${pathname}`);
      } else if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        // Redirect to unauthorized page if role not allowed
        router.replace('/unauthorized');
      }
    }
  }, [isAuthenticated, user, isLoading, allowedRoles, router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="w-12 h-12 border-4 border-theme-icon/20 border-t-theme-icon rounded-full animate-spin" />
      </div>
    );
  }

  // If role is required and user doesn't have it, don't show children while redirecting
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return null;
  }

  return isAuthenticated ? <>{children}</> : null;
};
