import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, Users, Zap, Target } from 'lucide-react';

const JoinSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    major: '',
    experience: '',
    interests: '',
    reason: ''
  });

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Network Access",
      description: "Connect with 500+ entrepreneurs, mentors, and industry professionals"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Skill Development",
      description: "Access to exclusive workshops, courses, and hands-on learning opportunities"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Startup Support",
      description: "Get funding, mentorship, and resources to launch your own venture"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.year) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 48 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      year: '',
      major: '',
      experience: '',
      interests: '',
      reason: ''
    });
  };

  return (
    <section id="join" className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Join</span>{' '}
              <span className="gradient-text">CEL</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-yellow mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Become part of a thriving community of student entrepreneurs and turn your ideas into reality
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Why Join CEL?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  CEL membership opens doors to incredible opportunities, valuable connections, and the resources 
                  you need to succeed as an entrepreneur. Join a community that believes in your potential.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border hover:border-yellow/30 transition-all">
                    <div className="text-yellow bg-yellow/10 p-3 rounded-xl">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Membership perks */}
              <div className="bg-card rounded-xl p-6 border border-yellow/20">
                <h4 className="text-xl font-bold text-foreground mb-4">Membership Includes:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Free workshop access",
                    "Mentorship program",
                    "Networking events",
                    "Pitch competition entry",
                    "Co-working space access",
                    "Alumni network",
                    "Funding opportunities",
                    "Industry partnerships"
                  ].map((perk, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-yellow" />
                      <span className="text-sm text-foreground">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Apply for Membership</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 9876543210"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Academic Year *</label>
                    <Select onValueChange={(value) => handleInputChange('year', value)}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first">First Year</SelectItem>
                        <SelectItem value="second">Second Year</SelectItem>
                        <SelectItem value="third">Third Year</SelectItem>
                        <SelectItem value="fourth">Fourth Year</SelectItem>
                        <SelectItem value="masters">Masters</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Major/Field of Study</label>
                  <Input
                    value={formData.major}
                    onChange={(e) => handleInputChange('major', e.target.value)}
                    placeholder="Computer Science, Business, etc."
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Previous Experience</label>
                  <Textarea
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    placeholder="Tell us about any previous startup, internship, or entrepreneurial experience..."
                    className="bg-background border-border min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Areas of Interest</label>
                  <Input
                    value={formData.interests}
                    onChange={(e) => handleInputChange('interests', e.target.value)}
                    placeholder="Fintech, AI, E-commerce, Healthtech, etc."
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Why do you want to join CEL?</label>
                  <Textarea
                    value={formData.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                    placeholder="Share your motivation and what you hope to achieve..."
                    className="bg-background border-border min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full btn-hero text-lg py-4">
                  Submit Application
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll review your application and get back to you within 48 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;