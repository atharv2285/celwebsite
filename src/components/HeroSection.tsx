import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import celLogo from '@/assets/cel-logo.png';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/I8XqjTIJn_Q?autoplay=1&mute=1&loop=1&playlist=I8XqjTIJn_Q&controls=0&showinfo=0&rel=0&modestbranding=1&start=0"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ border: 'none' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--yellow)_0%,_transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            {/* Main Content - Centered */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Centre for</span>
                  <br />
                  <span className="gradient-text">Entrepreneurial</span>
                  <br />
                  <span className="text-foreground">Leadership</span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Carrying forward the BITSian startup legacy, CEL promotes entrepreneurship within the team, on the campus, and in the Indian startup ecosystem. 
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-lg p-4 border-2 border-yellow/60 card-hover text-center glow-yellow">
              <div className="text-3xl font-bold gradient-text mb-1">20+</div>
              <div className="text-foreground font-semibold mb-1 text-sm">Years of Impact</div>
              <div className="text-xs text-muted-foreground">Creating entrepreneurs</div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border-2 border-yellow/60 card-hover text-center glow-yellow">
              <div className="text-3xl font-bold gradient-text mb-1">200+</div>
              <div className="text-foreground font-semibold mb-1 text-sm">Founders Supported</div>
              <div className="text-xs text-muted-foreground">Across various sectors</div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border-2 border-yellow/60 card-hover text-center glow-yellow">
              <div className="text-3xl font-bold gradient-text mb-1">50+</div>
              <div className="text-foreground font-semibold mb-1 text-sm">Venture Partners</div>
              <div className="text-xs text-muted-foreground">Global network</div>
            </div>
            
            <div className="bg-card rounded-lg p-4 border-2 border-yellow/60 card-hover text-center glow-yellow">
              <div className="text-3xl font-bold gradient-text mb-1">₹100M+</div>
              <div className="text-foreground font-semibold mb-1 text-sm">Value Created</div>
              <div className="text-xs text-muted-foreground">By our alumni</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
