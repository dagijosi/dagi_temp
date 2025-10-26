
import { motion } from 'framer-motion';
import { toast } from 'sonner';

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
  <div id="features" className="bg-gray-900 py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-400">Template Features</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything you need to start your project
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          This template comes with a set of modern tools and libraries to help you build your next big idea.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <span className="text-2xl">{feature.icon}</span>
                {feature.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p className="flex-auto">{feature.description}</p>
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

const Homepage = () => {
  return (
    <div className="bg-gray-900">
      <main>
        <div className="relative isolate overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-800 opacity-75" />
          
          {/* Decorative blobs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Build modern web apps, faster.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
                  This interactive template is powered by Vite, React, TypeScript, and Tailwind CSS. 
                  Jumpstart your development with a feature-rich, production-ready setup.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#features"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-transform transform hover:scale-105"
                  >
                    Get started
                  </a>
                  <button
                    onClick={() => toast.success('This is a toast notification!')}
                    className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-transform transform hover:scale-105"
                  >
                    Show Toast
                  </button>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="A team of people working on a project"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-1178612g1e6&auto=format&fit=crop&h=528&q=80"
                      alt="A person coding on a laptop"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="A modern office setup"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="A person using a tablet"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="A person writing on a whiteboard"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-2xl"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Homepage