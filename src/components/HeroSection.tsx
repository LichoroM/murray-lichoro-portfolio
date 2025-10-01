import { Button } from './ui';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowDown, Linkedin, Mail } from 'lucide-react';
import { useRouter } from './Router';

export function HeroSection() {
  const { navigateTo } = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="text-sm sm:text-base text-muted-foreground font-medium tracking-wider uppercase">Welcome to my portfolio</div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] bg-clip-text text-transparent animate-pulse">Murray Lichoro</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0">
              Aspiring Cybersecurity & GRC Analyst | ISC2 CC Certified | Frontend Developer
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Tech-savvy IT professional with 3+ years of experience. Currently pursuing BBA in AI, learning React & Tailwind CSS, and transitioning into cybersecurity with focus on Governance, Risk & Compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:from-[#2563EB] hover:to-[#7C3AED] text-white border-0 px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => navigateTo('projects')}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => navigateTo('contact')}
              >
                Contact Me
              </Button>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-[#14B8A6] hover:bg-accent transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                  onClick={() => window.open('https://www.linkedin.com/in/martin-muriithi-2198b62ab/', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-[#14B8A6] hover:bg-accent transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                  onClick={() => (window.location.href = 'mailto:Murraylichoro@gmail.com')}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Profile photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-card to-background p-4 sm:p-6 lg:p-8 rounded-3xl border border-border backdrop-blur-sm">
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}profile.webp`}
                  fallbackSrc={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Murray Lichoro - Professional Portrait"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigateTo('about')}
          className="text-muted-foreground hover:text-[#14B8A6] transition-all duration-300"
          aria-label="Go to about page"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}