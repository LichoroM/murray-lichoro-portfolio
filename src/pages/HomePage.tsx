import { HeroSection } from '../components/HeroSection';
import { Button } from '../components/ui';
import { useRouter } from '../components/Router';
import { ArrowRight, User, Code, Briefcase, GraduationCap, Mail, FolderOpen } from 'lucide-react';

export function HomePage() {
  const { navigateTo } = useRouter();

  const quickLinks = [
    {
      title: 'About Me',
      description: 'Learn about my background, journey, and passion for cybersecurity and development',
      icon: User,
      route: 'about' as const,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Skills & Tools',
      description: "Explore my technical expertise in cybersecurity, AI, and frontend development",
      icon: Code,
      route: 'skills' as const,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Projects',
      description: "Discover the innovative solutions and applications I've built",
      icon: FolderOpen,
      route: 'projects' as const,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Experience',
      description: 'Review my professional journey and key accomplishments',
      icon: Briefcase,
      route: 'experience' as const,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Education',
      description: 'See my academic background and continuous learning path',
      icon: GraduationCap,
      route: 'education' as const,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Contact',
      description: 'Get in touch for opportunities and collaborations',
      icon: Mail,
      route: 'contact' as const,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Navigation Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">Explore My Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto text-base sm:text-lg">
              Dive deeper into each section to discover my skills, projects, and professional journey
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="group bg-background p-6 sm:p-8 rounded-xl border border-border hover:border-[#14B8A6] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => navigateTo(link.route)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo(link.route);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Navigate to ${link.title}`}
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${link.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                {/* Title */}
                <h3 className="text-xl text-foreground mb-3 group-hover:text-[#14B8A6] transition-colors duration-300">{link.title}</h3>
                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">{link.description}</p>
                {/* Explore link */}
                <div className="flex items-center text-[#14B8A6] group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] p-8 rounded-xl text-white max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl mb-4 text-white">Ready to Work Together?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                I'm Murray Lichoro, and I'm always excited to collaborate on innovative projects in cybersecurity, GRC, IT solutions, and frontend development. Let's build something amazing together!
              </p>
              <Button
                size="lg"
                className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0 px-8 py-3 transition-all duration-300 hover:scale-105"
                onClick={() => navigateTo('contact')}
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}