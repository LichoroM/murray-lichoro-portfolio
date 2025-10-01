export interface EducationProgress {
  completion: string;
  currentSemester: string;
  expectedGraduation: string;
  gpa: string;
  totalCredits: number;
  completedCredits: number;
}

export interface EducationItem {
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  duration: string;
  status: 'In Progress' | 'Completed';
  grade?: string;
  description: string;
  progress?: EducationProgress;
}

export interface Education {
  current: EducationItem;
  completed: EducationItem[];
}

export interface Certification {
  name: string;
  issuer: string;
  completed: string;
  expires?: string;
  credentialId?: string;
  skills: string[];
}

export const education: Education = {
  current: {
    degree: "Bachelor of Business Administration",
    specialization: "Artificial Intelligence",
    institution: "Nexford University",
    location: "Online",
    duration: "January 2024 - Present",
    status: "In Progress",
    description: "Comprehensive business administration program with specialization in artificial intelligence, combining business strategy with emerging AI technologies.",
    progress: {
      completion: "45%",
      currentSemester: "3rd Year",
      expectedGraduation: "August 2026",
      gpa: "3.94",
      totalCredits: 120,
      completedCredits: 54
    }
  },
  completed: [
    {
      degree: "Diploma in Business Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      location: "Nairobi, Kenya",
      duration: "August 2016 - November 2019",
      status: "Completed",
      grade: "Credit",
      description: "Comprehensive program covering business processes, information systems, and technology management with focus on practical applications in enterprise environments."
    },
    {
      degree: "Certificate in Information Technology",
      institution: "Kenya Methodist University",
      location: "Nairobi, Kenya",
      duration: "January 2016 - July 2016",
      status: "Completed",
      grade: "Credit",
      description: "Foundation program in information technology covering computer systems, networking, and software applications."
    },
    {
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Archbishop Ndingi Boys School",
      location: "Kenya",
      duration: "January 2011 - November 2015",
      status: "Completed",
      grade: "C+",
      description: "Secondary education with focus on sciences and mathematics, providing strong analytical foundation for technical studies."
    }
  ]
};

export const certifications: Certification[] = [
  {
    name: "CC Certified in Cybersecurity",
    issuer: "ISC2",
    completed: "April 2025",
    expires: "April 2028",
    credentialId: "24f940cc-0947-4f38-ac94-64de6020947d",
    skills: ["Access Control", "Security Principles", "Network Security", "Incident Response"]
  },
  {
    name: "Vulnerability Management - Foundation",
    issuer: "Qualys",
    completed: "July 2025",
    credentialId: "QA-COURSE-SP-FDN-VM",
    skills: ["Vulnerability Management", "Compliance Awareness", "Risk Identification", "Security Assessment"]
  },
  {
    name: "Qualys Sensors Foundation",
    issuer: "Qualys",
    completed: "July 2025",
    credentialId: "QA-COURSE-SP-FDN-QSF",
    skills: ["Scanning", "Sensor Deployment", "Network Discovery", "Asset Management"]
  },
  {
    name: "Qualys Enterprise TruRisk Platform",
    issuer: "Qualys",
    completed: "July 2025",
    credentialId: "QA-COURSE-SP-FDN-ETP",
    skills: ["Security Tools", "Cyber Risk Management", "Risk Assessment", "Enterprise Security"]
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    completed: "July 2025",
    credentialId: "dab7bb63-665d-410e-94d7-e9d973ecbe35",
    skills: ["Vulnerabilities", "Threat Detection", "Best Practices", "Network Security"]
  },
  {
    name: "Introduction to CIP",
    issuer: "OPSWAT",
    completed: "July 2025",
    expires: "June 2026",
    credentialId: "PfOHUMFrwA",
    skills: ["Infrastructure Protection", "Fundamentals", "Critical Infrastructure", "Security Controls"]
  },
  {
    name: "Prompt Engineering: How to Talk to the AIs",
    issuer: "LinkedIn",
    completed: "July 2025",
    credentialId: "linkedin-prompt-engineering-ai",
    skills: ["Prompt Engineering", "LLMs", "Generative AI", "AI Communication"]
  },
  {
    name: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn",
    completed: "July 2025",
    credentialId: "linkedin-intro-prompt-engineering",
    skills: ["AI Prompting", "Generative AI", "Machine Learning", "AI Applications"]
  },
  {
    name: "Amplify Your Critical Thinking with Generative AI",
    issuer: "LinkedIn",
    completed: "July 2025",
    credentialId: "linkedin-critical-thinking-ai",
    skills: ["Critical Thinking", "AI for Business", "Decision Making", "AI Strategy"]
  }
];