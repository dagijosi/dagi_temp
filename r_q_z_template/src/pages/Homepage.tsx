
import { Hero, Features, Pricing, Testimonials, FAQ, Contact } from '../components/sections';

const Homepage = () => {
    return (
        <div className="relative overflow-hidden min-h-screen">
             <Hero />
             <Features />
             <Testimonials />
             <Pricing />
             <FAQ />
             <Contact />
        </div>
    );
};

export default Homepage;