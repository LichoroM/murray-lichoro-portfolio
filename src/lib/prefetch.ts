import type { RouteType } from '../components/Router';

// Map routes to their dynamic import functions used in App.tsx
const routeImporters: Record<RouteType, () => Promise<unknown>> = {
  home: () => import('../pages/HomePage').then(m => m),
  about: () => import('../pages/AboutPage').then(m => m),
  experience: () => import('../pages/ExperiencePage').then(m => m),
  education: () => import('../pages/EducationPage').then(m => m),
  skills: () => import('../pages/SkillsPage').then(m => m),
  projects: () => import('../pages/ProjectsPage').then(m => m),
  contact: () => import('../pages/ContactPage').then(m => m),
  'thank-you': () => import('../pages/ThankYouPage').then(m => m),
};

const prefetched = new Set<RouteType>();

export function prefetchRoute(route: RouteType) {
  if (prefetched.has(route)) return;
  const importer = routeImporters[route];
  if (importer) {
    importer().catch(() => {});
    prefetched.add(route);
  }
}

export function prefetchOnIdle(routes: RouteType[]) {
  const cb = () => routes.forEach(prefetchRoute);
  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => void }).requestIdleCallback(cb, { timeout: 2000 });
  } else {
    setTimeout(cb, 1200);
  }
}