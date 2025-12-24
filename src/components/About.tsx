import { GraduationCap, MapPin, Target } from 'lucide-react';
import profileCasual from '@/assets/profile-casual.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">01. About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Who I Am
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-elegant">
                  <img 
                    src={profileCasual} 
                    alt="Lahiru Senadheera" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/10 -z-10" />
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a third-year Computer Engineering undergraduate at the 
                <span className="text-foreground font-medium"> University of Sri Jayewardenepura</span>, 
                Sri Lanka. I'm passionate about building software that solves real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                With expertise in <span className="text-primary">Flutter</span>, 
                <span className="text-primary"> MERN stack</span>, and 
                <span className="text-primary"> Firebase</span>, I've developed applications 
                ranging from AI-powered disease detection to community issue reporting systems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I'm a fast learner who thrives in collaborative environments and is eager to 
                contribute to innovative development teams. When I'm not coding, you might 
                find me playing chess – I'm a member of my faculty's chess team and an 
                all-island chess player.
              </p>
            </div>
          </div>

          {/* Info Cards - Full Width Below */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div className="p-6 rounded-xl bg-gradient-card border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground text-sm">BSc. Computer Engineering</p>
                  <p className="text-muted-foreground text-sm">University of Sri Jayewardenepura</p>
                  <p className="text-primary font-mono text-sm mt-1">GPA: 3.7</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">Sri Lanka</p>
                  <p className="text-muted-foreground text-sm">Available for Remote Work</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border border-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Goal</h3>
                  <p className="text-muted-foreground text-sm">
                    Seeking an internship in software development to apply my skills 
                    and grow with a professional team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
