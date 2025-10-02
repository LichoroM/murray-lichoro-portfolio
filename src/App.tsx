import React, { Suspense, lazy } from 'react';
import { ThemeProvider, Router, Navigation, Footer, useRouter } from './components';
import './styles/globals.css';

// Lazy load pages (map named exports to default for React.lazy)
const HomePage = lazy(() => import('./pages/HomePage.tsx').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage.tsx').then(m => ({ default: m.AboutPage })));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage.tsx').then(m => ({ default: m.ExperiencePage })));
const EducationPage = lazy(() => import('./pages/EducationPage.tsx').then(m => ({ default: m.EducationPage })));
const SkillsPage = lazy(() => import('./pages/SkillsPage.tsx').then(m => ({ default: m.SkillsPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.tsx').then(m => ({ default: m.ProjectsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx').then(m => ({ default: m.ContactPage })));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage.tsx').then(m => ({ default: m.ThankYouPage })));

const AppContent: React.FC = () => {
  const { currentRoute } = useRouter();

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'education':
        return <EducationPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      case 'thank-you':
        return <ThankYouPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      {/* Modern Background Elements */}
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="relative min-h-screen flex flex-col">
        <Navigation />
        
        <main id="main-content" className="flex-1" tabIndex={-1}>
          <Suspense 
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="modern-card p-8 text-center">
                  <div className="w-8 h-8 border-4 border-accent-teal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading...</p>
                </div>
              </div>
            }
          >
            {renderPage()}
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;