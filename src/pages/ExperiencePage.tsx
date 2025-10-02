import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Briefcase, Calendar, MapPin, Building, Award,
  CheckCircle, ExternalLink, Download,
  Globe
} from 'lucide-react';

export function ExperiencePage() {
  // Animation refs
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  
  // Data arrays
  const experiences = [
    {
      title: 'Junior Cybersecurity Analyst',
      company: 'EncryptEdge Lab',
      location: 'United Kingdom (Remote)',
      type: 'Remote Internship',
      duration: 'August 2024 - Present',
      description:
        'Currently gaining international cybersecurity experience through a remote internship with a UK-based cybersecurity company. Focused on vulnerability management, threat analysis, and security compliance in a professional environment.',
      responsibilities: [
        'Conduct vulnerability assessments and security analysis',
        'Monitor security systems and analyze threat intelligence',
        'Assist in security incident response and documentation',
        'Support GRC activities and compliance reporting',
        'Collaborate with international security teams on projects',
      ],
      achievements: [
        'Successfully adapted to international cybersecurity standards',
        'Contributed to improving security monitoring processes',
        'Enhanced skills in professional security tools and methodologies',
      ],
      technologies: ['Security Information Tools', 'Vulnerability Scanners', 'Threat Intelligence Platforms', 'GRC Tools'],
      skills: ['Vulnerability Management', 'Threat Analysis', 'Security Monitoring', 'GRC Compliance'],
      current: true,
    },
    {
      title: 'ICT Officer',
      company: 'National Potato Council of Kenya',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      duration: 'June 2021 - June 2024',
      description:
        'Delivered comprehensive IT services and technical support to technical and non-technical staff across the organization. Managed website backend operations, system maintenance, and provided technical leadership for company-wide IT support.',
      responsibilities: [
        'Provided technical support and troubleshooting for company operations',
        'Managed website backend updates including newsletters and market prices',
        'Created and managed staff accounts on cPanel platform',
        'Renewed website certificates and domain registrations',
        'Performed systems testing, hardware setup, and software installations',
        'Diagnosed hardware and software faults for optimal network performance',
        'Maintained operating systems and ensured system security',
        'Communicated complex technical information clearly to diverse users',
      ],
      achievements: [
        'Maintained 99% system uptime across all company operations',
        'Successfully migrated website infrastructure with zero downtime',
        'Reduced technical support response time by 40%',
        'Implemented automated backup systems for critical data',
        'Trained 50+ staff members on new systems and security practices',
      ],
      technologies: ['Windows OS', 'cPanel', 'CMS Management', 'HTML/CSS', 'Network Tools', 'Microsoft Office Suite'],
      skills: ['IT Support at National Potato Council', 'System Administration', 'Web Management', 'Technical Training'],
      current: false,
    },
    {
      title: 'Fruit Market Vendor',
      company: 'Self-Employed',
      location: 'Meru, Kenya',
      type: 'Self-Employment',
      duration: 'July 2020 - May 2021',
      description:
        'Managed an independent fruit vending business during a career transition period. Demonstrated entrepreneurship, customer service, and business management skills while maintaining professional development in technology.',
      responsibilities: [
        'Checked deliveries from suppliers for quality and damage assessment',
        'Loaded van with sufficient daily stock and drove to market sites',
        'Set up and managed daily market stall operations',
        'Engaged customers and promoted products to increase sales',
        'Maintained professional appearance and customer service standards',
        'Managed inventory, pricing, and daily business operations',
      ],
      achievements: [
        'Successfully maintained consistent daily revenue streams',
        'Built strong relationships with suppliers and regular customers',
        'Developed strong entrepreneurial and business management skills',
        'Maintained technology skills during career transition period',
      ],
      technologies: ['Basic Business Management', 'Customer Relations'],
      skills: ['Entrepreneurship', 'Customer Service', 'Business Management', 'Adaptability'],
      current: false,
    },
    {
      title: 'Technical Support',
      company: 'Haripharm Pharmaceuticals LTD',
      location: 'Nairobi, Kenya',
      type: 'Internship',
      duration: 'October 2018 - November 2018',
      description:
        'First professional technical support role providing IT assistance in a pharmaceutical company environment. Gained valuable experience in enterprise IT support and system administration.',
      responsibilities: [
        'Kept detailed records of new installations and related licenses',
        'Communicated ICT disruptions to staff regarding installations and upgrades',
        'Followed user guides and technical manuals for skilled repairs',
        'Configured networks to meet performance requirements',
        'Upgraded hardware systems while minimizing service disruptions',
        'Provided end-user support and training',
      ],
      achievements: [
        'Successfully completed first professional IT role',
        'Gained hands-on experience with enterprise systems',
        'Developed strong technical documentation skills',
        'Built foundation for future IT career progression',
      ],
      technologies: ['Windows Systems', 'Network Configuration', 'Hardware Installation', 'Technical Documentation'],
      skills: ['Technical Support', 'System Configuration', 'Hardware Management', 'Documentation'],
      current: false,
    },
  ];

  const skills = [
    { name: 'GRC Frameworks', level: 80, category: 'Cybersecurity' },
    { name: 'Network Security', level: 75, category: 'Cybersecurity' },
    { name: 'Vulnerability Assessment', level: 70, category: 'Cybersecurity' },
    { name: 'Threat Identification', level: 75, category: 'Cybersecurity' },
    { name: 'IT Support & Troubleshooting', level: 90, category: 'IT Support' },
    { name: 'System Administration', level: 85, category: 'IT Support' },
    { name: 'Windows OS', level: 90, category: 'IT Support' },
    { name: 'Network Configuration', level: 80, category: 'IT Support' },
    { name: 'HTML/CSS', level: 75, category: 'Web Technologies' },
    { name: 'CMS Management', level: 85, category: 'Web Technologies' },
    { name: 'cPanel Administration', level: 80, category: 'Web Technologies' },
    { name: 'Microsoft Office Suite', level: 90, category: 'Productivity' },
    { name: 'Problem Solving', level: 95, category: 'Soft Skills' },
    { name: 'Customer Service', level: 90, category: 'Soft Skills' },
    { name: 'Technical Communication', level: 85, category: 'Soft Skills' },
    { name: 'Time Management', level: 90, category: 'Soft Skills' },
  ];

  const certifications = [
    {
      name: 'Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      date: '2024',
      status: 'Completed',
      credentialId: 'CC-2024-001',
    },
    {
      name: 'Cisco Networking Academy',
      issuer: 'CISCO',
      date: '2019',
      status: 'Completed',
      credentialId: 'CISCO-2019-001',
    },
    {
      name: 'Qualys Academy Training (In Progress)',
      issuer: 'Qualys',
      date: '2025',
      status: 'In Progress',
      credentialId: 'Expected: Q1 2025',
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}Murray-Lichoro-CV.pdf`;
    link.download = 'Murray-Lichoro-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section 
        ref={heroRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          heroVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent rounded-full">
            <Briefcase className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm text-muted-foreground">Professional Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">Work Experience</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            My professional journey in cybersecurity, web development, and technology. Each role has contributed to my growth as a well-rounded technology professional with expertise across multiple domains.
          </p>
        </div>
      </section>

      {/* PROFESSIONAL SUMMARY */}
      <section 
        ref={experienceRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-accent/30 transition-all duration-700 delay-300 ${
          experienceVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 gap-8">
            {/* Left: Summary */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl text-foreground mb-6">Professional Summary</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As an aspiring cybersecurity professional with hands-on experience in both security and development, I bring a unique perspective that bridges the gap between technical implementation and security best practices. My journey has been marked by continuous learning and practical application of knowledge.
                </p>
                <p>
                  Throughout my internships and projects, I have demonstrated the ability to work effectively in team environments, tackle complex technical challenges, and communicate technical concepts to diverse audiences. My experience spans from frontend development to cybersecurity analysis, giving me a comprehensive understanding of the technology landscape.
                </p>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="space-y-6 mt-8 lg:mt-0">
              <div className="bg-card/70 p-6 rounded-xl ring-1 ring-white/10">
                <h3 className="text-foreground mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="text-foreground">3+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="text-foreground">15+ Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certifications</span>
                    <span className="text-foreground">3 Earned</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="text-foreground">Cybersecurity</span>
                  </div>
                </div>
              </div>

              <div className="bg-card/70 p-6 rounded-xl ring-1 ring-white/10">
                <h3 className="text-foreground mb-4">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Open to entry-level tech & cyber roles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Remote & On-site</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE TIMELINE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4 sm:text-4xl">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A detailed timeline of my professional journey and key accomplishments</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14B8A6] to-[#8B5CF6] hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="lg:flex gap-8">
                    {/* Icon Badge (desktop only) */}
                    <div className="w-16 h-16 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-full flex items-center justify-center text-white hidden lg:flex">
                      <Briefcase className="w-6 h-6" />
                    </div>

                    {/* Experience Card */}
                    <div className="flex-1">
                      <Card className="bg-card/70 transition-all duration-300">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <CardTitle className="text-foreground flex items-center gap-2">
                                {exp.title}
                                {exp.current && (
                                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Current</Badge>
                                )}
                              </CardTitle>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Building className="w-4 h-4" />
                                  <span className="text-foreground/80">{exp.company}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.duration}</span>
                                </div>
                              </div>
                            </div>
                            <Badge className="text-xs w-fit bg-transparent ring-1 ring-white/10 text-muted-foreground">{exp.type}</Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                          {/* Key Responsibilities */}
                          <div>
                            <h4 className="text-foreground mb-3">Key Responsibilities</h4>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp: string, respIndex: number) => (
                                <li key={respIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Achievements */}
                          <div>
                            <h4 className="text-foreground mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement: string, achIndex: number) => (
                                <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <Award className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies & Skills */}
                          <div>
                            <h4 className="text-foreground mb-3">Technologies & Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech: string, techIndex: number) => (
                                <Badge key={techIndex} variant="secondary" className="bg-accent text-muted-foreground text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS DEVELOPMENT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4 sm:text-4xl">Skills Development</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">How my professional experience has contributed to skill development across different domains</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Cybersecurity', 'IT Support', 'Web Technologies', 'Soft Skills'].map((category) => (
              <div key={category} className="bg-card/70 p-6 rounded-xl ring-1 ring-white/10">
                <h3 className="text-foreground mb-4">{category}</h3>
                <div className="space-y-3">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-accent rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-foreground mb-8 text-center">Certifications</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card/70 p-6 rounded-xl ring-1 ring-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-foreground">{cert.name}</h3>
                  <Badge
                    className={`text-xs ${
                      cert.status === 'Completed'
                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}
                  >
                    {cert.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{cert.date}</span>
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] p-8 rounded-xl text-white">
            <h2 className="text-2xl sm:text-3xl mb-4 text-white">Ready to Bring Value to Your Team?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              With my diverse experience in cybersecurity, development, and proven track record of delivering results, I'm excited to contribute to innovative projects and continue growing as a technology professional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0" onClick={handleDownloadCV}>
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#14B8A6]"
                onClick={() => window.open('https://www.linkedin.com/in/martin-muriithi-2198b62ab/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" /> View LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}