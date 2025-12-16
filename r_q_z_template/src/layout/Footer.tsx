import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-theme-surface border-t border-theme-border text-theme-text mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
               <span className="text-xl font-bold bg-theme-icon text-white p-1 rounded-md">⚡</span>
               <span className="font-bold text-lg tracking-tight">Dagi Template</span>
            </a>
            <p className="text-sm text-theme-text/60 leading-relaxed">
              A premium, production-ready template for building modern web applications with speed and style.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold mb-4 text-theme-text">Product</h3>
            <ul className="space-y-3 text-sm text-theme-text/70">
              <li><a href="#" className="hover:text-theme-icon transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-theme-icon transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-theme-icon transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-theme-icon transition-colors">Pricing</a></li>
            </ul>
          </div>

           {/* Links Column 2 */}
           <div>
            <h3 className="font-semibold mb-4 text-theme-text">Company</h3>
            <ul className="space-y-3 text-sm text-theme-text/70">
              <li><a href="#" className="hover:text-theme-icon transition-colors">About</a></li>
              <li><a href="#" className="hover:text-theme-icon transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-theme-icon transition-colors">Carrers</a></li>
              <li><a href="#" className="hover:text-theme-icon transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
             <h3 className="font-semibold mb-4 text-theme-text">Connect</h3>
             <div className="flex space-x-4 mb-6">
                <a href="#" className="p-2 rounded-full bg-theme-surface border border-theme-border text-theme-text/70 hover:text-theme-icon hover:border-theme-icon transition-all shadow-sm">
                  <FaGithub size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-theme-surface border border-theme-border text-theme-text/70 hover:text-theme-icon hover:border-theme-icon transition-all shadow-sm">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="p-2 rounded-full bg-theme-surface border border-theme-border text-theme-text/70 hover:text-theme-icon hover:border-theme-icon transition-all shadow-sm">
                   <FaLinkedin size={20} />
                </a>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-theme-border flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-theme-text/50">
             &copy; {new Date().getFullYear()} Dagi Template. All rights reserved.
           </p>
           <p className="text-xs text-theme-text/50 flex items-center gap-1">
             Made with <FaHeart className="text-red-500 animate-pulse" /> by Dagi
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
