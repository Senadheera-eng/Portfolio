import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                href: "https://github.com/Senadheera-eng",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/lahiru-senadheera-609389313",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:lahiru.senadheera2002@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <div className="text-center space-y-3">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Designed & Built by
              <span className="text-foreground font-medium">
                Lahiru Senadheera
              </span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </p>
            <p className="text-muted-foreground/60 text-xs font-mono">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
