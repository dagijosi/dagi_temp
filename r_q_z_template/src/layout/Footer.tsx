import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <nav className="mt-10" aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Projects</a></li>
            <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
