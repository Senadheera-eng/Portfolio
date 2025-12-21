import { Award, Users, Crown } from 'lucide-react';

const experiences = [
  {
    icon: Users,
    title: 'Volunteer',
    organization: 'Techno 2023 & 2024',
    description: 'IESL Student Chapter',
  },
  {
    icon: Award,
    title: 'Financial OC Crew Member',
    organization: 'Root Of Change',
    description: 'Community initiative',
  },
  {
    icon: Crown,
    title: 'Chess Team Member',
    organization: 'Faculty Chess Team',
    description: 'All-Island Chess Player',
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">04. Beyond Code</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Activities & Volunteering
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-card border border-border card-hover"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-primary text-sm mb-1">{exp.organization}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
