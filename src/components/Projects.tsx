import {
  ExternalLink,
  Github,
  Leaf,
  Users,
  Car,
  ArrowUpRight,
  FileSearch,
  MessageSquare,
  Bomb,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ui/animated-section";

const projects = [
  {
    title: "Grow Mate",
    subtitle: "Smart Coconut Plant Disease Detection App",
    description:
      "A mobile app that detects diseases of coconut plants and provides care tips. Focused heavily on UI design to create an intuitive user experience.",
    techStack: ["Flutter", "Dart", "Firebase", "YOLO ML Model"],
    github: "https://github.com/Senadheera-eng/Growmate.git",
    icon: Leaf,
    gradient: "from-green-500/20 to-emerald-600/20",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10",
    accentColor: "green",
  },
  {
    title: "Civic Link",
    subtitle: "Community Issue Reporting Application",
    description:
      "A mobile app enabling citizens to report community problems to relevant authorities. Responsible for both UI design and backend development.",
    techStack: ["Flutter", "Dart", "Firebase", "Google Cloud"],
    github: "https://github.com/Senadheera-eng/civic_link.git",
    icon: Users,
    gradient: "from-blue-500/20 to-cyan-600/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    accentColor: "blue",
  },
  {
    title: "Road Safe AI",
    subtitle: "Smart Road Safety Monitoring System",
    description:
      "A hardware project that detects driver drowsiness and helps keep them awake. Combines embedded systems with machine learning for real-time safety monitoring.",
    techStack: ["Flutter", "Dart", "ESP32 CAM", "Machine Learning"],
    github: "https://github.com/Senadheera-eng/roadsafe_ai.git",
    icon: Car,
    gradient: "from-orange-500/20 to-red-600/20",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    accentColor: "orange",
  },
  {
    title: "MineSweeper Game",
    subtitle: "Classic Puzzle Game",
    description:
      "A classic MineSweeper game implementation with intuitive controls, multiple difficulty levels, and a clean user interface.",
    techStack: ["Java", "Swing", "Game Dev"],
    github: "https://github.com/Senadheera-eng/MineSweeper-Game",
    icon: Bomb,
    gradient: "from-red-500/20 to-rose-600/20",
    iconColor: "text-red-400",
    iconBg: "bg-red-500/10",
    accentColor: "red",
  },
  {
    title: "Resume Analyzer",
    subtitle: "AI-Powered Resume Analysis Tool",
    description:
      "An intelligent application that analyzes resumes using AI to provide insights, suggestions, and scoring to help job seekers improve their resumes.",
    techStack: ["JavaScript", "React", "AI API", "Node.js"],
    github: "https://github.com/Senadheera-eng/Resume-Analyzer",
    icon: FileSearch,
    gradient: "from-purple-500/20 to-violet-600/20",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    accentColor: "purple",
  },
  {
    title: "Supermarket Chatbot",
    subtitle: "AI Customer Service Assistant",
    description:
      "An intelligent chatbot designed for supermarket customer service, helping users find products, check availability, and get recommendations.",
    techStack: ["JavaScript", "NLP"],
    github: "https://github.com/Senadheera-eng/Supermarket_Chatbot",
    icon: MessageSquare,
    gradient: "from-cyan-500/20 to-teal-600/20",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    accentColor: "cyan",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <motion.p
              className="font-mono text-primary mb-2 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-8 h-px bg-primary" />
              03. Projects
              <span className="w-8 h-px bg-primary" />
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              What I've Built
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills in mobile and web
              development
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <StaggerItem key={project.title}>
                  <motion.div
                    className="group relative rounded-2xl bg-gradient-card border border-border overflow-hidden h-full"
                    whileHover={{
                      y: -12,
                      borderColor: "hsl(var(--primary) / 0.4)",
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Top Accent Line */}
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="relative p-6 h-full flex flex-col">
                      {/* Icon & Links Row */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          className={`p-4 rounded-2xl ${project.iconBg} ${project.iconColor} group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent size={32} />
                        </motion.div>
                        <div className="flex gap-2">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                            aria-label="View GitHub Repository"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={22} />
                          </motion.a>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                            aria-label="View Project"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={22} />
                          </motion.a>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                      <p className="text-sm text-primary/80 mb-3 font-medium">
                        {project.subtitle}
                      </p>
                      <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono text-muted-foreground bg-secondary/80 rounded-full border border-border/50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{
                              scale: 1.05,
                              color: "hsl(var(--primary))",
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* View More Button */}
          <AnimatedSection delay={0.3} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="outline" size="lg" asChild className="group">
                <a
                  href="https://github.com/Senadheera-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github
                    className="group-hover:rotate-12 transition-transform duration-300"
                    size={20}
                  />
                  View More on GitHub
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;
