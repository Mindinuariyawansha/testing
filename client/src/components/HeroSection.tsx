import React from 'react';
import { content } from '@/data/content';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-96 overflow-hidden">
      {/* Panoramic Minecraft landscape */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://pixabay.com/get/g6c330e1367899055a517d303dd6503a8ffe248ade9221708c152c8c328b668fa8c6c0f6e4a8cc2bdb6020814836c6e292c43fdeddd516d8be41670fef0977c6b_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-minecraft-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 px-4">
        {/* Pixelated Minecraft character avatar */}
        <img 
          src="https://pixabay.com/get/ge521be39cf775dfb0790be18cc55abb86f9cfad5689fee9b825beb4dbf000fce7280b33edb96fd5d78225863a92e8260105cc50013d19109dc18f4918a3f461c_1280.jpg" 
          alt="Soleve Minecraft Avatar" 
          className="w-28 h-28 rounded-lg block-border pixelated mb-6 animate-float"
        />
        
        <h1 className="text-6xl font-minecraft text-white mb-2 text-center">
          <span className="text-minecraft-green">S</span>oleve
        </h1>
        <p className="text-xl text-white font-minecraft text-center max-w-xl">
          {content.heroSection.subtitle}
        </p>
        <div className="mt-8">
          <a 
            href="#about" 
            className="minecraft-btn px-6 py-3 text-xl font-minecraft text-minecraft-black"
          >
            {content.heroSection.cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
