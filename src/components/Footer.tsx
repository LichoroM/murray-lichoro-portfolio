import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useRouter } from './Router';
import { personalInfo } from '../data/personal';

export const Footer: React.FC = () => {
  const { navigateTo } = useRouter();

  const quickLinks = [
    { label: 'About', route: 'about' as const },
    { label: 'Projects', route: 'projects' as const },
    { label: 'Education', route: 'education' as const },
    { label: 'Skills', route: 'skills' as const },
    { label: 'Experience', route: 'experience' as const },
    { label: 'Contact', route: 'contact' as const },
  ];

  const socialLinks = [
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="py-16 bg-[#0F172A] border-t border-[#334155]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand & Description */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 gradient-text">
                Murray<span className="text-[#14B8A6]">Lichoro</span>
              </h3>
              <p className="text-[#E5E7EB] mb-6 leading-relaxed">
                Aspiring Cybersecurity & GRC Analyst with 3+ years IT experience. 
                ISC2 CC Certified, learning React & Tailwind CSS, passionate about 
                building secure, compliant digital solutions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-effect bg-white/10 backdrop-blur-sm border border-[#334155] rounded-xl hover:bg-[#14B8A6]/20 hover:scale-110 hover:shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#14B8A6] group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-[#94A3B8] group-hover:text-[#14B8A6] transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map(({ label, route }) => (
                  <button
                    key={route}
                    onClick={() => navigateTo(route)}
                    className="text-left text-[#94A3B8] hover:text-[#14B8A6] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#14B8A6] rounded-md px-2 py-2"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Ready to Connect */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Ready to Connect?</h4>
              <p className="text-[#E5E7EB] mb-6 leading-relaxed">
                Let's discuss opportunities in cybersecurity, GRC, IT support, or 
                frontend development.
              </p>
              <button
                onClick={() => navigateTo('contact')}
                className="modern-button bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] text-white rounded-xl px-6 py-3 font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 inline-flex items-center"
                aria-label="Get in touch"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#94A3B8] text-sm mb-4 md:mb-0">
              © 2025 Murray Lichoro (Martin Muriithi Kinyua). All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-[#94A3B8]">
              <button className="hover:text-[#14B8A6] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#14B8A6] transition-colors">Terms of Service</button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-[#14B8A6] transition-colors inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};