import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Progress } from '../components/ui/Progress';
import { useRouter } from '../components/Router';
import {
  GraduationCap, Calendar, MapPin, Award, BookOpen,
  Trophy, Star, Clock, ExternalLink, Download, CheckCircle, Lightbulb
} from 'lucide-react';

// Strong types for education entries
type BaseEducationEntry = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  status: 'In Progress' | 'Completed';
  description: string;
  achievements: string[];
  current: boolean;
};

type HigherEdEntry = BaseEducationEntry & {
  specialization?: string;
  gpa?: string;
  coursework: string[];
  grade?: never;
  subjects?: never;
};

type SecondaryEdEntry = BaseEducationEntry & {
  grade: string;
  subjects: string[];
  coursework?: never;
  gpa?: never;
  specialization?: never;
};

type EducationEntry = HigherEdEntry | SecondaryEdEntry;

export function EducationPage() {
  const { navigateTo } = useRouter();

  // Data arrays and objects
  const education: EducationEntry[] = [
    {
      degree: 'Bachelor of Business Administration',
      specialization: 'Artificial Intelligence Specialization',
      institution: 'Nexford University',
      location: 'Online (International)',
      duration: 'January 2024 - Present',
      gpa: 'In Progress',
      status: 'In Progress',
      description:
        'Currently pursuing a BBA with specialization in Artificial Intelligence, focusing on the intersection of business strategy and AI technology. This program combines business fundamentals with cutting-edge AI applications.',
      coursework: [
        'AI Applications in Business',
        'Data Analytics and Business Intelligence',
        'Strategic Management and Technology',
        'Business Ethics and AI Governance',
        'Project Management',
        'Financial Analysis and Planning',
        'Organizational Behavior',
        'Digital Transformation Strategies',
      ],
      achievements: [
        'Maintaining strong academic performance',
        'Active participation in international online discussions',
        'Practical application of AI concepts in business scenarios',
        'Developed business-technology integration skills',
      ],
      current: true,
    },
    {
      degree: 'Diploma in Business Information Technology',
      specialization: 'Business IT Systems',
      institution: 'Jomo Kenyatta University of Agriculture and Technology (JKUAT)',
      location: 'Nairobi, Kenya',
      duration: 'August 2016 - November 2019',
      status: 'Completed',
      description:
        'Comprehensive diploma program combining business principles with information technology, providing strong foundation in both business operations and technical systems management.',
      coursework: [
        'Systems Analysis and Design',
        'Database Management Systems',
        'Business Information Systems',
        'Computer Networks and Security',
        'Web Development and Design',
        'Project Management',
        'Business Communication',
        'Accounting and Finance',
      ],
      achievements: [
        'Successfully completed all core modules',
        'Developed practical skills in system administration',
        'Strong foundation in business-IT integration',
        'Excellent performance in networking and security modules',
      ],
      current: false,
    },
    {
      degree: 'Certificate in Information Technology',
      institution: 'Kenya Methodist University',
      location: 'Nairobi, Kenya',
      duration: 'January 2016 - July 2016',
      grade: 'Credit',
      status: 'Completed',
      description:
        'Foundational certificate program in information technology covering basic computer skills, networking fundamentals, and IT support principles.',
      subjects: [
        'Computer Applications',
        'Basic Networking',
        'Hardware and Software Troubleshooting',
        'IT Support Fundamentals',
        'Operating Systems',
        'Database Basics',
      ],
      achievements: [
        'Strong performance in all modules',
        'Gained practical IT support skills',
        'Foundation for future IT career development',
      ],
      current: false,
    },
    {
      degree: 'Kenya Certificate of Secondary Education (KCSE)',
      institution: 'Archbishop Ndingi Boys School',
      location: 'Kenya',
      duration: 'January 2011 - November 2015',
      grade: 'C+',
      status: 'Completed',
      description:
        'Completed secondary education with good performance in mathematics, sciences, and languages that supported future technology studies.',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Kiswahili',
        'Geography',
        'History',
        'Christian Religious Education',
      ],
      achievements: [
        'Good overall academic performance',
        'Developed analytical and problem-solving skills',
      ],
      current: false,
    },
  ];

  const academicProgress = {
    totalCredits: 120,
    completedCredits: 54,
    currentSemester: '3rd Year',
    expectedGraduation: 'August 2026',
    gpa: '3.94',
  };

  const courses = [
    {
      title: 'CC Certified in Cybersecurity (CC)',
      platform: 'ISC2',
      duration: '3 months',
      completed: 'April 2025',
      credentialId: '24f940cc-0947-4f38-ac94-64de6020947d',
      expires: 'April 2028',
      description:
        'Industry-recognized cybersecurity certification covering security principles, network security, incident response, and access controls.',
      skills: ['Access Control Management', 'Security Principles'],
      certificate: true,
    },
    {
      title: 'Vulnerability Management (VM) - Foundation',
      platform: 'Qualys',
      duration: 'Self-paced',
      completed: 'July 2025',
      credentialId: 'QA-COURSE-SP-FDN-VM',
      description:
        'Foundation course covering vulnerability management, security compliance awareness, and network risk identification.',
      skills: [
        'Vulnerability Management',
        'Security Compliance Awareness',
        'Network Risk Identification',
        'Cybersecurity Fundamentals',
      ],
      certificate: true,
    },
    {
      title: 'Qualys Sensors Foundation',
      platform: 'Qualys',
      duration: 'Self-paced',
      completed: 'July 2025',
      credentialId: 'QA-COURSE-SP-FDN-QSF',
      description:
        'Foundation course on Qualys Sensors and Scanners. Comprehensive overview of the various types of sensors and scanners available.',
      skills: ['Vulnerability Scanning and Sensor Deployment', 'Security Scanning Tools'],
      certificate: true,
    },
    {
      title: 'Qualys Enterprise TruRisk™ Platform',
      platform: 'Qualys',
      duration: 'Self-paced',
      completed: 'July 2025',
      credentialId: 'QA-COURSE-SP-FDN-ETP',
      description:
        'Course designed to get started with the Qualys Enterprise TruRisk™ Platform. Provides foundational understanding of how the platform helps organizations measure, communicate, and eliminate cyber risk.',
      skills: [
        'Security Tools & Platforms (Qualys)',
        'Cyber Risk Management',
        'Risk-Based Security',
        'Cybersecurity Fundamentals',
      ],
      certificate: true,
    },
    {
      title: 'Introduction to Cybersecurity',
      platform: 'Cisco Networking Academy',
      duration: 'Self-paced',
      completed: 'July 2025',
      credentialId: 'dab7bb63-665d-410e-94d7-e9d973ecbe35',
      description:
        'Comprehensive introduction to cybersecurity fundamentals, network vulnerabilities, and cyber best practices.',
      skills: ['Network Vulnerabilities', 'Threat Detection', 'Cyber Best Practices', 'Privacy and Data Confidentiality'],
      certificate: true,
    },
    {
      title: 'Introduction to CIP',
      platform: 'OPSWAT Academy',
      duration: 'Self-paced',
      completed: 'July 2025',
      credentialId: 'PfOHUMFrwA',
      expires: 'June 2026',
      description: 'Certification on Introduction to Critical Infrastructure Protection (CIP).',
      skills: ['Critical Infrastructure Protection', 'Cybersecurity Fundamentals'],
      certificate: true,
    },
    {
      title: 'Prompt Engineering: How to Talk to the AIs',
      platform: 'LinkedIn Learning',
      duration: 'Self-paced',
      completed: 'July 2025',
      description:
        'Advanced course on prompt engineering techniques for effective AI communication and optimization.',
      skills: ['Prompt Engineering', 'Large Language Models (LLM)', 'Generative AI'],
      certificate: true,
    },
    {
      title: 'Introduction to Prompt Engineering for Generative AI',
      platform: 'LinkedIn Learning',
      duration: 'Self-paced',
      completed: 'July 2025',
      description:
        'Foundational course on prompt engineering principles for generative artificial intelligence systems.',
      skills: ['AI Prompting'],
      certificate: true,
    },
    {
      title: 'Amplify Your Critical Thinking with Generative AI',
      platform: 'LinkedIn Learning',
      duration: 'Self-paced',
      completed: 'July 2025',
      description:
        'Course focused on enhancing critical thinking skills through the strategic use of generative AI tools.',
      skills: ['Critical Thinking', 'Artificial Intelligence for Business'],
      certificate: true,
    },
  ];

  const academicProjects = [
    {
      title: 'Data Farm Entry System',
      course: 'Current Project',
      duration: 'Ongoing',
      description:
        'Currently working on building a data farm entry system as part of my academic and professional development.',
      technologies: ['To be determined'],
      achievements: ['Project in development'],
      status: 'In Progress',
    },
  ];

  const degreeCompletion = Math.round((academicProgress.completedCredits / academicProgress.totalCredits) * 100);

  const handleViewTranscript = () => {
    const link = document.createElement('a');
    link.href = '/Murray-Lichoro-CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent rounded-full">
            <GraduationCap className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm text-muted-foreground">Academic Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">Education & Learning</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            My academic journey in computer science and cybersecurity, complemented by continuous learning through courses, certifications, and hands-on projects that keep me at the forefront of technology.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0" onClick={handleViewTranscript}>
              <Download className="w-4 h-4 mr-2" /> View Academic Transcript
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
              onClick={() => navigateTo('projects')}
            >
              <Lightbulb className="w-4 h-4 mr-2" /> Explore My Projects
            </Button>
          </div>
        </div>
      </section>

      {/* ACADEMIC PROGRESS OVERVIEW */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 gap-8">
            {/* Left: Academic Excellence */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl text-foreground mb-6">Academic Excellence</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My academic journey has been driven by a passion for understanding how technology can be used to solve real-world problems while maintaining the highest standards of security and reliability. Through my computer science degree with a cybersecurity specialization, I have developed a strong foundation in both theoretical concepts and practical applications.
                </p>
                <p>
                  Beyond formal education, I am committed to lifelong learning, constantly updating my skills through professional courses, certifications, and hands-on projects. This approach has allowed me to stay current with rapidly evolving technologies and industry best practices.
                </p>
              </div>
            </div>

            {/* Right: Progress Cards */}
            <div className="space-y-6 mt-8 lg:mt-0">
              {/* Current Progress */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="text-foreground mb-4">Current Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Degree Completion</span>
                      <span className="text-sm">{degreeCompletion}%</span>
                    </div>
                    <Progress value={(academicProgress.completedCredits / academicProgress.totalCredits) * 100} className="h-2" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Semester</span>
                      <span className="text-foreground">{academicProgress.currentSemester}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Graduation</span>
                      <span className="text-foreground">{academicProgress.expectedGraduation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current GPA</span>
                      <span className="text-foreground">{academicProgress.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Achievements */}
              <div className="bg-background p-6 rounded-xl border border-border">
                <h3 className="text-foreground mb-4">Academic Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Dean's List Student</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#14B8A6]" />
                    <span className="text-sm text-muted-foreground">Top 10% in Specialization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#8B5CF6]" />
                    <span className="text-sm text-muted-foreground">Published Researcher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMAL EDUCATION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4 sm:text-4xl">Formal Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">My academic foundation in computer science and cybersecurity</p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-background border border-border hover:border-[#14B8A6] transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        {edu.degree}
                        {edu.current && (
                          <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">Current</Badge>
                        )}
                      </CardTitle>
                      {edu.specialization && (
                        <p className="text-[#14B8A6] mt-1">{edu.specialization}</p>
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-foreground/80">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-2 bg-transparent border border-border text-muted-foreground">{edu.status}</Badge>
                      <div className="text-[#14B8A6]">{'gpa' in edu && edu.gpa ? edu.gpa : ('grade' in edu ? edu.grade : '')}</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-foreground mb-3">{'coursework' in edu ? 'Key Coursework' : 'Subjects'}</h4>
                      <ul className="space-y-2">
                        {(('coursework' in edu ? edu.coursework : edu.subjects) as string[]).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <BookOpen className="w-4 h-4 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground mb-3">Achievements</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement: string, achIndex: number) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Trophy className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTINUOUS LEARNING */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4 sm:text-4xl">Continuous Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Professional courses and certifications that complement my formal education</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-background border border-border hover:border-[#14B8A6] transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-foreground">{course.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{course.platform}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>
                    {course.certificate && (
                      <Badge className="bg-[#14B8A6]/20 text-[#14B8A6]">
                        <Award className="w-3 h-3 mr-1" />
                        Certified
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill: string, skillIndex: number) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-accent text-muted-foreground text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Completed: {course.completed}</span>
                      <Button variant="ghost" size="sm" className="h-6 px-2" aria-label="Open credential">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                    {course.credentialId && (
                      <div className="text-xs text-muted-foreground">
                        <span>Credential ID:</span> {course.credentialId}
                      </div>
                    )}
                    {course.expires && (
                      <div className="text-xs text-muted-foreground">
                        <span>Expires:</span> {course.expires}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ACADEMIC PROJECTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4 sm:text-4xl">Academic Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Significant projects completed as part of my academic curriculum</p>
          </div>

          <div className="grid lg:grid-cols-1 gap-6">
            {academicProjects.map((project, index) => (
              <Card key={index} className="bg-background border border-border hover:border-[#14B8A6] transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-foreground">{project.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          <span>{project.course}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>{project.status}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div>
                    <h4 className="text-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="secondary" className="bg-accent text-muted-foreground text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-foreground mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement: string, achIndex: number) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-[#14B8A6] mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] p-8 rounded-xl text-white">
            <h2 className="text-2xl sm:text-3xl mb-4 text-white">Passionate About Learning & Growing</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              My educational journey reflects my commitment to excellence and continuous improvement. I'm always eager to learn new technologies and apply academic knowledge to solve real-world challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0" onClick={handleViewTranscript}>
                <Download className="w-4 h-4 mr-2" /> View Academic Transcript
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#14B8A6]"
                onClick={() => navigateTo('projects')}
              >
                <Lightbulb className="w-4 h-4 mr-2" /> Explore My Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
