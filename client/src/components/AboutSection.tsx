import React from 'react';
import { content } from '@/data/content';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-minecraft-green mb-16 text-center">About Soleve</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-minecraft text-minecraft-brown mb-4">{content.aboutSection.title}</h3>
            {content.aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 grid grid-cols-2 gap-4 font-minecraft">
              {content.aboutSection.stats.map((stat, index) => (
                <div key={index} className="bg-minecraft-beige p-4 rounded block-border text-center">
                  <p className={`text-4xl font-bold text-minecraft-${stat.color} mb-2`}>{stat.value}</p>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://pixabay.com/get/gc425a90b667bcfd112bf3defce5d5c12ce7224e9da9cb85fcdbce9b9e76287389c1081aba176efcb3aee546ae062812d7f70e072bacf75acc9bbc8d262750e2b_1280.jpg" 
              alt="Soleve standing in front of an elaborate Minecraft castle" 
              className="rounded-lg block-border shadow-xl max-w-full h-auto pixelated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
