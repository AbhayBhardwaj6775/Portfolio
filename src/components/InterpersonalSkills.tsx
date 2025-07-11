
import { motion } from 'framer-motion';
import { MessageSquare, Users, Lightbulb, RefreshCw, Clock, Heart, Handshake, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const InterpersonalSkills = () => {
  const skills = [
    {
      name: "Communication",
      icon: MessageSquare,
      description: "Clear and effective verbal and written communication",
      color: "text-cyan-400"
    },
    {
      name: "Teamwork",
      icon: Users,
      description: "Collaborative approach to achieving common goals",
      color: "text-blue-400"
    },
    {
      name: "Problem-solving",
      icon: Lightbulb,
      description: "Analytical thinking and creative solution development",
      color: "text-yellow-400"
    },
    {
      name: "Adaptability",
      icon: RefreshCw,
      description: "Flexibility in changing environments and technologies",
      color: "text-green-400"
    },
    {
      name: "Time Management",
      icon: Clock,
      description: "Efficient prioritization and deadline management",
      color: "text-purple-400"
    },
    {
      name: "Emotional Intelligence",
      icon: Heart,
      description: "Understanding and managing emotions in professional settings",
      color: "text-pink-400"
    },
    {
      name: "Conflict Resolution",
      icon: Handshake,
      description: "Mediating disputes and finding mutually beneficial solutions",
      color: "text-orange-400"
    },
    {
      name: "Leadership",
      icon: Crown,
      description: "Guiding teams and inspiring others to achieve excellence",
      color: "text-red-400"
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
            Interpersonal Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            In today's tech landscape, technical expertise alone isn't enough. Strong interpersonal skills are crucial 
            for effective collaboration, leadership, and building innovative solutions that truly impact users and organizations.
          </p>
          <p className="text-md text-gray-400 max-w-2xl mx-auto">
            These soft skills complement my technical abilities, enabling me to work effectively in diverse teams, 
            communicate complex ideas clearly, and adapt to the ever-evolving tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-slate-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4 ${skill.color}`}>
                    <skill.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-white mb-3 text-lg">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
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
              <span className="text-cyan-400 font-semibold">Continuous Growth:</span> I believe in constantly developing 
              both technical and interpersonal skills, understanding that great software is built by great teams working 
              together towards common goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterpersonalSkills;
