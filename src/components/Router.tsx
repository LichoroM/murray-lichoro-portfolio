import React, { createContext, useContext, useEffect, useState } from 'react';

type RouteType = 'home' | 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact' | 'thank-you';

interface RouterContextType {
  currentRoute: RouteType;
  navigateTo: (route: RouteType) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components -- Hook is co-located with component by design
export const useRouter = () => {
  const context = useContext(RouterContext);
  return context || { currentRoute: 'home' as const, navigateTo: () => {} };
};

interface RouterProps {
  children: React.ReactNode;
}

export const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<RouteType>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.slice(1) as RouteType;
  const validRoutes: RouteType[] = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact', 'thank-you'];
      return validRoutes.includes(hash) ? hash : 'home';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) as RouteType;
  const validRoutes: RouteType[] = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact', 'thank-you'];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
        // Ensure we land at the top of the new page
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: RouteType) => {
    window.location.hash = route;
    setCurrentRoute(route);
    // Scroll to top immediately on programmatic navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  };

  // Simple SEO: set title/description on route change for better UX and social previews
  useEffect(() => {
    const titleBase = 'Murray Lichoro';
    const map: Record<RouteType, { t: string; d: string }> = {
      home: { t: 'Home', d: 'Portfolio of Murray Lichoro: Cybersecurity & GRC, frontend development, and projects.' },
      about: { t: 'About', d: 'Learn about Murray Lichoro’s background, journey, and passion for cybersecurity and development.' },
      skills: { t: 'Skills', d: 'Explore technical expertise in cybersecurity, AI, and frontend development.' },
      projects: { t: 'Projects', d: 'Discover innovative projects and solutions built by Murray Lichoro.' },
      experience: { t: 'Experience', d: 'Professional experience, roles, and achievements.' },
      education: { t: 'Education', d: 'Academic background and continuous learning path.' },
      contact: { t: 'Contact', d: 'Get in touch for opportunities and collaborations.' },
      'thank-you': { t: 'Thank You', d: 'Thanks for reaching out! Your message has been sent successfully.' },
    };
    const meta = map[currentRoute];
    if (meta) {
      document.title = `${meta.t} — ${titleBase}`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta.d);
    }
  }, [currentRoute]);

  return (
    <RouterContext.Provider value={{ currentRoute, navigateTo }}>
      {children}
    </RouterContext.Provider>
  );
};