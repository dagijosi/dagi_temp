import { motion, type Variants } from "framer-motion";

interface LoadingComponentProps {
  text?: string;
  dotCount?: number;
  className?: string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  text = "Loading content...",
  dotCount = 3,
  className = "",
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0 },
  };

  const dotVariants: Variants = {
    bouncing: (i: number) => ({
      y: [0, -15, 0],
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        delay: i * 0.2, // stagger vertical motion
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1],
        repeat: Infinity,
        repeatType: "loop",
      },
    }),
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={`flex fixed inset-0 z-50 flex-col justify-center items-center backdrop-blur-md bg-slate-50/60 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="status"
      aria-label={text}
    >
      {/* Bouncing gradient dots */}
      <div className="flex justify-center items-center space-x-3">
        {Array.from({ length: dotCount }).map((_, i) => (
          <motion.span
            key={i}
            className="w-5 h-5 rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 bg-size-[200%_200%] bg-no-repeat"
            variants={dotVariants}
            animate="bouncing"
            custom={i} // custom index for stagger
          />
        ))}
      </div>

      {/* Animated text */}
      <motion.p
        className="mt-6 text-xl font-semibold text-gray-700 text-center max-w-xs"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default LoadingComponent;
