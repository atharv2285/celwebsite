import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ThinkBigSection from '@/components/ThinkBigSection';
import InitiativesSection from '@/components/InitiativesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InitiativesSection />
        <ThinkBigSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
