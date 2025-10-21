import { Search, FileText, Sparkles, Rocket, BarChart3 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover & Understand',
    },
    {
      icon: FileText,
      title: 'Strategy & Planning',
    },
    {
      icon: Sparkles,
      title: 'Creative Development',
    },
    {
      icon: Rocket,
      title: 'Launch & Activation',
    },
    {
      icon: BarChart3,
      title: 'Measure & Optimize',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16">
          Our Process
        </h2>

        {/* Process Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 border-t-2 border-dashed border-border -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4 max-w-[200px]">
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-full bg-[hsl(var(--icon-bg))] border-2 border-primary flex items-center justify-center">
                  <Icon className="text-primary" size={32} />
                </div>

                {/* Title */}
                <h3 className="text-foreground font-medium text-sm md:text-base">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
