import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import celLogo from '@/assets/cel-logo.png';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--yellow)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Logo and Content */}
          <div className="space-y-8">
           

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Centre for</span>
                <br />
                <span className="gradient-text">Entrepreneurial</span>
                <br />
                <span className="text-foreground">Leadership</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The Centre for Entrepreneurial Leadership (CEL) is BITS Pilani's entrepreneurship cell entirely student-run. 
                Carrying forward the BITSian startup legacy, we stand to drive change across India's entrepreneurial landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('#initiatives')}
                  className="btn-hero text-lg px-8 py-4"
                >
                  Explore Initiatives
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('#about')}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel/Video Placeholder */}
          <div className="relative">
            <div className="bg-card rounded-2xl overflow-hidden border border-yellow/20 relative group">
              <div className="aspect-video bg-gradient-to-br from-yellow/10 to-transparent flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-yellow/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-yellow/30 transition-colors">
                    <Play className="w-8 h-8 text-yellow ml-1" />
                  </div>
                  <p className="text-muted-foreground">CEL Journey</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow/30 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
