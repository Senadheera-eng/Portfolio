import { Mail, Github, Linkedin, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { AnimatedSection } from './ui/animated-section';

const Contact = () => {
  const socialLinks = [
    {
      href: 'mailto:lahiru.senadheera2002@gmail.com',
      icon: Mail,
      label: 'Email',
      username: 'lahiru.senadheera2002',
    },
    {
      href: 'https://github.com/Senadheera-eng',
      icon: Github,
      label: 'GitHub',
      username: '@Senadheera-eng',
    },
    {
      href: 'https://www.linkedin.com/in/lahiru-senadheera-609389313',
      icon: Linkedin,
      label: 'LinkedIn',
      username: 'Lahiru Senadheera',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <AnimatedSection>
            <motion.p 
              className="font-mono text-primary mb-2 inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-8 h-px bg-primary" />
              05. Contact
              <span className="w-8 h-px bg-primary" />
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h2>

            <p className="text-muted-foreground mb-4 max-w-lg mx-auto text-lg leading-relaxed">
              I'm currently looking for <span className="text-primary font-medium">internship opportunities</span> in software development. 
            </p>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
            </p>
          </AnimatedSection>

          {/* Email Button */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mb-16"
            >
              <Button variant="hero" size="xl" asChild className="group relative overflow-hidden">
                <a href="mailto:lahiru.senadheera2002@gmail.com" className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Send size={20} />
                  </motion.div>
                  Say Hello
                  <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
            </motion.div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-border bg-secondary/30 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div 
                    className="p-3 rounded-xl border border-border bg-secondary/50 text-muted-foreground group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon size={24} />
                  </motion.div>
                  <div className="text-left">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                      {social.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                    <span className="text-xs text-muted-foreground">{social.username}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          {/* Decorative Element */}
          <motion.div 
            className="mt-20 flex items-center justify-center gap-2 text-muted-foreground/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="w-12 h-px bg-border" />
            <Sparkles className="w-4 h-4" />
            <span className="w-12 h-px bg-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
