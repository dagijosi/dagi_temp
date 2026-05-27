'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLock, FaHome } from 'react-icons/fa';

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-3xl flex items-center justify-center mx-auto text-red-600"
        >
          <FaLock size={32} />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Access Restricted
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Your current role does not have the necessary permissions to access this endpoint. Please contact your system administrator.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="h-12 px-8 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <FaHome /> Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="h-12 px-8 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
