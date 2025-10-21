import { Palette, Monitor, Megaphone, Video, Radio, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Branding & Strategy',
    },
    {
      icon: Monitor,
      title: 'Website Design',
    },
    {
      icon: Megaphone,
      title: 'Social Media Management',
    },
    {
      icon: Video,
      title: 'Media Production',
    },
    {
      icon: Radio,
      title: 'Advertising',
    },
    {
      icon: Sparkles,
      title: 'Experiential Marketing',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Title and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Service Provided
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
              eirmod tempor Lorem ipsum dolor sit
            </p>
          </div>

          {/* Right - Empty space for layout */}
          <div></div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-[hsl(var(--card-border))] card-glow-hover"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--icon-bg))] flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={28} />
                </div>

                {/* Title */}
                <h3 className="text-foreground font-semibold text-xl">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
