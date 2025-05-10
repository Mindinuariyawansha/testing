import React, { useState } from 'react';
import { content } from '@/data/content';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message Sent",
      description: "Thanks for your message! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-minecraft-green mb-16 text-center">Connect With Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-minecraft text-minecraft-brown mb-6">{content.contactSection.title}</h3>
            <p className="mb-8">
              {content.contactSection.description}
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 font-minecraft">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-minecraft-gray rounded-md block-border focus:border-minecraft-green outline-none" 
                  placeholder="Steve"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-minecraft">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-minecraft-gray rounded-md block-border focus:border-minecraft-green outline-none" 
                  placeholder="steve@minecraft.net"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-minecraft">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-minecraft-gray rounded-md block-border focus:border-minecraft-green outline-none" 
                  placeholder="Hi Soleve, I'd love to collaborate on a build project..."
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className="minecraft-btn px-6 py-3 text-xl font-minecraft text-minecraft-black w-full"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-minecraft text-minecraft-brown mb-6">Find Me Online</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {content.contactSection.socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center p-4 bg-minecraft-beige rounded-lg block-border hover:bg-minecraft-green hover:bg-opacity-20 transition-colors"
                >
                  <div className={`w-12 h-12 bg-minecraft-${link.color} rounded-lg flex items-center justify-center text-white`}>
                    <i className={`fab ${link.icon} text-2xl`}></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-minecraft text-lg">{link.platform}</h4>
                    <p className="text-sm">{link.username}</p>
                  </div>
                  <div className="ml-auto">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 bg-minecraft-beige p-6 rounded-lg block-border">
              <h3 className="text-xl font-minecraft text-minecraft-brown mb-4">Join My Server</h3>
              <p className="mb-4">Play with me and other fans on my Minecraft Survival server!</p>
              <div className="bg-minecraft-green bg-opacity-20 p-3 rounded-md font-minecraft text-center">
                <span className="select-all">{content.contactSection.serverAddress}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
