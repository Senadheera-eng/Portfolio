import { GraduationCap, MapPin, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">01. About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Who I Am
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
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

            {/* Info Cards */}
            <div className="space-y-4">
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
      </div>
    </section>
  );
};

export default About;
