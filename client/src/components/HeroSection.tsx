const HeroSection = () => {
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
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="gradient-card-1 rounded-md p-6 text-center" data-testid="card-stat-years">
              <div className="text-3xl font-bold gradient-text mb-2" data-testid="text-stat-years-value">20+</div>
              <div className="card-subtitle mb-1 text-sm" data-testid="text-stat-years-title">Years of Impact</div>
              <div className="text-xs card-description" data-testid="text-stat-years-desc">Creating entrepreneurs</div>
            </div>
            
            <div className="gradient-card-2 rounded-md p-6 text-center" data-testid="card-stat-founders">
              <div className="text-3xl font-bold gradient-text mb-2" data-testid="text-stat-founders-value">200+</div>
              <div className="card-subtitle mb-1 text-sm" data-testid="text-stat-founders-title">Founders Supported</div>
              <div className="text-xs card-description" data-testid="text-stat-founders-desc">Across various sectors</div>
            </div>
            
            <div className="gradient-card-3 rounded-md p-6 text-center" data-testid="card-stat-partners">
              <div className="text-3xl font-bold gradient-text mb-2" data-testid="text-stat-partners-value">50+</div>
              <div className="card-subtitle mb-1 text-sm" data-testid="text-stat-partners-title">Venture Partners</div>
              <div className="text-xs card-description" data-testid="text-stat-partners-desc">Global network</div>
            </div>
            
            <div className="gradient-card-4 rounded-md p-6 text-center" data-testid="card-stat-value">
              <div className="text-3xl font-bold gradient-text mb-2" data-testid="text-stat-value-amount">₹100M+</div>
              <div className="card-subtitle mb-1 text-sm" data-testid="text-stat-value-title">Value Created</div>
              <div className="text-xs card-description" data-testid="text-stat-value-desc">By our alumni</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
