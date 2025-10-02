import React from 'react';
import { personalInfo, experiences, education, certifications, skillCategories, projects } from '../data';

export const DataTestComponent: React.FC = () => {
  // Filter featured projects locally
  const featuredProjects = projects.filter(project => project.featured);
  // Derive projects by category
  const projectsByCategory = projects.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  
  // Test all data imports and basic structure
  const dataTests = [
    {
      name: 'Personal Info',
      valid: personalInfo && personalInfo.name && personalInfo.email,
      count: 1,
      sample: personalInfo.name
    },
    {
      name: 'Experiences',
      valid: Array.isArray(experiences) && experiences.length > 0,
      count: experiences.length,
      sample: experiences[0]?.company
    },
    {
      name: 'Education',
      valid: education && education.current && education.completed,
      count: education.completed.length + 1, // current + completed
      sample: education.current?.institution
    },
    {
      name: 'Certifications',
      valid: Array.isArray(certifications) && certifications.length > 0,
      count: certifications.length,
      sample: certifications[0]?.name
    },
    {
      name: 'Skill Categories',
      valid: Array.isArray(skillCategories) && skillCategories.length > 0,
      count: skillCategories.length,
      sample: skillCategories[0]?.title
    },
    {
      name: 'Projects',
      valid: Array.isArray(projects) && projects.length > 0,
      count: projects.length,
      sample: projects[0]?.title
    },
    {
      name: 'Featured Projects',
      valid: Array.isArray(featuredProjects) && featuredProjects.length > 0,
      count: featuredProjects.length,
      sample: featuredProjects[0]?.title
    },
    {
  name: 'Projects by Category',
  valid: projectsByCategory && typeof projectsByCategory === 'object',
  count: Object.keys(projectsByCategory).length,
  sample: Object.keys(projectsByCategory)[0]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Data Structure Test
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataTests.map((test, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border ${
                  test.valid 
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                }`}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-4 h-4 rounded-full mr-3 ${
                    test.valid ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <h3 className="font-semibold text-foreground">{test.name}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">
                  Status: {test.valid ? 'Valid' : 'Invalid'}
                </p>
                
                <p className="text-sm text-muted-foreground mb-2">
                  Count: {test.count}
                </p>
                
                {test.sample && (
                  <p className="text-sm text-muted-foreground">
                    Sample: {test.sample}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Detailed Personal Info */}
          <div className="mt-12 p-6 bg-card rounded-lg ring-1 ring-white/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Personal Information Sample</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Name:</strong> {personalInfo.name}
              </div>
              <div>
                <strong>Legal Name:</strong> {personalInfo.legalName}
              </div>
              <div>
                <strong>Title:</strong> {personalInfo.title}
              </div>
              <div>
                <strong>Email:</strong> {personalInfo.email}
              </div>
              <div>
                <strong>Location:</strong> {personalInfo.location}
              </div>
              <div>
                <strong>Timezone:</strong> {personalInfo.timezone}
              </div>
            </div>
          </div>

          {/* Sample Experience */}
          {experiences.length > 0 && (
            <div className="mt-8 p-6 bg-card rounded-lg ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Latest Experience Sample</h2>
              <div className="text-sm space-y-2">
                <div><strong>Company:</strong> {experiences[0].company}</div>
                <div><strong>Position:</strong> {experiences[0].position}</div>
                <div><strong>Duration:</strong> {experiences[0].duration}</div>
                <div><strong>Type:</strong> {experiences[0].type}</div>
                <div><strong>Achievements:</strong> {experiences[0].achievements.length} listed</div>
                <div><strong>Technologies:</strong> {experiences[0].technologies.join(', ')}</div>
              </div>
            </div>
          )}

          {/* Sample Project */}
          {featuredProjects.length > 0 && (
            <div className="mt-8 p-6 bg-card rounded-lg ring-1 ring-white/10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Featured Project Sample</h2>
              <div className="text-sm space-y-2">
                <div><strong>Title:</strong> {featuredProjects[0].title}</div>
                <div><strong>Category:</strong> {featuredProjects[0].category}</div>
                <div><strong>Status:</strong> {featuredProjects[0].status}</div>
                <div><strong>Duration:</strong> {featuredProjects[0].duration}</div>
                <div><strong>Technologies:</strong> {featuredProjects[0].technologies.join(', ')}</div>
                {/* Outcomes not present in Project type; showing metrics length if available */}
                {featuredProjects[0].metrics && (
                  <div><strong>Metrics:</strong> {featuredProjects[0].metrics!.length} listed</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};