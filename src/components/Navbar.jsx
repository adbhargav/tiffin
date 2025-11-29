import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-primary-teal shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logo1.png"
                alt="TastyTiffins Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${location.pathname === link.path
                    ? 'text-accent-yellow border-b-2 border-accent-yellow'
                    : 'text-white hover:text-accent-yellow'
                  } px-3 py-2 rounded-md text-sm font-medium transition duration-300 transform hover:scale-105`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20order%20tiffin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-yellow hover:bg-accent-aqua text-secondary-green font-bold py-2 px-4 rounded-full transition duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 transform"
            >
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent-yellow focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary-green">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${location.pathname === link.path
                    ? 'text-accent-yellow bg-secondary-green'
                    : 'text-white hover:text-accent-yellow'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20order%20tiffin"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent-yellow hover:bg-accent-aqua text-secondary-green font-bold py-2 px-4 rounded mt-2 transition duration-300 shadow-md hover:shadow-xl active:scale-95 transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;