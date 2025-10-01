import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useRouter } from '../components/Router';
import {
  Shield, Code, Download, Award, MapPin,
  Target, Lightbulb, Users, Globe, GraduationCap,
  Briefcase, Phone, Mail
} from 'lucide-react';
import { personalInfo } from '../data/personal';

// NOTE: The project may not support `figma:` imports. Using a safe fallback image.
const murrayPhoto = `${import.meta.env.BASE_URL}profile.jpg`;

export function AboutPage() {
  const { navigateTo } = useRouter();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
  link.href = `${import.meta.env.BASE_URL}Murray-Lichoro-CV.pdf`;
    link.download = 'Murray-Lichoro-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Personal stats (2x2 grid)
  const personalStats = [
    { icon: Briefcase, label: '3+ Years', sub: 'Experience' },
    { icon: Award, label: '3 Certifications', sub: 'Verified' },
    { icon: Code, label: 'React & Tailwind', sub: 'Frontend' },
    { icon: Target, label: 'GRC & Frontend', sub: 'Focus Areas' },
  ];

  // Core values
  const coreValues = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every solution I build prioritizes security and compliance with GRC principles'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Always expanding knowledge through certifications and hands-on experience'
    },
    {
      icon: Users,
      title: 'Problem Solving',
      description: 'Dedicated to finding efficient solutions for complex technical challenges'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering high-quality, reliable IT support and security solutions'
    },
  ];

  // Professional journey timeline
  const timeline = [
    { year: '2016', title: 'Started IT Journey', description: 'Began Certificate in Information Technology at Kenya Methodist University' },
    { year: '2016-2019', title: 'Formal Education', description: 'Completed Diploma in Business Information Technology at JKUAT' },
    { year: '2018', title: 'First Professional Role', description: 'Technical Support role at Haripharm Pharmaceuticals - gained hands-on experience' },
    { year: '2019', title: 'Cisco Networking', description: 'Completed Cisco Networking Academy training, expanding network knowledge' },
    { year: '2021-2024', title: 'ICT Officer', description: '3+ years at National Potato Council of Kenya - comprehensive IT support and system administration' },
    { year: '2024', title: 'Cybersecurity Focus', description: 'Started BBA in AI at Nexford University and earned ISC2 CC certification' },
    { year: '2025', title: 'Current Role', description: 'Junior Cybersecurity Analyst (Remote Internship) at EncryptEdge Lab, UK' },
  ];

  // Interests & expertise
  const interests = [
    'GRC (Governance, Risk & Compliance)',
    'Network Security',
    'Threat Identification',
    'Access Control',
    'React Development',
    'Tailwind CSS',
    'Web Administration',
    'IT Support & Troubleshooting',
    'Documentaries',
    'Basketball',
    'Cycling',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent rounded-full">
              <Award className="w-4 h-4 text-[#14B8A6]" />
              <span>About Murray Lichoro</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground">
              About Murray Lichoro
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] mx-auto rounded-full mt-4"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-6">
              A security-minded technologist transitioning from enterprise IT support to cybersecurity and GRC, blending hands-on systems experience with modern frontend development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* LEFT: Profile Image */}
            <div className="relative order-2 lg:order-1 max-w-lg mx-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-3xl blur-3xl opacity-20 animate-pulse" aria-hidden="true"></div>
              <div className="relative bg-gradient-to-br from-card to-background p-4 sm:p-6 lg:p-8 rounded-3xl border border-border backdrop-blur-sm">
                <ImageWithFallback
                  src={murrayPhoto}
                  alt="Murray Lichoro - Professional Portrait"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* RIGHT: Bio Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
              <div>
                <div className="uppercase tracking-wider text-muted-foreground">Professional Profile</div>
                <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl text-foreground">
                  Hi, I'm <span className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent animate-pulse">Murray Lichoro</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  My full name is <strong>Martin Muriithi Kinyua</strong>, but I'm professionally known as <strong>Murray Lichoro</strong>.
                </p>
                <p className="mt-2 text-muted-foreground">
                  Junior Cybersecurity Analyst and Frontend Developer focused on practical security, GRC, and modern web technologies.
                </p>
              </div>

              {/* Key Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="bg-accent p-4 rounded-xl border border-border hover:border-[#14B8A6] transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#14B8A6]" />
                    <div>
                      <div className="text-foreground">Meru, Kenya</div>
                      <div className="text-muted-foreground">East Africa (EAT)</div>
                    </div>
                  </div>
                </div>
                <div className="bg-accent p-4 rounded-xl border border-border hover:border-[#14B8A6] transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#8B5CF6]" />
                    <div>
                      <div className="text-foreground">Remote & On-site</div>
                      <div className="text-muted-foreground">Flexible collaboration</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                {personalStats.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="bg-background p-4 rounded-xl text-center border border-border hover:border-[#14B8A6] transition-all hover:scale-105">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-[#14B8A6]" />
                        <div className="text-foreground">{s.label}</div>
                      </div>
                      <div className="text-muted-foreground">{s.sub}</div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] border-0"
                  onClick={handleDownloadCV}
                  aria-label="Download Murray Lichoro CV"
                >
                  <Download className="w-4 h-4 mr-2" /> Download CV
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                  onClick={() => navigateTo('contact')}
                >
                  <Mail className="w-4 h-4 mr-2" /> Get In Touch
                </Button>
              </div>

              {/* Contact Info Pills */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto lg:mx-0">
                <div className="bg-background p-4 rounded-xl border border-border hover:bg-[#14B8A6]/20 hover:border-[#14B8A6] transition-all">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#14B8A6]" />
                    <span className="text-muted-foreground">{personalInfo.email}</span>
                  </div>
                </div>
                <div className="bg-background p-4 rounded-xl border border-border hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6] transition-all">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#8B5CF6]" />
                    <span className="text-muted-foreground">{personalInfo.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl text-foreground">Explore My Professional Profile</h3>
            <p className="text-muted-foreground">Quick access to different aspects of my professional journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white hover:scale-105"
              onClick={() => navigateTo('skills')}
            >
              <Shield className="w-5 h-5" />
              <span className="font-medium">Skills</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white hover:scale-105"
              onClick={() => navigateTo('projects')}
            >
              <Code className="w-5 h-5" />
              <span className="font-medium">Projects</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white hover:scale-105"
              onClick={() => navigateTo('experience')}
            >
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">Experience</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex flex-col items-center justify-center gap-2 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white hover:scale-105"
              onClick={() => navigateTo('education')}
            >
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Education</span>
            </Button>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl text-foreground">What Drives Me</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">The core principles that guide my approach to technology and professional development</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-background p-6 rounded-xl border border-border hover:border-[#14B8A6] transition-all duration-300 hover:scale-105 group flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-accent rounded-lg group-hover:bg-[#14B8A6]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#14B8A6]" />
                  </div>
                  <div className="text-foreground font-bold">{v.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{v.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL JOURNEY TIMELINE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl text-foreground">My Professional Journey</h3>
            <p className="text-muted-foreground">A timeline of my career growth from IT support to cybersecurity specialization</p>
          </div>

          <div className="relative">
            <div className="hidden sm:block absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14B8A6] to-[#8B5CF6]" aria-hidden="true"></div>
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="flex-1 bg-background p-6 rounded-xl border border-border hover:border-[#14B8A6] transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <Badge className="w-fit bg-[#14B8A6]/20 text-[#14B8A6] border border-[#14B8A6]/30">{item.year}</Badge>
                      <h4 className="text-foreground font-bold">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS & EXPERTISE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl text-foreground">Interests & Expertise Areas</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Technologies, methodologies, and activities that fuel my passion for continuous growth</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {interests.map((interest, i) => (
              <Badge key={i} variant="secondary" className="bg-background text-muted-foreground border border-border px-4 py-2 hover:border-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all duration-300">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT STATUS CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] p-8 rounded-xl text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Currently Available for Opportunities</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm actively seeking entry-level positions in cybersecurity, GRC, IT support, and related fields. With my practical experience, certifications, and continuous learning mindset, I'm ready to contribute to innovative teams and secure digital environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0">
                <Mail className="w-4 h-4 mr-2" /> Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#14B8A6]"
                onClick={() => window.open('https://www.linkedin.com/in/martin-muriithi-2198b62ab/', '_blank')}
              >
                <Globe className="w-4 h-4 mr-2" /> LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}