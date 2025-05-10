export interface NavItem {
  id: string;
  label: string;
}

export interface HeroSection {
  subtitle: string;
  cta: string;
}

export interface AboutSection {
  title: string;
  paragraphs: string[];
  stats: {
    value: string;
    label: string;
    color: string;
  }[];
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface GameMode {
  name: string;
  description: string;
  color: string;
}

export interface SkillsSection {
  skills: Skill[];
  gameModes: GameMode[];
  tools: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  color: string;
  icon: string;
  iconColor: string;
}

export interface Milestone {
  title: string;
  description: string;
  date: string;
}

export interface AchievementsSection {
  achievements: Achievement[];
  milestones: Milestone[];
}

export interface GalleryItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface GallerySection {
  items: GalleryItem[];
}

export interface SocialLink {
  platform: string;
  username: string;
  icon: string;
  color: string;
}

export interface ContactSection {
  title: string;
  description: string;
  socialLinks: SocialLink[];
  serverAddress: string;
}

export interface Footer {
  tagline: string;
  copyright: string;
  disclaimer: string;
}

export interface Content {
  navItems: NavItem[];
  heroSection: HeroSection;
  aboutSection: AboutSection;
  skillsSection: SkillsSection;
  achievementsSection: AchievementsSection;
  gallerySection: GallerySection;
  contactSection: ContactSection;
  footer: Footer;
}
