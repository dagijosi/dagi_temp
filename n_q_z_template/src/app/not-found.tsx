'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6 selection:bg-theme-icon selection:text-white">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <div className="text-[120px] font-black leading-none tracking-tighter text-zinc-100 dark:text-zinc-900 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaQuestionCircle className="text-theme-icon text-5xl animate-bounce" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Lost in the Stack?
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to a new endpoint. Let&apos;s get you back to production.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            href="/"
            className="h-12 px-8 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <FaHome /> Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="h-12 px-8 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
