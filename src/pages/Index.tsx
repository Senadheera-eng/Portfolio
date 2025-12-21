import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lahiru Senadheera | Computer Engineering Student & Full-Stack Developer</title>
        <meta 
          name="description" 
          content="Portfolio of Lahiru Senadheera - Computer Engineering student specializing in Flutter, MERN stack, and Firebase. Building innovative mobile and web applications." 
        />
        <meta name="keywords" content="Lahiru Senadheera, Software Developer, Flutter Developer, MERN Stack, Portfolio, Sri Lanka" />
        <link rel="canonical" href="https://lahirusenadheera.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
