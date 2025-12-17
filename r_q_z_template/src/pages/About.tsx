import { Button } from '../components/ui';

const About = () => {
    return (
        <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
             <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight text-theme-text sm:text-6xl mb-6">
                    About Us
                </h1>
                <p className="text-lg text-theme-text/70">
                    We are building the future of web development with tools that empower creators to build faster and better.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="relative">
                     <div className="absolute -inset-4 bg-gradient-to-r from-theme-icon to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
                     <img 
                         src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                         alt="Team" 
                         className="relative rounded-2xl shadow-2xl border border-theme-border"
                     />
                 </div>
                 <div className="space-y-6">
                     <h2 className="text-2xl font-bold text-theme-text">Our Mission</h2>
                     <p className="text-theme-text/80 leading-relaxed">
                         Our mission is to simplify the web development process. We believe that developers should spend their time solving unique problems, not re-inventing the wheel with every project.
                     </p>
                     <p className="text-theme-text/80 leading-relaxed">
                         Founded in 2024, we provide high-quality templates and components that follow the latest standards in performance, accessibility, and design.
                     </p>
                     <div className="pt-4">
                         <div className="grid grid-cols-2 gap-8 mb-8">
                             <div>
                                 <h3 className="text-3xl font-bold text-theme-icon">5k+</h3>
                                 <p className="text-sm text-theme-text/60">Developers</p>
                             </div>
                             <div>
                                 <h3 className="text-3xl font-bold text-theme-icon">99%</h3>
                                 <p className="text-sm text-theme-text/60">Satisfaction</p>
                             </div>
                         </div>
                         <Button>Join the Team</Button>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default About;
