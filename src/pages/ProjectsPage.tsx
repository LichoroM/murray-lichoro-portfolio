import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useRouter } from '../components/Router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects as dataProjects } from '../data';
import {
  ExternalLink, Github, FolderOpen, Calendar, Users, Clock, Eye,
  Search, Globe, Shield, Monitor, Server, Code
} from 'lucide-react';

export function ProjectsPage() {
  const { navigateTo } = useRouter();
  
  // Animation refs
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  
  // State
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Source data from central data index
  const projects = dataProjects;
  const active = projects.filter(p => p.status === 'In Progress');

  // Fallback image per category
  const getProjectImage = (category: string) => {
    const map: Record<string, string> = {
      'Web Development':
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTczNzM5NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'Web Administration':
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NTc0MTY5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      Cybersecurity:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwYXNzZXNzbWVudHxlbnwxfHx8fDE3NTc0MTY5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'IT Support':
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnR8ZW58MXx8fHwxNzU3NDE2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      Infrastructure:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnR8ZW58MXx8fHwxNzU3NDE2OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'Professional Development':
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwYXNzZXNzbWVudHxlbnwxfHx8fDE3NTc0MTY5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    };
    return map[category] || '/vite.svg';
  };

  // Categories (derived from data)
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  // Helpers
  const getStatusBadge = (status: string) => {
    const statusStyles: Record<string, string> = {
      Completed: 'bg-green-500/20 text-green-400 border-green-500/30',
      Ongoing: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    };
    return statusStyles[status] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Web Development': Code,
      Cybersecurity: Shield,
      'IT Support': Monitor,
      'Web Administration': Server,
    } as const;
    return icons[category as keyof typeof icons] || FolderOpen;
  };

  // Filtering
  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(term));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* ACTIVE PROJECTS BANNER */}
      {active.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 pt-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-accent/40 rounded-xl p-4 sm:p-6 ring-1 ring-white/10">
              <p className="text-sm text-muted-foreground text-center">
                Currently working on: {active.map(a => a.title).join(' • ')}
              </p>
            </div>
          </div>
        </section>
      )}
      {/* HERO */}
      <section 
        ref={heroRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          heroVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent rounded-full">
            <FolderOpen className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm text-muted-foreground">Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">My Projects & Work</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Explore my professional projects spanning cybersecurity, web development, IT support, and system administration. Each project demonstrates practical skills and real-world problem-solving capabilities.
          </p>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-[#14B8A6] transition-colors duration-300"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end w-full lg:w-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className={`transition-all duration-300 ${
                    filter === category
                      ? 'bg-[#14B8A6] text-white border-[#14B8A6]'
                      : 'hover:bg-accent hover:border-[#14B8A6]'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      {featuredProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Highlighted projects that showcase my key skills and professional experience
              </p>
            </div>

            <div className="grid lg:grid-cols-1 gap-8">
              {featuredProjects.map((project, idx) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <Card key={idx} className="overflow-hidden bg-card/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <ImageWithFallback
                          src={getProjectImage(project.category)}
                          alt={project.title}
                          className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className={`${getStatusBadge(project.status)} backdrop-blur-sm border`}>{project.status}</Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 lg:p-8 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <CategoryIcon className="w-5 h-5 text-[#14B8A6]" />
                              <Badge variant="primary" className="text-xs">{project.category}</Badge>
                            </div>
                            <h3 className="text-foreground mb-3 text-2xl">{project.title}</h3>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{project.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{project.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{project.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Eye className="w-4 h-4 text-muted-foreground" />
                              <span className="text-muted-foreground">{project.liveUrl ? 'Live' : project.githubUrl ? 'Code' : 'N/A'}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="mb-2 text-foreground">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, tIdx) => (
                                <Badge key={tIdx} variant="secondary" className="bg-accent text-muted-foreground text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {project.metrics && project.metrics.length > 0 && (
                            <div>
                              <h4 className="mt-4 mb-2 text-foreground">Highlights</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.metrics.map((m, mIdx) => (
                                  <Badge key={mIdx} variant="secondary" className="bg-accent text-muted-foreground text-xs">
                                    {m}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-3 mt-6">
                          {project.liveUrl && (
                            <Button
                              className="flex-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] hover:from-[#0F766E] hover:to-[#7C3AED] text-white border-0"
                              onClick={() => window.open(project.liveUrl!, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" /> View Project
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button
                              variant="outline"
                              className="flex-1 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" /> Source Code
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ADDITIONAL PROJECTS */}
      {otherProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Additional Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">More projects that demonstrate my technical capabilities and professional experience</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, idx) => {
                const CategoryIcon = getCategoryIcon(project.category);
                return (
                  <Card key={idx} className="overflow-hidden bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                    {/* Image */}
                    <div className="relative">
                      <ImageWithFallback
                        src={getProjectImage(project.category)}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={`${getStatusBadge(project.status)} backdrop-blur-sm text-xs border`}>{project.status}</Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <CategoryIcon className="w-4 h-4 text-[#14B8A6]" />
                        <Badge variant="primary" className="text-xs">{project.category}</Badge>
                      </div>
                      <CardTitle className="text-foreground group-hover:text-[#14B8A6] transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-3">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          <span>{project.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{project.duration}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, tIdx) => (
                            <Badge key={tIdx} variant="secondary" className="bg-accent text-muted-foreground text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="bg-accent text-muted-foreground text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>

                    <div className="px-6 pb-6 pt-0">
                      <div className="flex gap-2 w-full">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] hover:from-[#0F766E] hover:to-[#7C3AED] text-white border-0"
                            onClick={() => window.open(project.liveUrl!, '_blank')}
                          >
                            <ExternalLink className="w-3 h-3 mr-1" /> View
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-3 h-3 mr-1" /> Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] p-8 rounded-xl text-white">
            <h2 className="text-2xl sm:text-3xl mb-4 text-white">Interested in My Work?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              These projects represent my hands-on experience in cybersecurity, IT support, and web development. I'm always excited to discuss my work and explore new opportunities for collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0" onClick={() => navigateTo('contact')}>
                <ExternalLink className="w-4 h-4 mr-2" /> Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#14B8A6]"
                onClick={() => window.open('https://www.linkedin.com/in/martin-muriithi-2198b62ab/', '_blank')}
              >
                <Globe className="w-4 h-4 mr-2" /> View LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}