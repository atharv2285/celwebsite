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
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
      borderColor: "border-amber-200 dark:border-amber-800"
    },
    {
      logo: eweekLogo,
      title: "E-Week",
      fullName: "Entrepreneurship Week",
      description: "CEL's flagship on-campus initiative, organised by the newly recruited batch every year. E-Week brings together the entire campus for a week of building and creativity.",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      logo: redLogo,
      title: "RED",
      fullName: "Rural Entrepreneurship Development",
      description: "From bringing Digital Payments to Pilani to empowering local women entrepreneurs, RED is our attempt to empower the local Pilani community by making them self-reliant.",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30",
      borderColor: "border-red-200 dark:border-red-800"
    },
    {
      logo: sisLogo,
      title: "SiS",
      fullName: "Summer in a Startup",
      description: "Drawing onto CEL's startup connections, SiS connects 5K+ BITSians across campuses with disruptive early-stage startups through internships.",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      title: "Venture Arm",
      fullName: "Venture Arm",
      description: "A student-run venture arm aiming to back India's most promising early-stage startups.",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      title: "Venture Studio",
      fullName: "Venture Studio",
      description: "Our innovation lab where we build and launch new ventures from the ground up, combining entrepreneurial expertise with cutting-edge technology.",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30",
      borderColor: "border-teal-200 dark:border-teal-800"
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
              <div key={index} className="flip-card h-80">
                <div className="flip-card-inner">
                  {/* Front of card - Logo and Title */}
                  <div className={`flip-card-front ${initiative.bgColor} rounded-md border ${initiative.borderColor} overflow-hidden`}>
                    <div className="h-full flex flex-col items-center justify-center p-6">
                      {/* Logo Container */}
                      <div className="flex items-center justify-center h-36 mb-4">
                        {initiative.logo ? (
                          <img 
                            src={initiative.logo} 
                            alt={`${initiative.title} logo`} 
                            className="max-w-[140px] max-h-36 w-auto h-auto object-contain"
                            data-testid={`img-logo-${initiative.title.toLowerCase()}`}
                          />
                        ) : (
                          <div className="w-24 h-24 bg-yellow/20 dark:bg-yellow/10 rounded-md flex items-center justify-center">
                            <span className="text-3xl font-bold text-foreground">{initiative.title[0]}</span>
                          </div>
                        )}
                      </div>
                      {/* Text Container */}
                      <div className="space-y-1 text-center">
                        <h3 className="text-2xl font-bold text-foreground leading-tight">{initiative.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{initiative.fullName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back of card - Description */}
                  <div className={`flip-card-back ${initiative.bgColor} rounded-md border ${initiative.borderColor} overflow-hidden`}>
                    <div className="h-full flex flex-col p-6">
                      <h3 className="text-xl font-bold text-foreground text-center mb-4">{initiative.title}</h3>
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-foreground text-sm leading-relaxed text-center">
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