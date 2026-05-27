'use client';

import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { premiumToast } from "@/components/ui/feedback/premiumToastUtil";
import { IconType } from 'react-icons';
import Link from 'next/link';
import { useAuthStore } from '@/store/useAuthStore';
import { PermissionGate } from '@/components/auth/PermissionGate';
import { UserRole, Permission, User } from '@/types/auth';
import { 
  FaGithub, 
  FaRocket, 
  FaShieldAlt, 
  FaBolt, 
  FaCode, 
  FaLayerGroup,
  FaCheckCircle,
  FaArrowRight,
  FaLock,
  FaUserShield,
  FaUser
} from 'react-icons/fa';

/**
 * Navbar Component
 */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={80}
          height={16}
        />
        <span className="text-sm font-bold tracking-tighter text-zinc-400">/ N-Q-Z</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium hover:text-theme-icon transition-colors">Features</a>
        <a href="#demo" className="text-sm font-medium hover:text-theme-icon transition-colors">Demo</a>
        <a href="#auth" className="text-sm font-medium hover:text-theme-icon transition-colors">Auth</a>
        <Link href="/admin" className="text-sm font-bold text-theme-icon hover:opacity-80 transition-opacity">Admin Panel</Link>
        <a href="https://github.com" target="_blank" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  </nav>
);

/**
 * Feature Card Component
 */
