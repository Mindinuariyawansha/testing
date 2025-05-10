import React, { useEffect, useRef } from 'react';
import { content } from '@/data/content';

const SkillsSection: React.FC = () => {
  const progressRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const value = target.getAttribute('data-value') || '0';
            setTimeout(() => {
              target.style.backgroundSize = `${value}% 100%`;
            }, 300);
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.2 }
    );

    progressRefs.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => {
      progressRefs.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const addProgressRef = (el: HTMLDivElement) => {
    if (el && !progressRefs.current.includes(el)) {
      progressRefs.current.push(el);
    }
  };

  return (
    <section id="skills" className="py-16 bg-minecraft-green bg-opacity-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-minecraft-green mb-16 text-center">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-minecraft text-minecraft-brown mb-6">Minecraft Expertise</h3>
            
            {content.skillsSection.skills.map((skill, index) => (
              <div className="mb-6" key={index}>
                <div className="flex justify-between mb-2">
                  <p className="font-minecraft text-minecraft-black">{skill.name}</p>
                  <p className="font-minecraft text-minecraft-black">{skill.level}%</p>
                </div>
                <div className="w-full h-6 bg-gray-200 rounded-full block-border overflow-hidden">
                  <div 
                    ref={addProgressRef}
                    className={`progress-bar h-full rounded-full bg-minecraft-${skill.color}`} 
                    style={{ width: `${skill.level}%` }} 
                    data-value={skill.level}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-minecraft text-minecraft-brown mb-6">Game Modes</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {content.skillsSection.gameModes.map((mode, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md block-border">
                  <h4 className={`font-minecraft text-xl mb-2 text-minecraft-${mode.color}`}>{mode.name}</h4>
                  <p className="text-sm">{mode.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-minecraft text-minecraft-brown mb-4">Favorite Tools</h3>
              <div className="flex flex-wrap gap-3 items-center">
                {content.skillsSection.tools.map((tool, index) => (
                  <div key={index} className="flex items-center bg-white py-2 px-4 rounded-full block-border">
                    <span className="font-minecraft">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
