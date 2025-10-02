import { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, Clock, Linkedin, MessageSquare,
  Calendar, ExternalLink, Star, Users, Briefcase
} from 'lucide-react';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Textarea, Badge } from '../components/ui';
import { submitContactForm } from '../lib/contact';
import { useRouter } from '../components/Router';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function ContactPage() {
  const { navigateTo } = useRouter();
  
  // Animation refs
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: availabilityRef, isVisible: availabilityVisible } = useScrollAnimation();
  
  // State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message?: string }>({ type: 'idle' });

  // Data (within component)
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'Murraylichoro@gmail.com', href: 'mailto:Murraylichoro@gmail.com', primary: true },
    { icon: Phone, label: 'Phone', value: '(+254) 714364533', href: 'tel:+254714364533', primary: false },
    { icon: MapPin, label: 'Location', value: 'Meru, Kenya', href: '#', primary: false },
    { icon: Clock, label: 'Timezone', value: 'EAT (UTC+3)', href: '#', primary: false }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: 'martin-muriithi-2198b62ab',
      url: 'https://www.linkedin.com/in/martin-muriithi-2198b62ab/',
      description: 'Professional network and career updates'
    }
  ];

  const availability = {
    status: 'Available for opportunities',
    responseTime: '24-48 hours',
    preferredContact: 'Email',
    workingHours: '9 AM - 6 PM EAT'
  };

  const collaborationTypes = [
    { type: 'Full-time Opportunities', description: 'Open to cybersecurity analyst and frontend developer positions', icon: Briefcase },
    { type: 'Freelance Projects', description: 'Web development, security assessments, and consulting work', icon: Users },
    { type: 'Research Collaboration', description: 'Academic research in AI applications for cybersecurity', icon: Star },
    { type: 'Speaking & Mentoring', description: 'Tech talks, workshops, and mentoring opportunities', icon: MessageSquare }
  ];

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'idle' });

    // Basic client validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    const result = await submitContactForm(formData);
    setIsSubmitting(false);

    if (result.ok) {
      setStatus({ type: 'success', message: "Thanks! Your message was sent successfully. I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Navigate to thank-you confirmation screen
      navigateTo('thank-you');
    } else {
      setStatus({ type: 'error', message: result.message });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section 
        ref={heroRef}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          heroVisible ? 'animate-slide-in-up opacity-100' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent rounded-full">
            <Mail className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm text-muted-foreground">Get In Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">Let's Connect</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about technology, cybersecurity, and innovation. Whether you're looking for a team member, have a project in mind, or want to connect professionally, I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* AVAILABILITY BANNER */}
      <section 
        ref={availabilityRef}
        className={`py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#14B8A6]/10 to-[#8B5CF6]/10 transition-all duration-700 delay-200 ${
          availabilityVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-background p-6 rounded-xl ring-1 ring-white/10">
            {/* Left side - Status indicator */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <h3 className="text-foreground">{availability.status}</h3>
                <p className="text-sm text-muted-foreground">Typically responds within {availability.responseTime}</p>
              </div>
            </div>
            {/* Right side - Badge */}
            <Badge className="bg-[#14B8A6]/20 text-[#14B8A6] border-[#14B8A6]/30">Open to Opportunities</Badge>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + SIDEBAR */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-3 gap-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card/70">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Send className="w-6 h-6 text-[#14B8A6]" />
                    Send Me a Message
                  </CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
                </CardHeader>
                <CardContent>
                  {status.type !== 'idle' && (
                    <div
                      role={status.type === 'error' ? 'alert' : 'status'}
                      className={`mb-4 rounded-lg px-4 py-3 ${
                        status.type === 'success'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : status.type === 'error'
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : ''
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-foreground">Full Name *</label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="bg-background border-border focus:border-[#14B8A6]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-foreground">Email Address *</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-background border-border focus:border-[#14B8A6]"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-foreground">Subject *</label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        required
                        className="bg-background border-border focus:border-[#14B8A6]"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-foreground">Message *</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project, opportunity, or question..."
                        rows={6}
                        required
                        className="bg-background border-border focus:border-[#14B8A6] resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] hover:from-[#0F766E] hover:to-[#7C3AED] text-white border-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-8 mt-12 lg:mt-0">
              {/* Contact Information */}
              <Card className="bg-card/70">
                <CardHeader>
                  <CardTitle className="text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${info.primary ? 'bg-[#14B8A6]/20' : 'bg-accent'}`}>
                        <info.icon className={`w-4 h-4 ${info.primary ? 'text-[#14B8A6]' : 'text-muted-foreground'}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-card/70">
                <CardHeader>
                  <CardTitle className="text-foreground">Availability</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className="text-sm text-green-400">{availability.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="text-sm text-foreground">{availability.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Preferred Contact</span>
                    <span className="text-sm text-foreground">{availability.preferredContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Working Hours</span>
                    <span className="text-sm text-foreground">{availability.workingHours}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-[#14B8A6]/10 to-[#8B5CF6]/10 border border-[#14B8A6]/20">
                <CardHeader>
                  <CardTitle className="text-foreground">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    className="w-full bg-[#14B8A6] hover:bg-[#0F766E] text-white"
                    onClick={() => (window.location.href = 'mailto:Murraylichoro@gmail.com')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4 sm:text-4xl">Connect on Social Media</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Follow me on various platforms for updates, insights, and professional networking</p>
          </div>
          <div className="sm:grid-cols-1 lg:grid-cols-1 gap-6 max-w-md mx-auto grid">
            {socialLinks.map((social, index) => (
              <Card key={index} className="bg-card/70 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 bg-accent rounded-lg mb-4 group-hover:bg-[#14B8A6]/20 transition-colors duration-300">
                    <social.icon className="w-6 h-6 text-[#14B8A6] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-foreground mb-2">{social.name}</h3>
                  <p className="text-sm text-[#14B8A6] mb-2">{social.username}</p>
                  <p className="text-xs text-muted-foreground mb-4">{social.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-border hover:bg-accent"
                    onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    Visit Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COLLABORATION OPPORTUNITIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-foreground mb-4 sm:text-4xl">Collaboration Opportunities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">I'm interested in various types of professional collaborations and opportunities</p>
          </div>
          <div className="sm:grid-cols-2 grid gap-6">
            {collaborationTypes.map((collab, index) => (
              <Card key={index} className="bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <collab.icon className="w-6 h-6 text-[#14B8A6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground mb-2">{collab.type}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{collab.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#8B5CF6] p-8 rounded-xl text-white">
            <h2 className="text-2xl sm:text-3xl mb-4 text-white">Ready to Start a Conversation?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">Whether you have a specific project in mind, want to discuss career opportunities, or simply want to connect with a fellow tech enthusiast, I'm here and ready to chat!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#14B8A6] hover:bg-gray-100 border-0"
                onClick={() => document.getElementById('message')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Send className="w-4 h-4 mr-2" /> Send Message Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#14B8A6]"
                onClick={() => (window.location.href = 'mailto:Murraylichoro@gmail.com')}
              >
                <Mail className="w-4 h-4 mr-2" /> Email Directly
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}