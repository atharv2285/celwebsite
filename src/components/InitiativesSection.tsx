import { Target, Users, TrendingUp, Rocket, Calendar, Building2 } from 'lucide-react';

const InitiativesSection = () => {
  const initiatives = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Conquest",
      description: "Asia's largest student-run Startup Accelerator — we work closely with 15-20 early-stage startups handpicked from over 3000+ applications across India every year, helping accelerate their growth journeys.",
      color: "from-yellow/10 to-orange-500/10"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "E-Week",
      description: "CEL's flagship on-campus initiative, organised by the newly recruited batch every year. E-Week brings together the entire campus for a week of building and creativity.",
      color: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "RED",
      description: "From bringing Digital Payments to Pilani to empowering local women entrepreneurs, RED is our attempt to empower the local Pilani community by making them self-reliant.",
      color: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "SiS",
      description: "Drawing onto CEL's startup connections, SiS connects 5K+ BITSians across campuses with disruptive early-stage startups through internships.",
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Venture Arm",
      description: "A student-run venture arm aiming to back India's most promising early-stage startups.",
      color: "from-purple-500/10 to-indigo-500/10"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Venture Studio",
      description: "Our innovation lab where we build and launch new ventures from the ground up, combining entrepreneurial expertise with cutting-edge technology.",
      color: "from-teal-500/10 to-cyan-500/10"
    }
  ];

  return (
    <section id="initiatives" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Our</span>{' '}
              <span className="gradient-text">Initiatives</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-yellow mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to support entrepreneurs at every stage of their journey
            </p>
          </div>

          {/* Initiatives Grid - 3 in a row, 2 rows */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border card-hover group">
                {/* Background gradient */}
                <div className={`h-32 bg-gradient-to-br ${initiative.color} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 text-yellow p-3 bg-black/20 rounded-xl group-hover:bg-black/30 transition-colors">
                    {initiative.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{initiative.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-hero rounded-2xl p-12 text-center border border-yellow/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join CEL today and get access to all our initiatives, programs, and the support you need to build your dream startup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">Apply for Incubation</button>
              <button className="btn-secondary">View All Programs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;