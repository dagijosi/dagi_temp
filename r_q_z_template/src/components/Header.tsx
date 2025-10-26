import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-white/10 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="flex items-center gap-x-2">
                <img className="h-8 w-auto" src="/vite.svg" alt="Logo" />
                <span className="text-white font-semibold text-lg">Dagi Temp</span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            <a
              href="#features"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Features
            </a>
          </div>
          <div onClick={handleNav} className="block sm:hidden items-center flex">
            {nav ? <AiOutlineClose size={20} color="white" /> : <AiOutlineMenu size={20} color="white" />}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {nav && <div className="fixed inset-0 bg-black/30 z-20" onClick={handleNav} />}

      <div
        className={
          `fixed top-0 h-full w-[60%] max-w-sm bg-gray-900 z-30 shadow-xl transition-transform duration-300 ease-in-out ${nav ? 'left-0' : '-left-full'}`
        }
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
            <Link to="/" className="flex items-center gap-x-2">
                <img className="h-8 w-auto" src="/vite.svg" alt="Logo" />
                <span className="text-white font-semibold text-lg">Dagi Temp</span>
            </Link>
            <div onClick={handleNav}>
                <AiOutlineClose size={20} color="white" />
            </div>
        </div>
        <ul className="p-4">
          <li className="p-4">
            <NavLink to="/" className="text-white text-lg" onClick={handleNav}>Home</NavLink>
          </li>
          <li className="p-4">
            <a href="#features" className="text-white text-lg" onClick={handleNav}>Features</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header