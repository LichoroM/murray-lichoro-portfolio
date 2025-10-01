export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  date?: string;
  duration?: string;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    title: "NPCK Website Backend Management & Enhancement",
    description: "Managed and enhanced the National Potato Council of Kenya website backend operations, including content management, user administration, and system maintenance. Implemented newsletter distribution system and real-time market price updates.",
    technologies: ["cPanel", "CMS", "HTML/CSS", "Website Administration", "SSL Certificates"],
    category: "Web Administration",
    status: "Completed",
    date: "2021-2024",
    duration: "3 years",
    featured: true,
    metrics: ["99% Uptime", "0 Security Incidents", "Streamlined Content Updates"]
  },
  {
    title: "Professional Portfolio Website",
    description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include dark/light theme support, mobile-first design, and professional presentation of cybersecurity-focused content.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    category: "Web Development",
    status: "Completed",
    date: "2025",
    duration: "2 weeks",
    featured: true,
    githubUrl: "https://github.com/martin-muriithi/portfolio",
    liveUrl: "https://martin-muriithi.dev",
    metrics: ["100% Responsive", "Modern UI/UX", "Zero Build Errors"]
  },
  {
    title: "IT Infrastructure Optimization",
    description: "Led comprehensive IT infrastructure improvements at NPCK, including hardware setup, software deployment, and network optimization. Implemented systematic approach to troubleshooting and user support.",
    technologies: ["Windows OS", "Network Configuration", "Hardware Setup", "System Testing"],
    category: "Infrastructure",
    status: "Completed",
    date: "2021-2024",
    duration: "Ongoing",
    metrics: ["Reduced Downtime by 90%", "Improved System Performance", "Enhanced User Satisfaction"]
  },
  {
    title: "Cybersecurity Learning & Certification Path",
    description: "Ongoing professional development in cybersecurity, focusing on GRC frameworks, threat analysis, and compliance. Currently pursuing ISC2 CC certification and expanding knowledge in AI applications for business.",
    technologies: ["GRC Frameworks", "Threat Analysis", "Compliance", "Artificial Intelligence"],
    category: "Professional Development",
    status: "In Progress",
    date: "2024-Present",
    duration: "Ongoing",
    featured: true,
    metrics: ["ISC2 CC Certification", "3.94 GPA in BBA-AI", "Continuous Learning"]
  }
];