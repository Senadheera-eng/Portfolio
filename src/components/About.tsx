import { GraduationCap, MapPin, Target } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  AnimatedCard,
  StaggerContainer,
  StaggerItem,
} from "./ui/animated-section";
import profileCasual from "@/assets/profile-casual.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <motion.p
              className="font-mono text-primary mb-2 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-8 h-px bg-primary" />
              01. About Me
              <span className="w-8 h-px bg-primary" />
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Who I Am
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Profile Image */}
            <motion.div
              className="lg:col-span-2 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative group">
                <motion.div
                  className="w-72 h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-elevated relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profileCasual}
                    alt="Lahiru Senadheera"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/30 -z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-full -z-10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a third-year Computer Engineering undergraduate at the
                <span className="text-foreground font-semibold">
                  {" "}
                  University of Sri Jayewardenepura
                </span>
                , Sri Lanka. I'm passionate about building software that solves
                real-world problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Have skills in{" "}
                <motion.span
                  className="text-primary font-medium inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  Flutter
                </motion.span>
                ,{" "}
                <motion.span
                  className="text-primary font-medium inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  MERN stack
                </motion.span>
                , and{" "}
                <motion.span
                  className="text-primary font-medium inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  Firebase
                </motion.span>
                , I've developed applications ranging from AI-powered disease
                detection to community issue reporting systems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a fast learner who thrives in collaborative environments and
                is eager to contribute to innovative development teams. When I'm
                not coding, you might find me playing chess – I'm a member of my
                faculty's chess team and an
                <span className="text-accent font-medium">
                  {" "}
                  all-island chess player
                </span>
                .
              </p>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "Problem Solver",
                  "Team Player",
                  "Quick Learner",
                  "Chess Enthusiast",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Info Cards */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                lines: [
                  "BSc. Computer Engineering",
                  "University of Sri Jayewardenepura",
                ],
                highlight: "GPA: 3.7",
              },
              {
                icon: MapPin,
                title: "Location",
                lines: ["Sri Lanka", "Kurunegala"],
                highlight: null,
              },
              {
                icon: Target,
                title: "Goal",
                lines: [
                  "Seeking an internship in software development to apply my skills and grow with a professional team.",
                ],
                highlight: null,
              },
            ].map((card, index) => (
              <StaggerItem key={card.title}>
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-card border border-border h-full group"
                  whileHover={{
                    y: -8,
                    borderColor: "hsl(var(--primary) / 0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <card.icon size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-lg">
                        {card.title}
                      </h3>
                      {card.lines.map((line, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {line}
                        </p>
                      ))}
                      {card.highlight && (
                        <p className="text-primary font-mono text-sm mt-2 font-semibold">
                          {card.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
