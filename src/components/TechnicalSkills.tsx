
import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, FileCode } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-cyan-400",
      skills: [
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Advanced" }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "text-blue-400",
      skills: [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Intermediate" }
      ]
    },
    {
      title: "Backend Development",
      icon: FileCode,
      color: "text-green-400",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" }
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      color: "text-purple-400",
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "text-orange-400",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Google Cloud", level: "Beginner" },
        { name: "Jupyter Notebook", level: "Intermediate" },
        { name: "Visual Studio Code", level: "Advanced" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-900/50 text-green-300 border-green-500/30';
      case 'Intermediate':
        return 'bg-blue-900/50 text-blue-300 border-blue-500/30';
      case 'Beginner':
        return 'bg-yellow-900/50 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-gray-900/50 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my technical expertise across programming languages, frameworks, 
            databases, and development tools that I use to build innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="bg-slate-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800/50 mr-4 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-white text-lg">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-6 max-w-4xl mx-auto border border-cyan-400/20">
            <p className="text-gray-300 text-lg">
              <span className="text-cyan-400 font-semibold">Always Learning:</span> I'm constantly expanding 
              my technical skills through hands-on projects, online courses, and staying updated with the 
              latest industry trends and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
