'use client';

import React from 'react';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUsers, FaChartLine, FaCog } from 'react-icons/fa';

import { IconType } from 'react-icons';

const StatCard = ({ title, value, icon: Icon, delay }: { title: string, value: string, icon: IconType, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-xl bg-theme-icon/10 flex items-center justify-center text-theme-icon">
        <Icon />
      </div>
      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">+12%</span>
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider mt-1">{title}</div>
  </motion.div>
);

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={['admin']}>
      <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 selection:bg-theme-icon selection:text-white">
        <div className="max-w-7xl mx-auto space-y-12 pt-16">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Secure Admin Endpoint</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">System Oversight</h1>
            </div>
            <div className="flex gap-4">
              <button className="h-11 px-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm hover:bg-zinc-100 transition-colors">
                Export Logs
              </button>
              <button className="h-11 px-6 bg-theme-icon text-white rounded-xl font-bold text-sm shadow-lg shadow-theme-icon/20 hover:opacity-90 transition-all">
                Global Refresh
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard title="Active Users" value="12,842" icon={FaUsers} delay={0.1} />
            <StatCard title="Total Revenue" value="$42.5k" icon={FaChartLine} delay={0.2} />
            <StatCard title="Security Level" value="Stable" icon={FaShieldAlt} delay={0.3} />
            <StatCard title="API Latency" value="24ms" icon={FaCog} delay={0.4} />
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-96 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto text-zinc-400">
                <FaShieldAlt size={24} />
              </div>
              <div className="text-lg font-bold">Admin Console Ready</div>
              <p className="text-zinc-500 max-w-xs mx-auto text-sm">This page is protected by the URL Locker. Only users with the Admin role can view this dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