const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: IconType, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-theme-icon/50 transition-colors group"
  >
    <div className="w-12 h-12 rounded-xl bg-theme-icon/10 flex items-center justify-center text-theme-icon mb-6 group-hover:scale-110 transition-transform">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default function Home() {
  const { login, logout, user, isAuthenticated } = useAuthStore();

  const simulateRole = (role: UserRole) => {
    if (role === 'guest') {
      logout();
      document.cookie = "auth-session=false; path=/";
      document.cookie = "auth-role=guest; path=/";
      premiumToast.info("Switched to Guest Role", {
        description: "Dashboard and Admin routes are now locked."
      });
      return;
    }

    const permissions: Permission[] = role === 'admin' 
      ? ['product:create', 'product:update', 'product:delete', 'user:manage', 'admin:dashboard', 'settings:manage']
      : ['product:create', 'product:update'];

    const mockUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name: role === 'admin' ? 'Admin User' : 'Standard User',
      email: role === 'admin' ? 'admin@example.com' : 'user@example.com',
      role,
      permissions,
      avatar: `https://i.pravatar.cc/150?u=${role}`
    };

    login(mockUser);
    document.cookie = "auth-session=true; path=/";
    document.cookie = `auth-role=${role}; path=/`;

    premiumToast.success(`Switched to ${role.toUpperCase()} Role`, {
      description: role === 'admin' ? "Full access granted to all endpoints." : "Limited access granted. Admin routes remain locked."
    });
  };
  const triggerDemoToast = (type: 'success' | 'error' | 'upload' | 'message' | 'promise-add' | 'promise-update') => {
    switch (type) {
      case 'success':
        premiumToast.success("Project Deployed!", {
          description: "Your application is now live on the edge network.",
          actionLabel: "View Live",
          onAction: () => window.open("https://vercel.com", "_blank")
        });
        break;
      case 'error':
        premiumToast.error("Build Failed", {
          description: "An error occurred during the compilation step. Check your logs.",
          actionLabel: "View Logs"
        });
        break;
      case 'upload':
        premiumToast.upload("Syncing Database", 65, {
          description: "Uploading local schema changes to production."
        });
        break;
      case 'message':
        premiumToast.message("Sarah Jenkins", "I've reviewed the latest PR. The Tailwind 4 updates look great! Ready to merge.", "https://i.pravatar.cc/150?u=sarah", {
          actionLabel: "View PR"
        });
        break;
      case 'promise-add': {
        premiumToast.promise(
          (setProgress) => new Promise<{ name: string }>((resolve) => {
            let p = 0;
            const int = setInterval(() => {
              p += 20;
              if (p <= 80) setProgress(p);
              if (p >= 100) {
                clearInterval(int);
                resolve({ name: "Premium Template" });
              }
            }, 500);
          }),
          {
            loading: "Adding product to inventory...",
            success: (data) => `${data.name} has been added!`,
            error: "Failed to add product."
          }
        ).catch(() => {
          // Silent catch to prevent unhandled rejection in demo
        });
        break;
      }
      case 'promise-update': {
        premiumToast.promise(
          new Promise((resolve, reject) => 
            setTimeout(() => {
              if (Math.random() > 0.4) {
                resolve(true);
              } else {
                reject(new Error("Connection lost"));
              }
            }, 3000)
          ),
          {
            loading: "Updating product data...",
            success: "Product updated successfully!",
            error: (err: unknown) => `Update failed: ${err instanceof Error ? err.message : 'Unknown error'}`
          },
          { simulateProgress: true }
        ).catch(() => {
          // Silent catch to prevent unhandled rejection in demo
        });
        break;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-zinc-50 font-sans selection:bg-theme-icon selection:text-white">
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-theme-icon animate-pulse" />
                NOW POWERED BY TAILWIND 4
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                Modern Stack. <br />
                <span className="text-theme-icon">Premium Feel.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                The ultimate template for building high-performance web applications with Next.js 16, React 19, and Tailwind 4. Ready to scale from day one.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => triggerDemoToast('success')}
                className="h-12 px-8 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Get Started <FaArrowRight size={14} />
              </button>
              <a 
                href="https://github.com" 
                target="_blank"
                className="h-12 px-8 border border-zinc-200 dark:border-zinc-800 rounded-full font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-theme-icon/20 to-transparent flex items-center justify-center p-8">
              <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col">
                <div className="h-12 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="p-6 font-mono text-sm space-y-2 opacity-50">
                  <div className="text-theme-icon">import {"{ premiumToast }"} from &quot;@/lib/ui&quot;;</div>
                  <div className="text-zinc-400 mt-4">{"// Trigger a notification"}</div>
                  <div>premiumToast.success(&quot;Success!&quot;, {"{"}</div>
                  <div className="ml-4">description: &quot;Deployment complete&quot;,</div>
                  <div className="ml-4">duration: 5000</div>
                  <div>{"}"});</div>
                </div>
              </div>
            </div>
            {/* Floating UI elements to enhance the aesthetic */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 hidden lg:block"
            >
              <FaCheckCircle className="text-green-500 text-3xl" />
            </motion.div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-100 dark:border-zinc-900">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Engineered for Performance</h2>
            <p className="text-zinc-600 dark:text-zinc-400">Every component is built with a focus on speed, accessibility, and type-safety.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={FaRocket}
              title="Next.js 16 Ready"
              description="Harness the latest App Router features, server components, and streaming for unmatched speed."
              delay={0.1}
            />
            <FeatureCard 
              icon={FaBolt}
              title="Tailwind 4 & V4"
              description="Leveraging the new engine for faster builds and cleaner CSS with native theme variables."
              delay={0.2}
            />
            <FeatureCard 
              icon={FaShieldAlt}
              title="Zustand & TanStack"
              description="Robust state management and server-state synchronization with React Query."
              delay={0.3}
            />
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="bg-zinc-50 dark:bg-zinc-900/50 py-32 border-y border-zinc-100 dark:border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Experience the Feedback</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
                The Premium Toast system provides contextual feedback with a refined aesthetic. Try triggering different types of notifications.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button onClick={() => triggerDemoToast('success')} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-theme-icon hover:text-theme-icon transition-all font-bold text-sm">Success Toast</button>
                <button onClick={() => triggerDemoToast('error')} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-red-500 hover:text-red-500 transition-all font-bold text-sm">Error Toast</button>
                <button onClick={() => triggerDemoToast('upload')} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-theme-icon hover:text-theme-icon transition-all font-bold text-sm">Upload Toast</button>
                <button onClick={() => triggerDemoToast('message')} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-theme-icon hover:text-theme-icon transition-all font-bold text-sm">Message Toast</button>
                <button onClick={() => triggerDemoToast('promise-add')} className="p-4 rounded-xl border border-theme-icon/20 bg-theme-icon/5 hover:bg-theme-icon/10 text-theme-icon transition-all font-bold text-sm flex flex-col items-center gap-1">
                  <span>Add Product</span>
                  <span className="text-[10px] opacity-60 font-medium">(Promise Success)</span>
                </button>
                <button onClick={() => triggerDemoToast('promise-update')} className="p-4 rounded-xl border border-theme-icon/20 bg-theme-icon/5 hover:bg-theme-icon/10 text-theme-icon transition-all font-bold text-sm flex flex-col items-center gap-1">
                  <span>Update Product</span>
                  <span className="text-[10px] opacity-60 font-medium">(Promise Random)</span>
                </button>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col gap-4 w-full max-w-md">
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center"><FaCode className="text-theme-icon" /></div>
                <div>
                  <div className="text-sm font-bold">Type Safe</div>
                  <div className="text-xs text-zinc-500">Fully defined with TypeScript</div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 flex items-center gap-4 translate-x-4">
                <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center"><FaLayerGroup className="text-theme-icon" /></div>
                <div>
                  <div className="text-sm font-bold">Layered UI</div>
                  <div className="text-xs text-zinc-500">Glassmorphism & Depth</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Simulator Section */}
        <section id="auth" className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">Role-Based URL Locker</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                  Test the authentication and authorization system. Switching roles will update the <span className="text-theme-icon font-mono">URL Locker</span> (Middleware) and toggle <span className="text-theme-icon font-mono">Permission Gates</span> across the application.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => simulateRole('admin')}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all ${user?.role === 'admin' ? 'border-theme-icon bg-theme-icon/5 text-theme-icon' : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'}`}
                >
                  <FaUserShield size={20} />
                  <div className="text-left">
                    <div className="text-sm font-bold">Admin Role</div>
                    <div className="text-xs opacity-60">Full access to /admin</div>
                  </div>
                </button>
                <button 
                  onClick={() => simulateRole('user')}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all ${user?.role === 'user' ? 'border-theme-icon bg-theme-icon/5 text-theme-icon' : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'}`}
                >
                  <FaUser size={20} />
                  <div className="text-left">
                    <div className="text-sm font-bold">User Role</div>
                    <div className="text-xs opacity-60">Access to /dashboard</div>
                  </div>
                </button>
                <button 
                  onClick={() => simulateRole('guest')}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all ${!isAuthenticated ? 'border-theme-icon bg-theme-icon/5 text-theme-icon' : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'}`}
                >
                  <FaLock size={20} />
                  <div className="text-left">
                    <div className="text-sm font-bold">Guest Role</div>
                    <div className="text-xs opacity-60">Unauthorized access only</div>
                  </div>
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-4">
                <div className="text-sm font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <FaCode size={12} /> Live Permission Gate Check
                </div>
                <div className="flex items-center gap-4">
                  <PermissionGate roles={['admin']} fallback={<div className="flex items-center gap-2 text-red-500 font-bold text-sm bg-red-500/10 px-3 py-1.5 rounded-lg"><FaLock size={12}/> Admin Content Hidden</div>}>
                    <div className="flex items-center gap-2 text-green-500 font-bold text-sm bg-green-500/10 px-3 py-1.5 rounded-lg"><FaCheckCircle size={12}/> Admin Content Visible</div>
                  </PermissionGate>
                  <PermissionGate roles={['admin', 'user']} fallback={<div className="flex items-center gap-2 text-red-500 font-bold text-sm bg-red-500/10 px-3 py-1.5 rounded-lg"><FaLock size={12}/> User Content Hidden</div>}>
                    <div className="flex items-center gap-2 text-green-500 font-bold text-sm bg-green-500/10 px-3 py-1.5 rounded-lg"><FaCheckCircle size={12}/> User Content Visible</div>
                  </PermissionGate>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-sm">
              <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold">Current Session</div>
                  <div className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter ${isAuthenticated ? 'bg-green-500 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400'}`}>
                    {isAuthenticated ? 'Authenticated' : 'Offline'}
                  </div>
                </div>
                
                {isAuthenticated && user ? (
                  <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-theme-icon/20 p-1">
                      <Image src={user.avatar || ''} alt={user.name} width={56} height={56} className="rounded-xl" />
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-xs text-zinc-500 uppercase font-mono">{user.role}</div>
                    </div>
                  </div>
                ) : (
                  <div className="h-14 flex items-center justify-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-400 text-sm font-medium italic">
                    No active session
                  </div>
                )}

                <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <Link 
                    href="/admin"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group"
                  >
                    <span className="text-sm font-bold">Go to /admin</span>
                    <FaArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    href="/dashboard"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group"
                  >
                    <span className="text-sm font-bold">Go to /dashboard</span>
                    <FaArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <Link 
                    href="/unknown-page"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group"
                  >
                    <span className="text-sm font-bold">Test 404 Page</span>
                    <FaArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-zinc-100 dark:border-zinc-900">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <Image
                className="dark:invert opacity-50"
                src="/next.svg"
                alt="Next.js logo"
                width={60}
                height={12}
              />
              <span className="text-xs font-medium text-zinc-400">© 2026 N-Q-Z Template.</span>
            </div>
            <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest">
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms</a>
              <a href="https://github.com" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
