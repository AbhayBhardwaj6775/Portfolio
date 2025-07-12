
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Sparkles, Calendar } from 'lucide-react';

const Internships = () => {
  const internships = [
    {
      title: "AI-ML Virtual Internship",
      company: "Virtual Internship",
      duration: "September 2023 - November 2023",
      description: "Successfully completed a virtual internship focused on AI and Machine Learning. Gained hands-on experience in data analysis, model development, and algorithm optimization.",
      technologies: ["AI", "Machine Learning", "Data Analysis", "Algorithm Optimization"],
      icon: Brain,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Generative AI Virtual Internship",
      company: "Google",
      duration: "July 2024 - September 2024",
      description: "Successfully completed a virtual internship focused on generative AI at Google. Gained hands-on experience in developing and implementing generative models.",
      technologies: ["Generative AI", "Model Development", "Google AI"],
      icon: Sparkles,
      gradient: "from-green-500 to-blue-500"
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
            Internships
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional experience gained through virtual internships in AI, Machine Learning, and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {internships.map((internship, index) => {
            const IconComponent = internship.icon;
            return (
              <motion.div
                key={internship.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="bg-slate-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${internship.gradient} bg-opacity-20`}>
                        <IconComponent className={`h-6 w-6 bg-gradient-to-r ${internship.gradient} bg-clip-text text-transparent`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-xl mb-1">{internship.title}</CardTitle>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-cyan-400 font-semibold">{internship.company}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{internship.duration}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {internship.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-purple-900/50 text-purple-300 hover:bg-purple-800/50"
                        >
                          {tech}
                        </Badge>
                      ))}
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

export default Internships;
