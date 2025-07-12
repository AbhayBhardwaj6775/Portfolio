
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, CreditCard, Hand, Globe, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AcademicProjects = () => {
  const projects = [
    {
      title: "Multi-Person Face Recognition",
      description: "Developed a real-time face recognition system capable of identifying multiple individuals simultaneously using live video streams or CCTV footage.",
      technologies: ["Python", "OpenCV", "Dlib", "Flask"],
      icon: Eye,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "ATM Interface",
      description: "The project involved designing a user-friendly interface for basic ATM functionalities, including account balance inquiries, cash withdrawals, deposits, and fund transfers.",
      technologies: ["Java"],
      icon: CreditCard,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Indian Sign Language Recognition",
      description: "Developed a system to recognize and interpret Indian Sign Language (ISL) using machine learning and computer vision techniques.",
      technologies: ["Python", "Machine Learning"],
      icon: Hand,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website to showcase projects and skills. Utilized HTML, CSS, and JavaScript to create an engaging and responsive user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: Globe,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Academic Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of academic projects showcasing practical application of programming concepts and emerging technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="bg-slate-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                        <IconComponent className={`h-6 w-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3 pt-2">
                      <Button size="sm" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;
