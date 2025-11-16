// Import your logo files
import conquestLogo from '@/assets/Conquest Logo.png';
import eweekLogo from '@/assets/Eweek.jpg';
import redLogo from '@/assets/RED.png';
import sisLogo from '@/assets/sis 1.png';

const InitiativesSection = () => {
  const initiatives = [
    {
      logo: conquestLogo,
      title: "Conquest",
      fullName: "Conquest",
      description: "Asia's largest student-run Startup Accelerator — we work closely with 15-20 early-stage startups handpicked from over 3000+ applications across India every year, helping accelerate their growth journeys.",
      color: "from-yellow/10 to-orange-500/10"
    },
    {
      logo: eweekLogo,
      title: "E-Week",
      fullName: "Entrepreneurship Week",
      description: "CEL's flagship on-campus initiative, organised by the newly recruited batch every year. E-Week brings together the entire campus for a week of building and creativity.",
      color: "from-blue-500/10 to-purple-500/10"
    },
    {
      logo: redLogo,
      title: "RED",
      fullName: "Rural Entrepreneurship Development",
      description: "From bringing Digital Payments to Pilani to empowering local women entrepreneurs, RED is our attempt to empower the local Pilani community by making them self-reliant.",
      color: "from-red-500/10 to-pink-500/10"
    },
    {
      logo: sisLogo,
      title: "SiS",
      fullName: "Summer in a Startup",
      description: "Drawing onto CEL's startup connections, SiS connects 5K+ BITSians across campuses with disruptive early-stage startups through internships.",
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "Venture Arm",
      fullName: "Venture Arm",
      description: "A student-run venture arm aiming to back India's most promising early-stage startups.",
      color: "from-purple-500/10 to-indigo-500/10"
    },
    {
      title: "Venture Studio",
      fullName: "Venture Studio",
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
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front of card - Logo and Title */}
                  <div className="flip-card-front bg-card rounded-xl border border-border card-hover">
                    <div className={`h-48 bg-gradient-to-br ${initiative.color} relative flex flex-col items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                      <div className="relative z-10 text-center">
                        {/* Logo */}
                        <div className="mb-3">
                          {initiative.logo ? (
                            <img src={initiative.logo} alt={`${initiative.title} logo`} className="w-36 h-36 object-contain mx-auto" />
                          ) : (
                            <div className="w-36 h-36 bg-yellow/40 rounded-lg mx-auto"></div>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{initiative.title}</h3>
                        <p className="text-sm text-muted-foreground">{initiative.fullName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of card - Description */}
                  <div className="flip-card-back bg-card rounded-xl border border-border card-hover">
                    <div className={`h-48 bg-gradient-to-br ${initiative.color} relative p-6 flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-foreground mb-3 text-center">{initiative.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed text-center">
                          {initiative.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;