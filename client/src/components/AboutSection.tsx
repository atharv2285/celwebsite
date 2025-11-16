import { Target, Users, TrendingUp } from 'lucide-react';
import celLogo from '@/assets/cel-logo.png';

const AboutSection = () => {
  const values = [
    {
      icon: <img src={celLogo} alt="CEL Logo" className="w-8 h-8" />,
      title: "Innovation First",
      description: "We believe in the power of creative thinking and breakthrough ideas that change the world."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Building a supportive ecosystem where entrepreneurs collaborate and grow together."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Oriented",
      description: "Focused on turning ambitious visions into viable businesses with measurable impact."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Mindset",
      description: "Embracing challenges, learning from failures, and constantly evolving our approach."
    }
  ];

  return (
    <section id="about" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">About</span>{' '}
              <span className="gradient-text">CEL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-yellow mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The College Entrepreneurship League is a dynamic community of student innovators, 
              dreamers, and future business leaders who are passionate about transforming ideas into impact.
            </p>
          </div>

          {/* Main Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by students who believed that entrepreneurship education should go beyond textbooks, 
                CEL has grown into a thriving ecosystem where innovative minds converge to shape the future 
                of business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've nurtured over 50 successful startups, hosted dozens of industry-leading workshops, 
                and created a network of entrepreneurial alumni who continue to make waves in the business world.
              </p>
              <div className="bg-card border border-yellow/20 rounded-xl p-6 glow-yellow">
                <h4 className="text-xl font-bold text-yellow mb-3">Our Mission</h4>
                <p className="text-foreground">
                  To empower student entrepreneurs with the knowledge, network, and resources needed 
                  to transform innovative ideas into successful ventures that create positive change in the world.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 border border-border card-hover">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-foreground font-semibold mb-1">Years of Excellence</div>
                <div className="text-sm text-muted-foreground">Consistently driving innovation</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="text-2xl font-bold gradient-text mb-1">₹2M+</div>
                  <div className="text-sm text-foreground font-medium">Startup Funding</div>
                  <div className="text-xs text-muted-foreground">Raised by members</div>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="text-2xl font-bold gradient-text mb-1">500+</div>
                  <div className="text-sm text-foreground font-medium">Students Impacted</div>
                  <div className="text-xs text-muted-foreground">Across all programs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-xl p-8 border border-border card-hover text-center">
                  <div className="text-yellow mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;