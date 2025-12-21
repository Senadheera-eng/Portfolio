import { ExternalLink, Github, Leaf, Users, Car } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Grow Mate',
    subtitle: 'Smart Coconut Plant Disease Detection App',
    description:
      'A mobile app that detects diseases of coconut plants and provides care tips. Focused heavily on UI design to create an intuitive user experience.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'YOLO ML Model'],
    github: 'https://github.com/Senadheera-eng/Growmate.git',
    icon: Leaf,
    gradient: 'from-green-500/20 to-emerald-600/20',
    iconColor: 'text-green-400',
  },
  {
    title: 'Civic Link',
    subtitle: 'Community Issue Reporting Application',
    description:
      'A mobile app enabling citizens to report community problems to relevant authorities. Responsible for both UI design and backend development.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud'],
    github: 'https://github.com/Senadheera-eng/civic_link.git',
    icon: Users,
    gradient: 'from-blue-500/20 to-cyan-600/20',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Road Safe AI',
    subtitle: 'Smart Road Safety Monitoring System',
    description:
      'A hardware project that detects driver drowsiness and helps keep them awake. Combines embedded systems with machine learning for real-time safety monitoring.',
    techStack: ['Flutter', 'Dart', 'ESP32 CAM', 'Machine Learning'],
    github: 'https://github.com/Senadheera-eng/roadsafe_ai.git',
    icon: Car,
    gradient: 'from-orange-500/20 to-red-600/20',
    iconColor: 'text-orange-400',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">03. Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What I've Built
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="group relative rounded-2xl bg-gradient-card border border-border overflow-hidden card-hover"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative p-6 h-full flex flex-col">
                    {/* Icon & Links Row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-secondary ${project.iconColor}`}>
                        <IconComponent size={28} />
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          aria-label="View GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          aria-label="View Project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/80 mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground text-sm flex-grow mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Senadheera-eng"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={20} />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
