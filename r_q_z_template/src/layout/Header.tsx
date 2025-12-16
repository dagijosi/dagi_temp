
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Settings } from 'lucide-react';
import { Button } from '../components/ui';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SETTINGS, HOME } from '../routes/types/routeConstants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== HOME) {
        navigate(HOME);
        // Defer scroll to allow page load
        setTimeout(() => {
           const element = document.getElementById(sectionId);
           element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Documentation', id: 'docs' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'About', id: 'about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-theme-surface/70 backdrop-blur-md border-b border-theme-border shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
              <span className="text-2xl font-bold bg-theme-icon text-white p-1 rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
                 ⚡
              </span>
              <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-theme-text' : 'text-theme-text'}`}>
                Dagi Template
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:gap-x-8">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className="relative text-sm font-semibold leading-6 text-theme-text/80 hover:text-theme-text transition-colors group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-theme-icon transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
             <Button 
               variant="ghost" 
               size="sm"
               onClick={() => navigate(SETTINGS)}
               className="text-theme-text/70 hover:text-theme-text"
               leftIcon={<Settings size={18} />}
             >
               Settings
             </Button>

            <div className="h-6 w-px bg-theme-border/50 mx-2"></div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Star on GitHub
            </Button>
            
            <Button size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-theme-text"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-theme-surface border-b border-theme-border"
          >
            <div className="space-y-1 px-6 pb-6 pt-2">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold leading-7 text-theme-text hover:bg-theme-surface/50 hover:text-theme-icon transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="mt-6 space-y-3 pt-6 border-t border-theme-border">
                 <Button 
                   variant="ghost" 
                   className="w-full justify-start"
                   onClick={() => {
                     navigate(SETTINGS);
                     setIsMobileMenuOpen(false);
                   }}
                   leftIcon={<Settings size={18} />}
                 >
                   Appearance Settings
                 </Button>

                 <Button 
                   variant="outline" 
                   className="w-full justify-start"
                   onClick={() => window.open('https://github.com', '_blank')}
                 >
                   <Github className="w-4 h-4 mr-2" />
                   Star on GitHub
                 </Button>
                 <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
