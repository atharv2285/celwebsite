import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Startup Pitch Night",
      date: "Oct 15, 2024",
      time: "6:00 PM",
      location: "Main Auditorium",
      description: "Present your startup ideas to industry experts and potential investors.",
      attendees: 150,
      category: "Competition"
    },
    {
      title: "AI in Business Workshop",
      date: "Oct 22, 2024", 
      time: "2:00 PM",
      location: "Tech Lab 2",
      description: "Learn how to integrate AI solutions into your business strategy.",
      attendees: 75,
      category: "Workshop"
    },
    {
      title: "Founder Networking Mixer",
      date: "Nov 5, 2024",
      time: "7:00 PM", 
      location: "Student Center",
      description: "Connect with successful alumni founders and industry professionals.",
      attendees: 200,
      category: "Networking"
    }
  ];

  const pastEvents = [
    {
      title: "Fintech Innovation Summit",
      date: "Sep 18, 2024",
      attendees: 300,
      description: "Explored the latest trends in financial technology and digital banking.",
      highlight: "3 startups secured funding"
    },
    {
      title: "E-commerce Mastery Bootcamp", 
      date: "Aug 25, 2024",
      attendees: 120,
      description: "Intensive 3-day program covering all aspects of online business.",
      highlight: "15 stores launched"
    },
    {
      title: "Women in Entrepreneurship Panel",
      date: "Aug 10, 2024", 
      attendees: 180,
      description: "Inspiring stories from successful female entrepreneurs.",
      highlight: "New mentorship program launched"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition': return 'bg-yellow/20 text-yellow border-yellow/30';
      case 'Workshop': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Networking': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-yellow/20 text-yellow border-yellow/30';
    }
  };

  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Events &</span>{' '}
              <span className="gradient-text">Workshops</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-yellow mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our dynamic events designed to accelerate your entrepreneurial journey
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <Calendar className="w-8 h-8 text-yellow mr-3" />
              Upcoming Events
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-card rounded-xl p-8 border border-border card-hover">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    <div className="text-right">
                      <div className="text-yellow font-bold text-lg">{event.date}</div>
                      <div className="text-muted-foreground text-sm">{event.time}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground mb-3">{event.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{event.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees} expected attendees
                    </div>
                  </div>
                  
                  <Button className="w-full btn-hero text-sm">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Past Events Highlights</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-surface rounded-xl p-6 border border-border hover:border-yellow/30 transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-foreground mb-2">{event.title}</h4>
                    <div className="text-yellow text-sm font-medium">{event.date}</div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  
                  <div className="flex justify-between items-end">
                    <div className="text-sm text-muted-foreground">
                      <Users className="w-4 h-4 inline mr-1" />
                      {event.attendees} attendees
                    </div>
                    <div className="text-xs bg-yellow/20 text-yellow px-2 py-1 rounded-full">
                      {event.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;