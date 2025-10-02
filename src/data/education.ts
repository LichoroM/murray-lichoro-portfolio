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
  // Optional metadata for richer rendering in UI
  duration?: string; // e.g., 'Self-paced', '3 months'
  description?: string; // brief description of the course/cert
  url?: string; // verification or details URL
  skills: string[];
}

export const education: Education = {
  current: {
    degree: "Bachelor of Business Administration",
    specialization: "Artificial Intelligence",
    institution: "Nexford University",
    location: "Online",
    duration: "01/2024 – Present",
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
      duration: "08/2016 – 11/2019",
      status: "Completed",
      grade: "Credit",
      description: "Comprehensive program covering business processes, information systems, and technology management with focus on practical applications in enterprise environments."
    },
    {
      degree: "Certificate of Information Technology (CIT)",
      institution: "Kenya Methodist University",
      location: "Nairobi, Kenya",
      duration: "01/2016 – 07/2016",
      status: "Completed",
      grade: "Credit",
      description: "Foundation program in information technology covering computer systems, networking, and software applications."
    },
    {
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      institution: "Archbishop Ndingi Boys School",
      location: "Kenya",
      duration: "01/2011 – 11/2015",
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
    completed: "04/2025",
    expires: "April 2028",
    duration: "3 months",
    credentialId: "24f940cc-0947-4f38-ac94-64de6020947d",
    url: "https://isc2.obrizum.io/org/cc/certificate",
    description:
      "Industry-recognized cybersecurity certification covering security principles, network security, incident response, and access controls.",
    skills: ["Access Control", "Security Principles", "Network Security", "Incident Response"]
  },
  {
    name: "Vulnerability Management (VM) - Foundation",
    issuer: "Qualys",
    completed: "07/2025",
    duration: "Self-paced",
    credentialId: "QA-COURSE-SP-FDN-VM",
    url: "https://qualys.sumtotal.host/rcore/c/pillarRedirect?isDeepLink=1&relyingParty=LM&url=app%2Fmanagement%2FLMS_ActDetails.aspx%3FActivityId%3D24%26UserMode%3D0",
    description:
      "Foundation course covering vulnerability management, security compliance awareness, and network risk identification.",
    skills: ["Vulnerability Management", "Security Compliance Awareness", "Network Risk Identification", "Cybersecurity Fundamentals"]
  },
  {
    name: "Qualys Sensors Foundation",
    issuer: "Qualys",
    completed: "07/2025",
    duration: "Self-paced",
    credentialId: "QA-COURSE-SP-FDN-QSF",
    url: "https://qualys.sumtotal.host/rcore/c/pillarRedirect?isDeepLink=1&relyingParty=LM&url=app%2Fmanagement%2FLMS_ActDetails.aspx%3FActivityId%3D1071%26UserMode%3D0",
    description:
      "Foundation course on Qualys Sensors and Scanners. Comprehensive overview of the various types of sensors and scanners available.",
    skills: ["Vulnerability Scanning and Sensor Deployment", "Security Scanning Tools"]
  },
  {
    name: "Qualys Enterprise TruRisk™ Platform",
    issuer: "Qualys",
    completed: "07/2025",
    duration: "Self-paced",
    credentialId: "QA-COURSE-SP-FDN-ETP",
    url: "https://qualys.sumtotal.host/rcore/c/pillarRedirect?isDeepLink=1&relyingParty=LM&url=app%2Fmanagement%2FLMS_ActDetails.aspx%3FActivityId%3D1102%26UserMode%3D0",
    description:
      "Course designed to get started with the Qualys Enterprise TruRisk™ Platform. Provides a foundational understanding of how the platform helps organizations measure, communicate, and eliminate cyber risk.",
    skills: ["Security Tools & Platforms (Qualys)", "Cyber Risk Management", "Risk-Based Security", "Cybersecurity Fundamentals"]
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    completed: "07/2025",
    duration: "Self-paced",
    credentialId: "dab7bb63-665d-410e-94d7-e9d973ecbe35",
    url: "https://www.credly.com/badges/dab7bb63-665d-410e-94d7-e9d973ecbe35/linked_in_profile",
    description:
      "Comprehensive introduction to cybersecurity fundamentals, network vulnerabilities, and cyber best practices.",
    skills: ["Network Vulnerabilities", "Threat Detection", "Cyber Best Practices", "Privacy and Data Confidentiality"]
  },
  {
    name: "Introduction to CIP",
    issuer: "OPSWAT Academy",
    completed: "07/2025",
    expires: "June 2026",
    duration: "Self-paced",
    credentialId: "PfOHUMFrwA",
    url: "https://learn.opswatacademy.com/certificate/PfOHUMFrwA",
    description: "Certification on the Introduction to Critical Infrastructure Protection (CIP).",
    skills: ["Critical Infrastructure Protection", "Cybersecurity Fundamentals"]
  },
  {
    name: "Amplify Your Critical Thinking with Generative AI",
    issuer: "LinkedIn",
    completed: "07/2025",
    duration: "Self-paced",
    url: "https://www.linkedin.com/learning/certificates/86e3f1171135e5756bcb1374ddfdad44559fb28e9a16b3547e1230f8a3860937",
    description:
      "Course focused on enhancing critical thinking skills through the strategic use of generative AI tools.",
    skills: ["Critical Thinking", "Artificial Intelligence for Business"]
  },
  {
    name: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn",
    completed: "07/2025",
    duration: "Self-paced",
    url: "https://www.linkedin.com/learning/certificates/3782dd7443c0bde5779f9a0f70935c2c881aa3e77577f0a808a7a2b54451b568",
    description:
      "Foundational course on prompt engineering principles for generative artificial intelligence systems.",
    skills: ["AI Prompting"]
  },
  {
    name: "Prompt Engineering: How to Talk to the AIs",
    issuer: "LinkedIn",
    completed: "07/2025",
    duration: "Self-paced",
    url: "https://www.linkedin.com/learning/certificates/553d83509aa52a42af8c9962a49bc76b2eb6e18135aef06e85a688b4fc8f446e",
    description:
      "Advanced course on prompt engineering techniques for effective AI communication and optimization.",
    skills: ["Prompt Engineering", "Large Language Models (LLM)", "Generative AI"]
  },
  {
    name: "Investing in Human Skills in the Age of AI",
    issuer: "LinkedIn",
    completed: "09/2025",
    duration: "Self-paced",
    url: "https://www.linkedin.com/learning/certificates/47998508ee3c967827664621326ddf5bc08cebcdee58465696d17961247ebabc",
    description: "Human skills in the age of AI focusing on interpersonal skills and emotional intelligence.",
    skills: ["Interpersonal Skills", "Emotional Intelligence"]
  }
];