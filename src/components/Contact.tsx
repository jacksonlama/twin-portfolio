
import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
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
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                  <Phone className="text-yellow" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 234 567 890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                  <Mail className="text-yellow" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-muted-foreground">peeling.onion96@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                  <MapPin className="text-yellow" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">New York, USA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button 
                className="rounded-full bg-yellow hover:bg-yellow/80 text-dark font-medium px-8 py-6 h-auto"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </div>
          </div>
          
          <div>
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
                  className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow"
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
                  className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow"
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
                  className="w-full rounded-md border border-border bg-background/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow"
                />
              </div>
              
              <Button 
                type="submit" 
                className="rounded-full bg-yellow hover:bg-yellow/80 text-dark font-medium px-8 py-6 h-auto flex items-center"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
