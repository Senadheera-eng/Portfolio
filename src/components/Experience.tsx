import { Award, Users, Crown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/animated-section';

const experiences = [
  {
    icon: Users,
    title: 'Volunteer',
    organization: 'Techno 2023 & 2024',
    description: 'IESL Student Chapter',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-400',
  },
  {
    icon: Award,
    title: 'Financial OC Crew Member',
    organization: 'Root Of Change',
    description: 'Community initiative',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-400',
  },
  {
    icon: Crown,
    title: 'Chess Team Member',
    organization: 'Faculty Chess Team',
    description: 'All-Island Chess Player',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-400',
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-accent/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <motion.p 
              className="font-mono text-primary mb-2 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-8 h-px bg-primary" />
              04. Beyond Code
              <span className="w-8 h-px bg-primary" />
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Activities & Volunteering
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Leadership and community involvement beyond technical work
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center p-8 rounded-2xl bg-gradient-card border border-border relative overflow-hidden group h-full"
                    whileHover={{ y: -10, borderColor: 'hsl(var(--primary) / 0.4)' }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Gradient Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex p-5 rounded-2xl ${exp.bgColor} ${exp.textColor} mb-6 relative`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <IconComponent size={36} />
                      <motion.div
                        className="absolute -top-1 -right-1"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      >
                        <Sparkles className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.div>

                    <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-primary text-sm mb-2 font-medium">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Experience;
