import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./ui/animated-section";
import { Code2, Palette, Server, Database, Wrench, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Java", "JavaScript", "Dart", "Python"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: ["React", "Flutter", "HTML", "CSS", "Bootstrap"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Firebase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
    color: "from-red-500 to-rose-500",
  },
];

const focusAreas = [
  "Full-Stack web Development",
  "MERN Stack",
  "Machine Learning",
  "UI/UX Design",
  "Mobile Apps",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <motion.p
              className="font-mono text-primary mb-2 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-8 h-px bg-primary" />
              02. Skills
              <span className="w-8 h-px bg-primary" />
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Tech Stack & Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit built through hands-on experience with real
              projects
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <StaggerItem key={category.title}>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-card border border-border h-full group relative overflow-hidden"
                  whileHover={{
                    y: -8,
                    borderColor: "hsl(var(--primary) / 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                      <motion.div
                        className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon size={20} />
                      </motion.div>
                      <h3 className="font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-full bg-secondary text-muted-foreground border border-border hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * skillIndex }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Currently Focusing On */}
          <AnimatedSection delay={0.3} className="mt-16">
            <motion.div
              className="p-8 rounded-3xl bg-gradient-card border border-border relative overflow-hidden"
              whileHover={{ borderColor: "hsl(var(--primary) / 0.3)" }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground text-lg">
                    Currently Focusing On
                  </h3>
                  <Zap className="w-5 h-5 text-primary" />
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  {focusAreas.map((focus, index) => (
                    <motion.div
                      key={focus}
                      className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-lg shadow-primary/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      {focus}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
