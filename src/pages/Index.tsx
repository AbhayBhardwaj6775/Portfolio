import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, ExternalLink, Mail, Phone, MapPin, Download, Code, Brain, Database, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import ContactSection from '@/components/ContactSection';
import InterpersonalSkills from '@/components/InterpersonalSkills';
import TechnicalSkills from '@/components/TechnicalSkills';

const Index = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["AI Developer", "MERN Stack Builder", "Problem Solver"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "Python", icon: "🐍", category: "AI/ML" },
    { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
    { name: "JavaScript", icon: "💛", category: "Programming" },
    { name: "Express.js", icon: "🚀", category: "Backend" },
    { name: "Git", icon: "📦", category: "Tools" }
  ];

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "Smart task management system using machine learning to predict deadlines and prioritize tasks automatically.",
      tags: ["React", "Python", "TensorFlow", "MongoDB"],
      liveLink: "#",
      demoLink: "#",
      image: "🤖"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack MERN chat app with real-time messaging, file sharing, and user authentication.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "#",
      demoLink: "#",
      image: "💬"
    },
    {
      title: "Competitive Programming Tracker",
      description: "Track and analyze competitive programming progress across multiple platforms with data visualization.",
      tags: ["React", "Node.js", "Chart.js", "APIs"],
      liveLink: "#",
      demoLink: "#",
      image: "📊"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              Abhay Bhardwaj
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {["About", "Technical Skills", "Interpersonal Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Abhay</span>
            </h1>
            <div className="text-2xl md:text-3xl mb-8 h-16 flex items-center justify-center">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-cyan-400"
              >
                {roles[currentRole]}
              </motion.span>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              B.Tech CSE student passionate about AI, full-stack development, and solving complex problems through code.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate B.Tech Computer Science student with a deep fascination for artificial intelligence and full-stack web development. 
                My journey in technology is driven by curiosity and the desire to create innovative solutions that make a difference.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                When I'm not coding, you'll find me participating in competitive programming contests on Codeforces and LeetCode, 
                constantly challenging myself to think algorithmically and solve complex problems efficiently.
              </p>
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <Brain className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">AI Enthusiast</p>
                </div>
                <div className="text-center">
                  <Code className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Full Stack Developer</p>
                </div>
                <div className="text-center">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Problem Solver</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <div id="technical-skills">
        <TechnicalSkills />
      </div>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interpersonal Skills Section */}
      <div id="interpersonal-skills">
        <InterpersonalSkills />
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-slate-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="text-4xl mb-4">{project.image}</div>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-purple-900/50 text-purple-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                          <Github className="mr-2 h-3 w-3" />
                          Code
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Abhay Bhardwaj. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
