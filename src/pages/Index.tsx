import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ThinkBigSection from '@/components/ThinkBigSection';
import InitiativesSection from '@/components/InitiativesSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ThinkBigSection />
        <InitiativesSection />
        <AboutSection />
        <EventsSection />
        <TeamSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
