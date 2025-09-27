const ThinkBigSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Think Big Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="gradient-text">Think</span>{' '}
                  <span className="text-foreground">Big</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-yellow"></div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At CEL, we believe that the biggest ideas start with the courage to think beyond conventional boundaries. 
                  We foster an environment where students dare to dream big and transform their visions into reality.
                </p>
                <p>
                  From ideation to execution, from prototype to market, we provide the ecosystem that nurtures 
                  entrepreneurial thinking and supports ventures that can create meaningful impact.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-yellow/20">
                <h3 className="text-xl font-bold text-yellow mb-3">Our Philosophy</h3>
                <p className="text-foreground">
                  "Every great company started with someone who dared to think differently. 
                  We're here to help you find that courage and provide the tools to make it happen."
                </p>
              </div>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-foreground font-semibold mb-1">Years of Impact</div>
                <div className="text-sm text-muted-foreground">Creating entrepreneurs</div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="text-3xl font-bold gradient-text mb-2">200+</div>
                <div className="text-foreground font-semibold mb-1">Founders Supported</div>
                <div className="text-sm text-muted-foreground">Across various sectors</div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-foreground font-semibold mb-1">Venture Partners</div>
                <div className="text-sm text-muted-foreground">Global network</div>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="text-3xl font-bold gradient-text mb-2">₹100M+</div>
                <div className="text-foreground font-semibold mb-1">Value Created</div>
                <div className="text-sm text-muted-foreground">By our alumni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThinkBigSection;