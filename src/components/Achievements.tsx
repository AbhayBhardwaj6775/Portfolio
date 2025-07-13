
import { motion } from 'framer-motion';
import { Trophy, Code, Zap, Star, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      platform: "LeetCode",
      description: "Solved 500+ problems across various topics",
      icon: Code,
      color: "from-orange-500 to-yellow-500",
      stats: "500+ Problems"
    },
    {
      platform: "Codeforces",
      description: "Achieved a rating of 535",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      stats: "Rating: 535"
    },
    {
      platform: "CodeChef",
      description: "3★ Coder, with 200+ problems solved",
      icon: Trophy,
      color: "from-purple-500 to-pink-500",
      stats: "3★ | 200+ Problems"
    },
    {
      platform: "HackerRank",
      description: "5★ in Java and 5★ in Python",
      icon: Star,
      color: "from-green-500 to-emerald-500",
      stats: "5★ Java & Python"
    },
    {
      platform: "GeeksforGeeks",
      description: "3★ Coder with peak rating of 1712 in contests",
      icon: Award,
      color: "from-indigo-500 to-purple-500",
      stats: "3★ | Peak: 1712"
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
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-yellow-400 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Achievements
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My competitive programming journey and accomplishments across various coding platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="bg-slate-900/50 border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} bg-opacity-20`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge 
                        variant="outline" 
                        className="border-cyan-400/50 text-cyan-400 text-xs"
                      >
                        {achievement.stats}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-white mb-2">
                      {achievement.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between pt-0">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-900/30 p-6 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-cyan-400 mb-2">700+</div>
              <div className="text-sm text-gray-400">Total Problems Solved</div>
            </div>
            <div className="bg-slate-900/30 p-6 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-sm text-gray-400">Platforms Mastered</div>
            </div>
            <div className="bg-slate-900/30 p-6 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-yellow-400 mb-2">10★</div>
              <div className="text-sm text-gray-400">Total Stars Earned</div>
            </div>
            <div className="bg-slate-900/30 p-6 rounded-lg border border-purple-500/20">
              <div className="text-2xl font-bold text-green-400 mb-2">2</div>
              <div className="text-sm text-gray-400">Contest Participations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
