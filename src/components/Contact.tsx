import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <p className="font-mono text-primary mb-2">05. Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>

          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            I'm currently looking for internship opportunities in software development. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          {/* Email Button */}
          <Button variant="hero" size="xl" className="mb-12" asChild>
            <a href="mailto:lahiru.senadheera2002@gmail.com">
              <Send className="mr-2" size={20} />
              Say Hello
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:lahiru.senadheera2002@gmail.com"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="p-4 rounded-2xl border border-border bg-secondary/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <Mail size={24} />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>

            <a
              href="https://github.com/Senadheera-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="p-4 rounded-2xl border border-border bg-secondary/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <Github size={24} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/lahiru-senadheera-609389313"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <div className="p-4 rounded-2xl border border-border bg-secondary/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                <Linkedin size={24} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
