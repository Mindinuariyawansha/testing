import { Content } from '@/lib/types';

export const content: Content = {
  navItems: [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ],
  
  heroSection: {
    subtitle: 'Minecraft Architect • PvP Champion • Redstone Engineer',
    cta: 'DISCOVER MY WORLD'
  },
  
  aboutSection: {
    title: 'The Journey Begins',
    paragraphs: [
      'Welcome to my blocky universe! I\'m Soleve, a passionate Minecraft player with over 7 years of experience crafting, surviving, and competing in the world of Minecraft.',
      'My adventure began in 2014 when I first discovered the endless possibilities of this amazing sandbox game. Since then, I\'ve dedicated thousands of hours to perfecting my skills in building, PvP combat, redstone engineering, and survival strategies.',
      'I specialize in creating massive architectural wonders, intricate redstone contraptions, and have been ranked in the top 100 players on several competitive PvP servers. When I\'m not building or battling, I enjoy exploring the endless worlds and discovering new techniques to share with the Minecraft community.'
    ],
    stats: [
      { value: '7+', label: 'YEARS PLAYING', color: 'green' },
      { value: '150+', label: 'BUILDS COMPLETED', color: 'blue' }
    ]
  },
  
  skillsSection: {
    skills: [
      { name: 'Building & Architecture', level: 95, color: 'green' },
      { name: 'PvP Combat', level: 90, color: 'red' },
      { name: 'Redstone Engineering', level: 85, color: 'blue' },
      { name: 'Survival Strategies', level: 92, color: 'brown' },
      { name: 'Resource Management', level: 88, color: 'gray' }
    ],
    gameModes: [
      { 
        name: 'Survival', 
        description: 'Mastered hardcore survival with minimal deaths and efficient resource collection.', 
        color: 'green'
      },
      { 
        name: 'PvP', 
        description: 'Ranked player on multiple servers with advanced combat techniques and strategies.', 
        color: 'red'
      },
      { 
        name: 'Creative', 
        description: 'Created massive architectural projects and detailed landscapes with artistic precision.', 
        color: 'blue'
      },
      { 
        name: 'Skyblock', 
        description: 'Developed efficient island systems and resource generation with minimal space.', 
        color: 'brown'
      }
    ],
    tools: [
      'Diamond Pickaxe',
      'Elytra',
      'Redstone Dust',
      'Enchanting Table',
      'Netherite Sword'
    ]
  },
  
  achievementsSection: {
    achievements: [
      {
        title: 'PvP Tournament Champion',
        description: 'Won the annual MineWars tournament, defeating over 500 competitors in intense PvP battles.',
        date: 'DECEMBER 2022',
        color: 'green',
        icon: 'fa-trophy',
        iconColor: 'yellow-400'
      },
      {
        title: 'Master Builder Award',
        description: 'Recognized for creating a fully functioning medieval city with innovative redstone mechanisms.',
        date: 'MARCH 2023',
        color: 'blue',
        icon: 'fa-gem',
        iconColor: 'blue-300'
      },
      {
        title: 'Redstone Innovator',
        description: 'Designed a compact 16-bit computer with functioning display and memory storage using only redstone components.',
        date: 'AUGUST 2023',
        color: 'red',
        icon: 'fa-cogs',
        iconColor: 'red-300'
      }
    ],
    milestones: [
      {
        title: 'Completed 100-Day Hardcore Challenge',
        description: 'Survived 100 days in hardcore mode with self-imposed additional challenges such as no farming.',
        date: 'OCTOBER 2023'
      },
      {
        title: 'Reached 10,000 Subscribers',
        description: 'Minecraft tutorial channel hit 10k subscribers, celebrating with a 24-hour livestream build event.',
        date: 'AUGUST 2023'
      },
      {
        title: 'Joined Elite SMP Server',
        description: 'Selected as one of 50 players to join the exclusive SurviveElite SMP server with top Minecraft players.',
        date: 'JUNE 2023'
      }
    ]
  },
  
  gallerySection: {
    items: [
      {
        title: 'Medieval Castle',
        description: 'A massive castle with 12 towers, working drawbridge, and interior royal chambers.',
        imageUrl: 'https://pixabay.com/get/gbbdda8f48f4991d3ba9a2a4daf4da8b5c6ed13babc9969bfa7499d6984713a4c7122c548ee99639e64eb52b419a14dcdf4e277dc4ac2e0fe542a6621481a4630_1280.jpg'
      },
      {
        title: 'Futuristic City',
        description: 'Neon-lit metropolis with functional transport system and automated farms.',
        imageUrl: 'https://pixabay.com/get/g1948a62377d228ba384d9c0309fd973bd4871de77077575ef26b5411fce3adf39c3b1c91c64be853147758f683f14dc22ebdf997686277fd1fdd83f9d019f845_1280.jpg'
      },
      {
        title: 'Underwater Base',
        description: 'Interconnected glass domes with marine life observation rooms and redstone laboratory.',
        imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
      },
      {
        title: 'Treehouse Village',
        description: 'Connected canopy dwellings with rope bridges and hidden storage systems.',
        imageUrl: 'https://pixabay.com/get/g28ac9076806c3aa35a9a85352e6baaa94750833b533373e7496f46ea8dc364c5980c70ec7344a5db9d9f79c7afc47c791558145e2e394710c8360cc4636fc235_1280.jpg'
      },
      {
        title: 'Redstone Computer',
        description: '16-bit computer with memory, display, and basic programming capabilities.',
        imageUrl: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
      },
      {
        title: 'Mountain Base',
        description: 'Fortress carved into mountainside with hidden entrances and storage halls.',
        imageUrl: 'https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80'
      }
    ]
  },
  
  contactSection: {
    title: 'Get In Touch',
    description: 'Want to team up for a build, join my server, or just chat about Minecraft? Drop me a message and I\'ll get back to you as soon as possible!',
    socialLinks: [
      {
        platform: 'YouTube',
        username: 'SoleveGaming',
        icon: 'fa-youtube',
        color: 'green'
      },
      {
        platform: 'Twitch',
        username: 'SoleveStreams',
        icon: 'fa-twitch',
        color: 'blue'
      },
      {
        platform: 'Discord',
        username: 'Soleve\'s Crafting Table',
        icon: 'fa-discord',
        color: 'red'
      },
      {
        platform: 'Twitter',
        username: '@SoleveMinecraft',
        icon: 'fa-twitter',
        color: 'brown'
      }
    ],
    serverAddress: 'play.soleve-mc.com'
  },
  
  footer: {
    tagline: 'Minecraft Enthusiast & Builder',
    copyright: '© 2023 Soleve. All rights reserved.',
    disclaimer: 'Not affiliated with Mojang Studios or Minecraft.'
  }
};
