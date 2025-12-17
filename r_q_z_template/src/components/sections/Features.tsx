import { motion } from 'framer-motion';

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

export const Features = () => (
  <div id="features" className="py-24 sm:py-32 relative z-10 bg-theme-surface/30">
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
