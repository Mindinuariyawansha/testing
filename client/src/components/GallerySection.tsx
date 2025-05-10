import React from 'react';
import { content } from '@/data/content';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-minecraft-green bg-opacity-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-minecraft-green mb-16 text-center">Build Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.gallerySection.items.map((item, index) => (
            <div key={index} className="gallery-item relative rounded-lg overflow-hidden block-border shadow-lg">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover pixelated"
              />
              <div className="overlay absolute inset-0 bg-minecraft-black bg-opacity-70 opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-minecraft text-white">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="minecraft-btn inline-block px-6 py-3 text-xl font-minecraft text-minecraft-black"
            onClick={(e) => e.preventDefault()}
          >
            VIEW MORE CREATIONS
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
