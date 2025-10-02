export interface PersonalInfo {
  name: string;
  legalName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  linkedin: string;
  github: string;
  twitter: string;
  workingHours: string;
  responseTime: string;
  tagline: string;
  description: string;
  // Optional identity details (user approved public sharing)
  nationalId?: string;
  passport?: string;
  dob?: string; // DD/MM/YYYY
  nationality?: string;
  gender?: string;
  maritalStatus?: string;
  religion?: string;
  driversLicense?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Murray Lichoro",
  legalName: "Martin Muriithi Kinyua",
  title: "IT Support Professional • Aspiring Cybersecurity & GRC Analyst",
  email: "Murraylichoro@gmail.com",
  phone: "+254 714 364 533",
  location: "Meru, Kenya",
  timezone: "EAT (UTC+3)",
  linkedin: "https://www.linkedin.com/in/martin-muriithi-2198b62ab/",
  github: "https://github.com/LichoroM",
  twitter: "https://twitter.com/murray_lichoro",
  workingHours: "9 AM - 6 PM EAT",
  responseTime: "24-48 hours",
  tagline: "Aspiring Cybersecurity & GRC Analyst | ISC2 CC | Qualys Trainee | BBA in AI (Nexford)",
  description: "I am an aspiring tech professional actively seeking entry-level opportunities in the IT and cybersecurity fields, with a growing focus on Governance, Risk, and Compliance (GRC). My experience as an ICT Officer at the National Potato Council of Kenya gave me hands-on exposure to technical support, troubleshooting, system maintenance, and website backend management. I hold the ISC2 Certified in Cybersecurity (CC) credential and am currently expanding my skills through Qualys Academy, focusing on vulnerability management, asset security, and compliance tools. I am also pursuing a Bachelor of Business Administration in Artificial Intelligence at Nexford University, strengthening my ability to bridge business strategy with technology.",
  nationalId: "33757372",
  passport: "AK0887041",
  dob: "18/05/1996",
  nationality: "Kenyan",
  gender: "Male",
  maritalStatus: "Single",
  religion: "Christian",
  driversLicense: "3516509",
};