import React, { useState } from 'react';
import { content } from '@/data/content';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-minecraft-gray p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-minecraft text-3xl">
          <span className="text-minecraft-green">S</span>
          <span className="text-minecraft-brown">o</span>
          <span className="text-minecraft-blue">l</span>
          <span className="text-white">e</span>
          <span className="text-minecraft-red">v</span>
          <span className="text-minecraft-green">e</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {content.navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="text-white hover:text-minecraft-blue transition-colors font-minecraft text-xl"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button 
            className="text-white minecraft-btn px-4 py-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-minecraft-gray mt-2 p-4 font-minecraft`}>
        {content.navItems.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            className="block py-2 text-white hover:text-minecraft-blue transition-colors text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
