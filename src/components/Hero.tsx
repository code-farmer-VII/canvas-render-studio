import { ArrowRight } from 'lucide-react';
import heroMockup from '@/assets/hero-mockup.png';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Logo Badge */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-foreground"></div>
              </div>
              <span className="text-foreground font-medium">Yonile</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              How we Helped Keza to increase Online Conversions By{' '}
              <span className="text-primary">125%</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-xl">
              Through full-funnel strategy Lorem ipsum dolor sit amet, consectetur. Ut elit tellus, 
              luctus Lorem ipsum dolor sit amet Lorem
            </p>

            {/* CTA Button */}
            <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all">
              Book A Free Consultancy
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Right Content - Mockup Image */}
          <div className="relative">
            <div className="relative hero-glow rounded-2xl overflow-hidden border border-border">
              <img 
                src={heroMockup} 
                alt="Case study mockup showing increase in conversions" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
