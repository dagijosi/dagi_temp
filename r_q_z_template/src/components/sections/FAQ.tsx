import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Is this template free to use?",
        answer: "This is a premium template designed to speed up your workflow. Check our pricing page for details on licenses."
    },
    {
        question: "Can I use it for commercial projects?",
        answer: "Yes! The Pro and Enterprise plans allow you to use this template for commercial client projects."
    },
    {
        question: "How do I update the theme colors?",
        answer: "We include a built-in theme system. You can update the `themes.ts` file or use the runtime theme switcher component provided."
    },
    {
        question: "Does it support Server Side Rendering (SSR)?",
        answer: "This template is currently built on Vite (SPA). Integration with Next.js or Remix is possible but requires manual setup."
    }
];

export const FAQ = () => {
    return (
        <div className="py-24 relative z-10 bg-theme-surface/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="mx-auto max-w-3xl divide-y divide-theme-border/50">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} faq={faq} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FAQItem = ({ faq }: { faq: { question: string, answer: string } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-6">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-start justify-between text-left text-theme-text focus:outline-none group"
            >
                <span className="text-lg font-semibold leading-7 group-hover:text-theme-icon transition-colors">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                    <FaChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-theme-icon' : 'text-theme-text/50'}`} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="mt-3 text-base leading-7 text-theme-text/70 pr-12">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
