import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui';
import { FaGithub } from 'react-icons/fa';

export const Hero = () => {
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
    <div className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
            <div className="absolute top-[20%] right-[20%] w-[25rem] h-[25rem] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-[20%] left-[30%] w-[35rem] h-[35rem] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
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
    </div>
  );
};
