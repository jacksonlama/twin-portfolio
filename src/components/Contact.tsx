
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="section-heading text-center">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className={`${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="glass-card p-8 rounded-xl border border-border shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Mail className="text-yellow mr-2" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start hover-lift p-4 rounded-lg transition-all">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow/10 mr-4">
                    <Phone className="text-yellow" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <p className="text-muted-foreground">+1 234 567 890</p>
                    <a href="tel:+1234567890" className="text-yellow text-sm flex items-center mt-1 hover:underline">
                      Call me <ArrowRight size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start hover-lift p-4 rounded-lg transition-all">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow/10 mr-4">
                    <Mail className="text-yellow" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <p className="text-muted-foreground">peeling.onion96@gmail.com</p>
                    <a href="mailto:peeling.onion96@gmail.com" className="text-yellow text-sm flex items-center mt-1 hover:underline">
                      Email me <ArrowRight size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start hover-lift p-4 rounded-lg transition-all">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow/10 mr-4">
                    <MapPin className="text-yellow" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">New York, USA</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-yellow text-sm flex items-center mt-1 hover:underline">
                      View on map <ExternalLink size={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button 
                  className="btn-primary w-full justify-center"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download CV
                  <Download size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className={`${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="glass-card p-8 rounded-xl border border-border shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Send className="text-yellow mr-2" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow focus:border-transparent transition-all"
                    placeholder="Your message here..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full justify-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
