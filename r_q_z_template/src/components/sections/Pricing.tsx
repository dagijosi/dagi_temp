import { Button } from '../ui';
import { FaCheck } from 'react-icons/fa';

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "Perfect for testing and personal projects.",
        features: ["5 Projects", "1k API Requests", "Community Support", "Basic Analytics"],
        cta: "Start for Free",
        popular: false
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "For professional developers and scaling apps.",
        features: ["Unlimited Projects", "100k API Requests", "Priority Support", "Advanced Analytics", "Team Access"],
        cta: "Get Started",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Tailored solutions for large organizations.",
        features: ["Dedicated Infrastructure", "Unlimited API Requests", "24/7 Dedicated Support", "SLA & Audit Logs", "SSO Integration"],
        cta: "Contact Sales",
        popular: false
    }
];

export const Pricing = () => {
    return (
        <div id="pricing" className="py-24 relative z-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-theme-icon tracking-wide uppercase">Pricing</h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
                        Simple, transparent pricing
                    </p>
                    <p className="mt-6 text-lg leading-8 text-theme-text/70">
                        Choose the perfect plan for your needs. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div 
                            key={plan.name}
                            className={`
                                relative p-8 rounded-3xl border flex flex-col
                                ${plan.popular 
                                    ? 'bg-theme-surface/80 border-theme-icon shadow-2xl shadow-theme-icon/10 scale-105 z-10' 
                                    : 'bg-theme-surface/40 border-theme-border hover:border-theme-border/80 hover:bg-theme-surface/60 transition-colors'
                                }
                            `}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-theme-icon text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-theme-text">{plan.name}</h3>
                                <p className="text-sm text-theme-text/60 mt-1">{plan.description}</p>
                            </div>

                            <div className="mb-6 flex items-baseline gap-1">
                                <span className="text-4xl font-extrabold text-theme-text">{plan.price}</span>
                                <span className="text-sm text-theme-text/60">{plan.period}</span>
                            </div>

                            <div className="flex-1 mb-8">
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-theme-text/80">
                                            <FaCheck className="text-theme-icon w-4 h-4 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button 
                                variant={plan.popular ? 'primary' : 'outline'} 
                                className="w-full"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
