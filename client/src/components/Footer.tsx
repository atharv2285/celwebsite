import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import celLogo from '@/assets/cel-logo.png';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Team", href: "#team" },
    { name: "Join CEL", href: "#join" }
  ];

  const resources = [
    { name: "Startup Resources", href: "#" },
    { name: "Mentorship Program", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "Blog", href: "#" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={celLogo} 
                  alt="CEL Logo" 
                  className="w-12 h-12 bulb-glow rounded-lg"
                />
                <span className="text-3xl font-bold gradient-text">CEL</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                College Entrepreneurship League - Empowering student entrepreneurs to build the future through innovation, collaboration, and relentless pursuit of excellence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-card border border-border rounded-xl hover:border-yellow/50 hover:bg-yellow/10 transition-all duration-300 group"
                  >
                    <div className="text-muted-foreground group-hover:text-yellow transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-yellow transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.href}
                      className="text-muted-foreground hover:text-yellow transition-colors duration-300"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      Student Center, Room 201<br />
                      University Campus<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow" />
                  <a href="mailto:hello@cel.edu" className="text-muted-foreground hover:text-yellow transition-colors">
                    hello@cel.edu
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow" />
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-yellow transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-card rounded-2xl p-8 border border-yellow/20 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest updates on events, workshops, and startup opportunities delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-xl focus:border-yellow focus:outline-none"
                />
                <button className="btn-hero px-8 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-muted-foreground text-sm">
                © 2024 College Entrepreneurship League. All rights reserved.
              </div>
              <div className="text-center">
                <p className="text-sm font-medium gradient-text">
                  "Powered by Ideas. Driven by Students."
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-yellow transition-colors">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-yellow transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;