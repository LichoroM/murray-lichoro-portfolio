import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SkillProgress } from '../components/ui/SkillProgress';
import { useRouter } from '../components/Router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Shield, Code2, Globe, Wrench, Brain, ArrowRight, Monitor, Settings
} from 'lucide-react';

export function SkillsPage() {
  const { navigateTo } = useRouter();
  
  // Animation refs
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { ref: certsRef, isVisible: certsVisible } = useScrollAnimation();
  const { ref: journeyRef, isVisible: journeyVisible } = useScrollAnimation();

  // Technical Proficiency Categories
  const skillCategories = [
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: [
        { name: 'GRC Frameworks', level: 75 },
        { name: 'Network Security', level: 70 },
        { name: 'Threat Identification', level: 70 },
        { name: 'Access Control', level: 75 },
        { name: 'BC/DR Planning', level: 65 }
      ],
      color: 'border-red-500/20 hover:border-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React', level: 60 },
        { name: 'Tailwind CSS', level: 65 },
        { name: 'HTML/CSS', level: 75 },
        { name: 'JavaScript', level: 50 },
        { name: 'Responsive Design', level: 70 }
      ],
      color: 'border-blue-500/20 hover:border-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: [
        { name: 'CMS Management', level: 85 },
        { name: 'cPanel Administration', level: 80 },
        { name: 'Website Maintenance', level: 85 },
        { name: 'SSL Certificates', level: 75 },
        { name: 'Domain Management', level: 80 }
      ],
      color: 'border-green-500/20 hover:border-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'IT Support & Systems',
      icon: Monitor,
      skills: [
        { name: 'Windows OS', level: 90 },
        { name: 'System Troubleshooting', level: 90 },
        { name: 'Hardware Setup', level: 85 },
        { name: 'Network Configuration', level: 80 },
        { name: 'Software Installation', level: 85 }
      ],
      color: 'border-purple-500/20 hover:border-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Tools & Software',
      icon: Settings,
      skills: [
        { name: 'Microsoft Office Suite', level: 90 },
        { name: 'Networking Tools', level: 75 },
        { name: 'System Administration', level: 80 },
        { name: 'Technical Documentation', level: 85 }
      ],
      color: 'border-orange-500/20 hover:border-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      title: 'Soft Skills',
      icon: Brain,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Time Management', level: 90 },
        { name: 'Customer Service', level: 90 },
        { name: 'Technical Communication', level: 85 },
        { name: 'Team Collaboration', level: 85 }
      ],
      color: 'border-cyan-500/20 hover:border-cyan-500',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  // Certifications & Training
  const certifications = [
    {
      name: 'ISC2 Certified in Cybersecurity (CC)',
      status: 'Completed',
      progress: 100,
      year: '2024',
      category: 'Cybersecurity'
    },
    {
      name: 'Cisco Networking Academy',
      status: 'Completed',
      progress: 100,
      year: '2019',
      category: 'Networking'
    },
    {
      name: 'Qualys Academy Training',
      status: 'In Progress',
      progress: 60,
      year: '2025',
      category: 'Vulnerability Management'
    }
  ];

  // Currently Learning
  const currentLearning = [
    {
      icon: Code2,
      title: 'React Development',
      description: 'Currently learning React for frontend development',
      status: 'In Progress'
    },
    {
      icon: Globe,
      title: 'Tailwind CSS',
      description: 'Mastering modern CSS framework for responsive design',
      status: 'In Progress'
    },
    {
      icon: Shield,
      title: 'GRC Specialization',
      description: 'Focusing on Governance, Risk, and Compliance in cybersecurity',
      status: 'Ongoing'
    },
    {
      icon: Brain,
      title: 'AI in Business',
      description: 'Studying AI applications through BBA specialization',
      status: 'Academic'
    }
  ];

  // Learning Journey Timeline
  const learningPath = [
    {
      phase: 'Foundation (2016-2019)',
      description: 'Built IT fundamentals and business technology skills',
      skills: ['Information Technology', 'Business IT Systems', 'Basic Networking', 'Computer Applications']
    },
    {
      phase: 'Professional Experience (2018-2024)',
      description: 'Gained hands-on experience in IT support and system administration',
      skills: ['IT Support', 'System Troubleshooting', 'Web Administration', 'Network Configuration']
    },
    {
      phase: 'Cybersecurity Transition (2024-Present)',
      description: 'Transitioning into cybersecurity with certifications and practical experience',
      skills: ['ISC2 CC Certification', 'GRC Frameworks', 'Remote Internship', 'Vulnerability Management']
    },
    {
      phase: 'Current Development (2025)',
      description: 'Expanding skills in both cybersecurity and frontend development',
      skills: ['React Development', 'Tailwind CSS', 'Qualys Training', 'BBA in AI']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          heroVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent rounded-full">
            <Wrench className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm font-medium">Technical Skills</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] mx-auto rounded-full mb-6"></div>

          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            My technical expertise spans cybersecurity, IT support, web administration, and frontend development. Built through 3+ years of hands-on experience and continuous learning.
          </p>
        </div>
      </section>

      {/* Technical Proficiency Section */}
      <section 
        ref={skillsRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-accent/30 transition-all duration-700 delay-300 ${
          skillsVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technical Proficiency
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Skills developed through professional experience, certifications, and continuous learning
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`bg-background p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${category.color}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg ${category.bgColor}`}>
                      <Icon className="w-6 h-6 text-[#14B8A6]" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillProgress
                        key={skillIndex}
                        name={skill.name}
                        level={skill.level}
                        delay={index * 100 + skillIndex * 50}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section 
        ref={certsRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-500 ${
          certsVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Certifications & Training
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and training programs completed and in progress
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-background p-6 rounded-xl border border-border hover:border-[#14B8A6] transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">{cert.name}</h3>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        cert.status === 'Completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{cert.year}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="w-full bg-accent rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        cert.status === 'Completed'
                          ? 'bg-green-500'
                          : 'bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6]'
                      }`}
                      style={{ width: `${cert.progress}%` }}
                    ></div>
                  </div>
                </div>

                <Badge variant="secondary" className="text-xs">
                  {cert.category}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Currently Learning
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Active learning initiatives and skill development areas I'm currently focused on
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentLearning.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-background p-6 rounded-xl border border-border hover:border-[#14B8A6] transition-all duration-300 hover:scale-105 text-center">
                  <div className="inline-flex p-3 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>

                  <Badge variant="secondary" className="text-xs">
                    {item.status}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Journey Timeline Section */}
      <section 
        ref={journeyRef}
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-700 ${
          journeyVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Learning Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional development timeline from IT foundations to cybersecurity specialization
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#14B8A6] to-[#8B5CF6] hidden lg:block"></div>

            <div className="grid lg:grid-cols-1 gap-8">
              {learningPath.map((phase, index) => (
                <div key={index} className="relative flex gap-8 items-center">
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-full items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>

                  <div className="flex-1 bg-background p-6 rounded-xl border border-border hover:border-[#14B8A6] transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="lg:w-1/3">
                        <h3 className="text-xl font-bold text-foreground mb-2">{phase.phase}</h3>
                        <p className="text-muted-foreground text-sm">{phase.description}</p>
                      </div>

                      <div className="lg:w-2/3">
                        <div className="flex flex-wrap gap-2">
                          {phase.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-accent text-muted-foreground text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] p-8 rounded-xl text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Ready to Put These Skills to Work?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges in cybersecurity, IT support, and web development. Let's discuss how my skills can contribute to your team!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0"
                onClick={() => navigateTo('projects')}
              >
                View My Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#14B8A6]"
                onClick={() => navigateTo('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
