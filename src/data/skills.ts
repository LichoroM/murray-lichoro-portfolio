export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity",
    icon: "Shield",
    skills: [
      { name: "GRC (Governance, Risk & Compliance)", level: 75 },
      { name: "Network Security", level: 70 },
      { name: "Threat Identification", level: 70 },
      { name: "Access Control", level: 75 },
      { name: "BC/DR Planning", level: 65 }
    ]
  },
  {
    title: "Web Technologies",
    icon: "Globe",
    skills: [
      { name: "CMS Management", level: 85 },
      { name: "HTML/CSS", level: 75 },
      { name: "cPanel Administration", level: 80 },
      { name: "Website Backend Management", level: 80 },
      { name: "Domain & Certificate Management", level: 75 }
    ]
  },
  {
    title: "IT Support & Administration",
    icon: "Monitor",
    skills: [
      { name: "Troubleshooting", level: 90 },
      { name: "Systems Maintenance", level: 85 },
      { name: "End-User Training", level: 80 },
      { name: "Hardware Setup", level: 80 },
      { name: "Network Configuration", level: 75 }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    skills: [
      { name: "Windows OS", level: 90 },
      { name: "Microsoft Office Suite", level: 85 },
      { name: "Networking Tools", level: 75 },
      { name: "cPanel Platform", level: 80 },
      { name: "System Diagnostic Tools", level: 75 }
    ]
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: [
      { name: "Time Management", level: 85 },
      { name: "Problem-Solving", level: 90 },
      { name: "Customer Service", level: 85 },
      { name: "Technical Communication", level: 80 },
      { name: "Team Leadership", level: 75 }
    ]
  }
];