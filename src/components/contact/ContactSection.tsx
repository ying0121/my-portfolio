import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, label: 'GitHub', url: 'https://github.com', color: 'hover:text-gray-600' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-blue-600' },
  { icon: MessageSquare, label: 'Discord', url: 'https://discord.com', color: 'hover:text-indigo-600' },
  { icon: Users, label: 'Teams', url: 'https://teams.microsoft.com', color: 'hover:text-purple-600' },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/20 via-background to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="text-primary" size={20} />
                <span>john.doe@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-primary" size={20} />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card border border-border rounded-lg transition-colors ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              <Send className="mr-2" size={16} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};