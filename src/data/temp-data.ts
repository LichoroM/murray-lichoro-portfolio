// Updated data export to handle compatibility temporarily
export { personalInfo } from './personal';
export { skillCategories } from './skills.ts';

// Simple project data for compatibility
export const projects = [
  {
    title: "Professional Portfolio Website",
    description: "Responsive portfolio website built with modern React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Web Development",
    status: "Completed",
    date: "2025",
    duration: "2 weeks",
    featured: true,
    githubUrl: "https://github.com/murray-lichoro/portfolio",
    liveUrl: "https://murray-lichoro.github.io",
    metrics: ["100% Responsive", "Lighthouse Score: 95+"]
  },
  {
    title: "NPCK Website Backend Management",
    description: "Website backend management for National Potato Council of Kenya.",
    technologies: ["cPanel", "HTML/CSS", "CMS", "SSL"],
    category: "Web Administration",
    status: "Completed (2021-2024)",
    duration: "3 years",
    featured: true,
    metrics: ["99% Uptime", "Zero Security Incidents"]
  }
];

export const featuredProjects = projects.filter(p => p.featured);

// Simple experience data
export const experiences = [
  {
    id: "exp-001",
    company: "EncryptEdge Lab",
    position: "Junior Cybersecurity Analyst",
    duration: "August 2024 - Present",
    startDate: "2024-08-01",
    endDate: null,
    location: "United Kingdom (Remote)",
    type: "internship",
    description: "Gaining international cybersecurity experience through vulnerability management.",
    responsibilities: ["Conduct vulnerability assessments", "Monitor security systems"],
    achievements: ["Adapted to international standards", "Improved monitoring processes"],
    technologies: ["SIEM", "Vulnerability Scanners"],
    skills: ["Vulnerability Management", "Threat Analysis"]
  }
];

// Simple education structure
export const education = {
  current: {
    degree: "Bachelor of Business Administration",
    specialization: "Artificial Intelligence",
    institution: "Nexford University",
    location: "Online",
    duration: "January 2024 - Present",
    status: "In Progress",
    description: "Business administration with AI specialization."
  },
  completed: [
    {
      degree: "Diploma in Business Information Technology",
      institution: "JKUAT",
      location: "Nairobi, Kenya",
      duration: "August 2016 - November 2019",
      status: "Completed",
      grade: "Credit"
    }
  ]
};

export const certifications = [
  {
    name: "CC Certified in Cybersecurity",
    issuer: "ISC2",
    completed: "April 2025",
    expires: "April 2028",
    credentialId: "24f940cc-0947-4f38-ac94-64de6020947d",
    skills: ["Access Control", "Security Principles"]
  }
];

// Type exports
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}