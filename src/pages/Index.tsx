import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Results from '@/components/Results';
import Milestones from '@/components/Milestones';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <Results />
        <Milestones />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
