import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { useRouter } from './Router';
import type { RouteType } from './Router';
import { prefetchOnIdle, prefetchRoute } from '../lib/prefetch';
import { useTheme } from './ThemeProvider';

export const Navigation: React.FC = () => {
  const { currentRoute, navigateTo } = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = React.useMemo(() => [
    { label: 'About', route: 'about' as const },
    { label: 'Skills', route: 'skills' as const },
    { label: 'Projects', route: 'projects' as const },
    { label: 'Experience', route: 'experience' as const },
    { label: 'Education', route: 'education' as const },
    { label: 'Contact', route: 'contact' as const },
  ], []);

  const handleLogoClick = () => {
    navigateTo('home');
    setMobileMenuOpen(false);
  };

  const handleMenuItemClick = (route: typeof menuItems[0]['route']) => {
    navigateTo(route);
    setMobileMenuOpen(false);
  };

  // Prefetch other routes after initial render (idle time)
  React.useEffect(() => {
    const others = menuItems.map(m => m.route as RouteType).filter(r => r !== currentRoute);
    prefetchOnIdle(others);
  }, [currentRoute, menuItems]);

  return (
    <header className="fixed top-0 w-full glass-effect backdrop-blur-md border-b border-border/50 z-50 transition-all duration-300">
      {/* Skip to content for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-accent text-foreground px-3 py-2 rounded">Skip to content</a>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Modern Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-accent-teal transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-teal rounded-lg p-2 group"
          >
            <Sparkles className="w-6 h-6 text-accent-teal group-hover:animate-spin transition-all duration-300" />
            <span className="gradient-text">Murray Lichoro</span>
          </button>

          {/* Modern Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map(({ label, route }) => (
              <button
                key={route}
                onMouseEnter={() => prefetchRoute(route)}
                onFocus={() => prefetchRoute(route)}
                onClick={() => handleMenuItemClick(route)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-teal group ${
                  currentRoute === route
                    ? 'text-accent-teal bg-accent-teal/10 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {label}
                {currentRoute === route && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-teal rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Modern Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-accent/50 hover:bg-accent hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-teal shadow-sm group"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-500 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            {/* Modern Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-xl bg-accent/50 hover:bg-accent hover:scale-105 text-foreground hover:text-accent-teal transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-teal shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Modern Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/30 glass-effect bg-background/95 backdrop-blur-lg shadow-lg">
            <nav className="py-6 px-4 space-y-2">
              {menuItems.map(({ label, route }) => (
                <button
                  key={route}
                  onClick={() => handleMenuItemClick(route)}
                  className={`block w-full text-left px-6 py-4 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-teal rounded-xl group ${
                    currentRoute === route
                      ? 'text-accent-teal font-semibold bg-accent-teal/10 border-l-4 border-accent-teal shadow-sm transform scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50 hover:transform hover:scale-105 hover:shadow-sm'
                  }`}
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};