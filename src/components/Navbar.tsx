
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <>
      <header className="relative z-10 flex justify-between items-center py-6 px-8 md:px-16 lg:px-24">
        <div className="flex items-center">
          <span className="font-orbitron text-2xl font-bold text-accent-teal tracking-wider">IMILY.DEV</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-text-secondary hover:text-accent-teal transition-colors duration-300"
            >
              {link.text}
            </a>
          ))}
        </nav>
        <button 
          className="md:hidden text-accent-teal" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className={`fixed inset-0 z-50 bg-space bg-opacity-95 flex flex-col items-center justify-center ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <button 
          className="absolute top-6 right-8 text-accent-teal" 
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col space-y-8 text-center">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-lg text-text-secondary hover:text-accent-teal transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
