const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Java', 'JavaScript', 'Dart', 'Python'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Flutter', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Firebase'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vite'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-2">02. Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Tech Stack & Tools
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-gradient-card border border-border card-hover"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Visual */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-card border border-border">
            <h3 className="font-semibold text-foreground mb-6 text-center">
              Currently Focusing On
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Flutter Development', 'MERN Stack', 'Machine Learning', 'UI/UX Design', 'Mobile Apps'].map(
                (focus) => (
                  <div
                    key={focus}
                    className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium"
                  >
                    {focus}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
