import { motion } from 'framer-motion';
import { Button } from '../components/ui';
import { AlertCircle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center p-6 relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[20%] left-[20%] w-[30rem] h-[30rem] bg-theme-icon/20 rounded-full filter blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] right-[20%] w-[30rem] h-[30rem] bg-purple-500/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000" />
       </div>

       <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className="relative z-10 max-w-2xl mx-auto backdrop-blur-sm bg-theme-surface/30 p-12 rounded-3xl border border-theme-border shadow-2xl"
       >
         <motion.div 
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="flex justify-center mb-6"
         >
           <div className="p-4 bg-theme-surface rounded-full border border-theme-border shadow-inner">
             <AlertCircle size={64} className="text-theme-icon" />
           </div>
         </motion.div>

         <h1 className="mb-4 text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-theme-text to-theme-text/20">
            404
         </h1>
         
         <h2 className="mb-6 text-3xl font-bold text-theme-text">Page Not Found</h2>
         
         <p className="mb-10 text-lg text-theme-text/70 leading-relaxed max-w-md mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void. It might have been moved or doesn't exist.
         </p>

         <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => window.location.href = "/"}>
               Go Back Home
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = "/contact"}>
               Contact Support
            </Button>
         </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
