
import { motion } from 'framer-motion';
import { Award, Code, Smartphone, Bot, Database, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: "Python",
      provider: "Guvi India",
      icon: Code,
      category: "Programming",
      color: "text-yellow-400"
    },
    {
      title: "Android Development",
      provider: "Google",
      icon: Smartphone,
      category: "Mobile Development",
      color: "text-green-400"
    },
    {
      title: "Java Basics",
      provider: "HackerRank",
      icon: Code,
      category: "Programming",
      color: "text-orange-400"
    },
    {
      title: "DSA with Java",
      provider: "Physics Wallah",
      icon: Award,
      category: "Data Structures",
      color: "text-purple-400"
    },
    {
      title: "ChatGPT",
      provider: "Coding Ninjas",
      icon: Bot,
      category: "AI/ML",
      color: "text-cyan-400"
    },
    {
      title: "Backend Development",
      provider: "Physics Wallah",
      icon: Server,
      category: "Backend",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-slate-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <cert.icon className={`h-8 w-8 ${cert.color}`} />
                    <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                  <CardDescription className="text-gray-300 font-medium">
                    {cert.provider}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-400">Certified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
