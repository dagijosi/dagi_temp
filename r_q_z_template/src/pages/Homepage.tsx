
import { motion, type Variants } from 'framer-motion';
import { toast } from 'sonner';
import { Button } from '../components/ui';
import { FaGithub } from 'react-icons/fa';

const features = [
  {
    name: 'Vite + React',
    description: 'Enjoy a lightning-fast development experience with Vite and the power of React.',
    icon: '⚡️',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework for rapid UI development.',
    icon: '🎨',
  },
  {
    name: 'TypeScript',
    description: 'Write safer, more maintainable code with static types.',
    icon: '🔒',
  },
  {
    name: 'State Management',
    description: 'Includes Zustand and Redux Toolkit for flexible and scalable state management.',
    icon: '🔄',
  },
  {
    name: 'TanStack Query',
    description: 'Powerful asynchronous state management for fetching, caching, and updating data.',
    icon: '📈',
  },
  {
    name: 'Framer Motion',
    description: 'Create beautiful animations and interactions with ease.',
    icon: '✨',
  }
];

const FeaturesSection = () => (
  <div id="features" className="py-24 sm:py-32 relative z-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center mb-16">
        <h2 className="text-base font-semibold leading-7 text-theme-icon tracking-wide uppercase">Template Features</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
          Everything you need to build faster
        </p>
        <p className="mt-6 text-lg leading-8 text-theme-text/70">
          This template provides a robust foundation with curated best-practices, allowing you to focus on building features instead of configuration.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group relative p-8 rounded-2xl bg-theme-surface/50 border border-theme-border hover:border-theme-icon/50 hover:bg-theme-surface/80 hover:shadow-xl hover:shadow-theme-icon/10 transition-all duration-300"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-theme-icon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
             
             <div className="flex items-center gap-4 mb-4">
               <span className="text-4xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
               <h3 className="text-xl font-bold text-theme-text">{feature.name}</h3>
             </div>
             
             <p className="text-theme-text/70 leading-relaxed font-medium">
               {feature.description}
             </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Homepage = () => {
    
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      
      {/* Background Decor - ensuring it sits behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
          <div className="absolute top-[20%] right-[20%] w-[25rem] h-[25rem] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[20%] left-[30%] w-[35rem] h-[35rem] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <main className="relative z-10 pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            
            <motion.div 
               variants={containerVariants}
               initial="hidden"
               animate="visible"
               className="mx-auto max-w-3xl"
            >
               <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                  <span className="px-4 py-1.5 rounded-full bg-theme-surface border border-theme-border text-xs font-semibold text-theme-icon shadow-sm tracking-wide uppercase">
                    v1.0.0 is now live
                  </span>
               </motion.div>

               <motion.h1 
                 variants={itemVariants}
                 className="text-5xl font-extrabold tracking-tight text-theme-text sm:text-7xl mb-6 leading-tight"
               >
                 Build modern web apps <br />
                 <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                   with extreme speed.
                 </span>
               </motion.h1>

               <motion.p 
                 variants={itemVariants}
                 className="mt-6 text-lg leading-8 text-theme-text/80 max-w-2xl mx-auto"
               >
                 This interactive template is powered by Vite, React, TypeScript, and Tailwind CSS. 
                 Jumpstart your development with a feature-rich, production-ready setup that looks beautiful out of the box.
               </motion.p>
               
               <motion.div 
                 variants={itemVariants}
                 className="mt-10 flex items-center justify-center gap-x-4"
               >
                  <Button 
                    size="lg" 
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    className="shadow-xl shadow-indigo-500/20"
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    leftIcon={<FaGithub />}
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    GitHub
                  </Button>
               </motion.div>
                 
                <motion.div variants={itemVariants} className="mt-8">
                     <Button 
                        variant="secondary" 
                        size="sm" 
                        onClick={() => toast.success('This is a custom toast!')}
                     >
                        Test Toast Notification
                     </Button>
                </motion.div>
            </motion.div>

             {/* Hero Image Section */}
             <motion.div 
               initial={{ opacity: 0, y: 50, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-theme-border bg-theme-surface/50 p-2 backdrop-blur-sm shadow-2xl"
             >
                <div className="absolute -inset-1 bg-linear-to-r from-theme-icon to-purple-600 rounded-3xl opacity-20 blur-lg -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80" 
                  alt="App screenshot" 
                  className="rounded-xl shadow-inner border border-theme-border/50 w-full"
                />
             </motion.div>

        </div>
        
        <FeaturesSection />

      </main>
    </div>
  );
};

export default Homepage;