'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { PermissionGate } from '@/components/auth/PermissionGate';
import { premiumToast } from '@/components/ui/feedback/premiumToastUtil';
import { motion } from 'framer-motion';
import PremiumChart from '@/components/ui/charts/PremiumChart';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import PremiumForm from '@/components/ui/PremiumForm'; // Imported PremiumForm
import { 
  FaBox, 
  FaSync, 
  FaPlus, 
  FaTrash, 
  FaCheckCircle, 
  FaExclamationTriangle,
  FaArrowLeft,

} from 'react-icons/fa';
import Link from 'next/link';

interface Order {
  id: string;
  item: string;
  status: 'Fulfilled' | 'Pending';
  date: string;
}

// Mock API call
const fetchOrders = async (setProgress: (p: number) => void): Promise<Order[]> => {
  // Simulate progress steps
  setProgress(10);
  await new Promise(r => setTimeout(r, 400));
  setProgress(40);
  await new Promise(r => setTimeout(r, 600));
  setProgress(80);
  await new Promise(r => setTimeout(r, 500));
  
  // Random failure for demo
  if (Math.random() > 0.8) {
    throw new Error("API Gateway Timeout");
  }

  return [
    { id: '101', item: 'Premium Template License', status: 'Fulfilled', date: '2026-05-20' },
    { id: '102', item: 'Cloud Infrastructure Pack', status: 'Pending', date: '2026-05-21' },
    { id: '103', item: 'Developer Support (1yr)', status: 'Fulfilled', date: '2026-05-22' },
  ];
};

export default function DashboardPage() {
  const { t } = useTranslation();
  const { data: orders, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['orders'],
    queryFn: () => premiumToast.promise(
      (setProgress) => fetchOrders(setProgress),
      {
        loading: "Syncing with production database...",
        success: "Order data synchronized.",
        error: (err: unknown) => `Fetch failed: ${err instanceof Error ? err.message : 'Unknown error'}`
      }
    ).catch(() => [] as Order[]), 
    retry: false,
    staleTime: 10000
  });

  return (
    <ProtectedRoute allowedRoles={['user', 'admin']}>
      <div className="min-h-screen bg-zinc-50 dark:bg-black p-6 selection:bg-theme-icon selection:text-white">
        <div className="max-w-5xl mx-auto space-y-8 pt-16">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Link href="/" className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-900 transition-colors">
                <FaArrowLeft size={14} />
              </Link>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('dashboard')}</h1>
                <p className="text-sm text-zinc-500 font-medium">Monitoring real-time order flow and system health.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <LanguageSwitcher />
              <button 
                onClick={() => refetch()}
                disabled={isFetching}
                className="h-11 px-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-zinc-50 transition-all disabled:opacity-50"
              >
                <FaSync className={isFetching ? 'animate-spin' : ''} /> {isFetching ? 'Syncing...' : t('refresh')}
              </button>
              
              <PermissionGate permissions={['product:create']}>
                <button className="h-11 px-5 bg-theme-icon text-white rounded-xl font-bold text-sm shadow-lg shadow-theme-icon/20 hover:opacity-90 transition-all flex items-center gap-2">
                  <FaPlus /> Create Order
                </button>
              </PermissionGate>
            </div>
          </header>

          {/* Dashboard Overview Charts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PremiumChart 
              title="Order Flow Trends"
              type="area"
              series={[{ name: 'Orders', data: [30, 40, 35, 50, 49, 60, 70] }]}
              height={200}
            />
            <PremiumChart 
              title="Revenue by Source"
              type="bar"
              series={[{ name: 'Revenue', data: [400, 430, 448, 470, 540] }]}
              height={200}
            />
            <PremiumChart 
              title="Traffic Distribution"
              type="donut"
              series={[44, 55, 13, 33]}
              height={200}
            />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Orders Table */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-1 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-100 dark:border-zinc-800">
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Order ID</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Product</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800/50">
                    {isLoading ? (
                      [...Array(3)].map((_, i) => (
                        <tr key={i} className="animate-pulse">
                          <td className="px-6 py-4"><div className="h-4 w-12 bg-zinc-100 dark:bg-zinc-800 rounded" /></td>
                          <td className="px-6 py-4"><div className="h-4 w-32 bg-zinc-100 dark:bg-zinc-800 rounded" /></td>
                          <td className="px-6 py-4"><div className="h-4 w-20 bg-zinc-100 dark:bg-zinc-800 rounded" /></td>
                        </tr>
                      ))
                    ) : orders?.length ? (
                      orders.map((order: Order) => (
                        <tr key={order.id} className="hover:bg-zinc-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                          <td className="px-6 py-5 text-sm font-mono font-bold text-zinc-400">#{order.id}</td>
                          <td className="px-6 py-5 text-sm font-bold">{order.item}</td>
                          <td className="px-6 py-5">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${order.status === 'Fulfilled' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                              {order.status === 'Fulfilled' ? <FaCheckCircle size={10} /> : <FaSync size={10} className="animate-spin-slow" />} {order.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="px-6 py-12 text-center text-zinc-400 font-medium italic">No recent order data found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar Controls */}
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-zinc-900 text-white space-y-6 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <FaBox size={80} />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2">System Status</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">TanStack Query is maintaining cache for this session.</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                      <span>Server Node</span>
                      <span className="text-green-500">Online</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        className="h-full bg-theme-icon" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Actions (Role-Protected) */}
              <PermissionGate roles={['admin']} fallback={
                <div className="p-8 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center space-y-3 grayscale">
                  <FaLock className="text-zinc-300 dark:text-zinc-700" size={24} />
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">Admin Actions Locked</div>
                </div>
              }>
                <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center gap-2 text-red-500 text-xs font-black uppercase tracking-widest">
                    <FaExclamationTriangle /> Critical Access
                  </div>
                  <h3 className="text-lg font-bold">Admin Controls</h3>
                  <div className="grid gap-3">
                    <button className="h-11 w-full bg-red-500/10 text-red-500 rounded-xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2">
                      <FaTrash size={12} /> Purge Orders
                    </button>
                    <button className="h-11 w-full border border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                      Database Settings
                    </button>
                  </div>
                </div>
              </PermissionGate>
              
              <PremiumForm />
            </div>

          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

// Utility icon
const FaLock = ({ className, size }: { className?: string, size: number }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);
