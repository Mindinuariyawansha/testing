import React from 'react';
import { content } from '@/data/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-minecraft-gray py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-white font-minecraft text-2xl">
              <span className="text-minecraft-green">S</span>
              <span className="text-minecraft-brown">o</span>
              <span className="text-minecraft-blue">l</span>
              <span className="text-white">e</span>
              <span className="text-minecraft-red">v</span>
              <span className="text-minecraft-green">e</span>
            </div>
            <p className="mt-2 text-sm">{content.footer.tagline}</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            {content.contactSection.socialLinks.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                onClick={(e) => e.preventDefault()}
                className={`w-10 h-10 rounded-full bg-minecraft-${link.color} flex items-center justify-center hover:bg-opacity-80 transition-colors`}
                aria-label={link.platform}
              >
                <i className={`fab ${link.icon}`}></i>
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">{content.footer.copyright}</p>
            <p className="text-xs mt-1">{content.footer.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
