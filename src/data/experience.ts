export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'volunteer';
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-001",
    company: "National Potato Council of Kenya",
    position: "ICT Officer",
    duration: "June 2021 - June 2024",
    startDate: "2021-06-01",
    endDate: "2024-06-30",
    location: "Nairobi, Kenya",
    type: "full-time",
    description: "Delivered comprehensive IT services and support to technical and non-technical staff for company operations, providing technical leadership across IT service teams.",
    responsibilities: [
      "Delivered clearly, thorough IT services provide support to technical and non-technical staff for company operations",
      "Communicated complex technical information in clear, easy-to-understand ways, aiding the swift resolution of service user issues",
      "Provided technical leadership across IT service teams, enabling outstanding company-wide support",
      "Performed systems testing, hardware setup, and software programs to detect inefficiencies and vulnerabilities",
      "Diagnosed hardware and software faults quickly and effectively for optimal network performance",
      "Troubleshooting computers and maintaining operating systems",
      "Updated the NPCK Website from the backend, including Newsletter and Market Prices",
      "Created fresh staff members on the cPanel platform",
      "Renewed website certificates and domains"
    ],
    achievements: [
      "Successfully maintained optimal network performance through effective fault diagnosis",
      "Streamlined IT support processes across company-wide teams",
      "Enhanced website functionality and user experience through backend management",
      "Improved system security through regular testing and vulnerability detection"
    ],
    technologies: ["cPanel", "Website Management", "Windows OS", "Hardware Setup", "Network Diagnostics"],
    skills: ["Technical Support", "Network Troubleshooting", "Web Administration", "Staff Training", "System Testing"]
  },
  {
    id: "exp-002",
    company: "Self-Employed",
    position: "Fruit Market Vendor",
    duration: "July 2020 - May 2021",
    startDate: "2020-07-01",
    endDate: "2021-05-31",
    location: "Meru, Kenya",
    type: "full-time",
    description: "Managed independent fruit vending business during career transition period, developing entrepreneurial and customer service skills.",
    responsibilities: [
      "Checked deliveries from suppliers for quality and damage before accepting",
      "Loaded van with sufficient daily stock, driving to the market site for stall setup",
      "Called out and attracted attention to products and goods to broadcast awareness of stalls",
      "Always maintained a professional and polite appearance and manner"
    ],
    achievements: [
      "Successfully sustained business profitability during challenging economic period",
      "Built loyal customer base through consistent service quality",
      "Developed strong entrepreneurial and business management skills",
      "Demonstrated adaptability and resilience during career transition"
    ],
    technologies: ["Business Management", "Customer Relations", "Supply Chain", "Quality Control"],
    skills: ["Customer Service", "Business Management", "Quality Assurance", "Time Management", "Entrepreneurship"]
  },
  {
    id: "exp-003",
    company: "Haripharm Pharmaceuticals LTD",
    position: "Technical Support",
    duration: "October 2018 - November 2018",
    startDate: "2018-10-01",
    endDate: "2018-11-30",
    location: "Nairobi, Kenya",
    type: "contract",
    description: "Provided specialized IT assistance and technical support in pharmaceutical industry environment, ensuring compliance with industry standards.",
    responsibilities: [
      "Kept detailed records of new installations and related licenses",
      "Communicated ICT disruptions to staff regarding installations, upgrades, and outages",
      "Followed user guides and technical manuals to complete skilled repairs",
      "Configured networks to meet performance requirements",
      "Upgraded hardware promptly, minimizing service disruptions"
    ],
    achievements: [
      "Successfully resolved 100% of assigned technical support tickets",
      "Improved system configuration processes for pharmaceutical compliance",
      "Created comprehensive documentation for future technical support reference",
      "Maintained zero downtime for critical pharmaceutical systems"
    ],
    technologies: ["Windows Systems", "Hardware Configuration", "Pharmaceutical Software", "System Diagnostic Tools"],
    skills: ["Technical Support", "System Configuration", "Hardware Management", "Documentation", "Industry Compliance", "Problem Resolution"]
  }
];