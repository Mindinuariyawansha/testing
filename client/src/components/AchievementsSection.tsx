import React from 'react';
import { content } from '@/data/content';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-minecraft-green mb-16 text-center">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.achievementsSection.achievements.map((achievement, index) => (
            <div key={index} className="bg-minecraft-beige rounded-lg shadow-lg block-border overflow-hidden transition transform hover:-translate-y-2 duration-300">
              <div className={`h-48 bg-minecraft-${achievement.color} relative flex items-center justify-center`}>
                <div className="absolute inset-0 bg-minecraft-black bg-opacity-40"></div>
                <i className={`fas ${achievement.icon} text-6xl text-${achievement.iconColor} relative z-10`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-minecraft text-minecraft-brown mb-2">{achievement.title}</h3>
                <p className="text-sm mb-4">{achievement.description}</p>
                <p className="text-xs text-gray-500 font-minecraft">OBTAINED: {achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-minecraft text-minecraft-brown mb-6 text-center">Recent Milestones</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-minecraft-green"></div>
            
            <div className="grid grid-cols-1 gap-12">
              {content.achievementsSection.milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-minecraft-green border-4 border-white z-10"></div>
                  
                  {/* Only show on desktop and alternate side */}
                  <div className={`w-5/12 pr-8 text-right md:block hidden ${index % 2 !== 0 ? 'block' : 'empty'}`}>
                    {index % 2 !== 0 && (
                      <>
                        <h4 className="font-minecraft text-lg text-minecraft-brown mb-2">{milestone.title}</h4>
                        <p className="text-sm mb-2">{milestone.description}</p>
                        <p className="text-xs text-gray-500 font-minecraft">{milestone.date}</p>
                      </>
                    )}
                  </div>
                  
                  <div className={`md:w-5/12 w-full md:pl-8 pl-12 ${index % 2 === 0 ? 'bg-white p-4 rounded-lg shadow-md block-border' : 'hidden md:block'}`}>
                    {index % 2 === 0 && (
                      <>
                        <h4 className="font-minecraft text-lg text-minecraft-brown mb-2">{milestone.title}</h4>
                        <p className="text-sm mb-2">{milestone.description}</p>
                        <p className="text-xs text-gray-500 font-minecraft">{milestone.date}</p>
                      </>
                    )}
                  </div>
                  
                  {/* Mobile only */}
                  {index % 2 !== 0 && (
                    <div className="md:hidden w-full pl-12 bg-white p-4 rounded-lg shadow-md block-border">
                      <h4 className="font-minecraft text-lg text-minecraft-brown mb-2">{milestone.title}</h4>
                      <p className="text-sm mb-2">{milestone.description}</p>
                      <p className="text-xs text-gray-500 font-minecraft">{milestone.date}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
