
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:abhay.bhardwaj@email.com',
      color: 'text-cyan-400 hover:text-cyan-300',
      bgColor: 'hover:bg-cyan-400/10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/abhay-bhardwaj',
      color: 'text-blue-400 hover:text-blue-300',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/abhay-bhardwaj',
      color: 'text-purple-400 hover:text-purple-300',
      bgColor: 'hover:bg-purple-400/10'
    },
    {
      name: 'LeetCode',
      icon: Code,
      href: 'https://leetcode.com/abhay-bhardwaj',
      color: 'text-orange-400 hover:text-orange-300',
      bgColor: 'hover:bg-orange-400/10'
    },
    {
      name: 'Codeforces',
      icon: Trophy,
      href: 'https://codeforces.com/profile/abhay-bhardwaj',
      color: 'text-red-400 hover:text-red-300',
      bgColor: 'hover:bg-red-400/10'
    },
    {
      name: 'CodeChef',
      icon: Users,
      href: 'https://codechef.com/users/abhay_bhardwaj',
      color: 'text-yellow-400 hover:text-yellow-300',
      bgColor: 'hover:bg-yellow-400/10'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out! I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply connect with fellow developers. Whether you have a question, want to work together, 
            or just want to say hello, I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Get In Touch</CardTitle>
                <CardDescription>
                  Connect with me on various platforms or drop me a message
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        flex items-center space-x-3 p-4 rounded-lg border border-border/50 
                        transition-all duration-300 ${link.color} ${link.bgColor}
                        hover:border-current/30 group
                      `}
                    >
                      <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="h-4 w-4 text-cyan-400" />
                    <span className="font-medium text-foreground">Direct Email</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    abhay.bhardwaj@email.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
                <CardDescription>
                  Have a project in mind? Let's discuss how we can work together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-background/50 border-border/50 focus:border-cyan-400/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-cyan-400/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-cyan-400/50 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium py-3 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-400/20">
            <span className="text-sm text-muted-foreground">
              Looking forward to hearing from you!
            </span>
            <span className="text-cyan-400">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
