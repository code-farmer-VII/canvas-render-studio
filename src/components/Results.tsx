import { ArrowRight } from 'lucide-react';

const Results = () => {
  const stats = [
    {
      label: '200+ companies trusted us',
    },
    {
      label: '95% client satisfaction rate',
    },
    {
      label: 'Millions of people reached through our campaigns',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Get Proven Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We Combine Strategy, Creativity, And Measurable Results To Help Your Brand Grow And Stand Out.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-foreground text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-12" />

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Let's Create Something Great Together
          </h3>

          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all">
            Contact Us
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;
