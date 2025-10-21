import { Quote } from 'lucide-react';

const Milestones = () => {
  const milestones = [
    {
      number: '200+',
      label: 'Company trusted us',
    },
    {
      number: '95%',
      label: 'client satisfaction rate',
    },
    {
      icon: true,
      label: 'Millions of people reached through our campaigns',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Milestone
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-[hsl(var(--card-border))] card-glow-hover"
            >
              <div className="text-center space-y-4">
                {milestone.icon ? (
                  <Quote className="text-primary mx-auto" size={48} />
                ) : (
                  <h3 className="text-5xl md:text-6xl font-bold text-foreground">
                    {milestone.number}
                  </h3>
                )}
                <p className="text-muted-foreground">
                  {milestone.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
