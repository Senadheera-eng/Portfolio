import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a href="#" className="text-xl font-bold flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">L</div>
            <span className="hidden sm:block"><span className="text-gradient">Lahiru</span><span className="text-muted-foreground font-normal">.dev</span></span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a key={link.name} href={link.href} className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group" whileHover={{ y: -2 }}>
                <span className="font-mono text-primary text-xs mr-1">0{index + 1}.</span>{link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/Senadheera-eng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={16} />GitHub
              </a>
            </Button>
          </div>

          <button className="md:hidden p-2 text-muted-foreground hover:text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            <div className="container mx-auto px-6 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <a key={link.name} href={link.href} className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="font-mono text-primary text-xs mr-2">0{index + 1}.</span>{link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;