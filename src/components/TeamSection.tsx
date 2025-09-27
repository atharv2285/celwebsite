import { Linkedin, Twitter, Github } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Arjun Patel",
      role: "President & Co-Founder",
      bio: "Final year Computer Science student with 2 successful startups. Passionate about fintech and AI.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      bio: "MBA student specializing in venture capital. Former intern at top VC firms, now helping startups raise funds.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Rahul Verma",
      role: "Head of Operations",
      bio: "Operations expert with experience in scaling startups. Ensures smooth execution of all CEL programs.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ananya Singh",
      role: "Head of Marketing",
      bio: "Digital marketing specialist who has helped multiple startups achieve viral growth and brand recognition.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Karan Joshi",
      role: "Technical Lead",
      bio: "Full-stack developer and tech entrepreneur. Leads all technical initiatives and mentors student developers.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sneha Gupta",
      role: "Head of Programs",
      bio: "Event management expert who designs and executes engaging workshops, competitions, and networking events.",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const advisors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Faculty Advisor",
      company: "Professor of Management",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Meera Agarwal",
      role: "Industry Mentor",
      company: "Ex-VP at Sequoia Capital",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Vikram Malhotra",
      role: "Startup Advisor",
      company: "Serial Entrepreneur",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Meet Our</span>{' '}
              <span className="gradient-text">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-yellow mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate leaders driving innovation and supporting the next generation of entrepreneurs
            </p>
          </div>

          {/* Core Team */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Core Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden border border-border card-hover group">
                  {/* Image with overlay effect */}
                  <div className="relative team-overlay">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Social icons overlay */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="p-2 bg-yellow rounded-full hover:scale-110 transition-transform">
                          <Linkedin className="w-4 h-4 text-black" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="p-2 bg-yellow rounded-full hover:scale-110 transition-transform">
                          <Twitter className="w-4 h-4 text-black" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="p-2 bg-yellow rounded-full hover:scale-110 transition-transform">
                          <Github className="w-4 h-4 text-black" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                    <div className="text-yellow font-medium mb-3 text-sm">{member.role}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-12 text-center">Our Advisors</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <div key={index} className="bg-surface rounded-xl p-8 border border-border hover:border-yellow/30 transition-all duration-300 text-center">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-yellow/20"
                  />
                  <h4 className="text-lg font-bold text-foreground mb-1">{advisor.name}</h4>
                  <div className="text-yellow text-sm font-medium mb-1">{advisor.role}</div>
                  <div className="text-muted-foreground text-xs">{advisor.company}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Team CTA */}
          <div className="mt-16 bg-card rounded-2xl p-8 border border-yellow/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Want to Join Our Team?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals to help drive our mission forward.
            </p>
            <button className="btn-hero">View Open Positions</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;