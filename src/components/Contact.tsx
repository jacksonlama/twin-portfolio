
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 dark:bg-dark light:bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading text-center text-yellow">Contact Me</h2>
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-center mb-12">Get in touch</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-dark-lighter dark:bg-dark-lighter light:bg-white p-6 rounded-lg border border-gray-800 dark:border-gray-800 light:border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center mr-4">
                  <Mail className="text-yellow" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">Email</h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">peeling.onion96@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-lighter dark:bg-dark-lighter light:bg-white p-6 rounded-lg border border-gray-800 dark:border-gray-800 light:border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center mr-4">
                  <Phone className="text-yellow" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">Phone</h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">+123 456 7890</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-lighter dark:bg-dark-lighter light:bg-white p-6 rounded-lg border border-gray-800 dark:border-gray-800 light:border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center mr-4">
                  <MapPin className="text-yellow" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">Location</h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">N***, World</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="bg-dark-lighter dark:bg-dark-lighter light:bg-white p-8 rounded-lg border border-gray-800 dark:border-gray-800 light:border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-dark dark:bg-dark light:bg-gray-100 border-gray-800 dark:border-gray-800 light:border-gray-300 focus:border-yellow"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-dark dark:bg-dark light:bg-gray-100 border-gray-800 dark:border-gray-800 light:border-gray-300 focus:border-yellow"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="bg-dark dark:bg-dark light:bg-gray-100 border-gray-800 dark:border-gray-800 light:border-gray-300 focus:border-yellow"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="bg-dark dark:bg-dark light:bg-gray-100 border-gray-800 dark:border-gray-800 light:border-gray-300 focus:border-yellow min-h-[150px]"
                    required
                  />
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-yellow text-dark hover:bg-yellow/90 px-8 py-2 font-medium rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
