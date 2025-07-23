import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Globe, 
  GitBranch,
  Palette,
  Zap,
  Cloud,
  Shield,
  Cpu,
  Monitor
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { icon: Code, name: 'React', level: 95, color: 'from-blue-500 to-cyan-400' },
      { icon: Code, name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
      { icon: Code, name: 'Next.js', level: 88, color: 'from-black to-gray-600' },
      { icon: Palette, name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-blue-500' },
      { icon: Code, name: 'Vue.js', level: 80, color: 'from-green-500 to-green-400' },
      { icon: Monitor, name: 'Responsive Design', level: 94, color: 'from-purple-500 to-pink-500' },
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { icon: Server, name: 'Node.js', level: 90, color: 'from-green-600 to-green-400' },
      { icon: Server, name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-400' },
      { icon: Server, name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-400' },
      { icon: Server, name: 'GraphQL', level: 82, color: 'from-pink-500 to-rose-400' },
      { icon: Shield, name: 'JWT Auth', level: 87, color: 'from-red-500 to-orange-400' },
      { icon: Zap, name: 'REST APIs', level: 93, color: 'from-orange-500 to-yellow-400' },
    ]
  },
  {
    title: 'Database & DevOps',
    skills: [
      { icon: Database, name: 'PostgreSQL', level: 88, color: 'from-blue-700 to-blue-500' },
      { icon: Database, name: 'MongoDB', level: 85, color: 'from-green-700 to-green-500' },
      { icon: Cloud, name: 'AWS', level: 80, color: 'from-orange-600 to-yellow-500' },
      { icon: Cloud, name: 'Docker', level: 82, color: 'from-blue-600 to-cyan-500' },
      { icon: GitBranch, name: 'Git', level: 95, color: 'from-red-600 to-red-400' },
      { icon: Cpu, name: 'CI/CD', level: 78, color: 'from-purple-600 to-purple-400' },
    ]
  },
  {
    title: 'Mobile & Tools',
    skills: [
      { icon: Smartphone, name: 'React Native', level: 83, color: 'from-blue-500 to-purple-500' },
      { icon: Globe, name: 'PWA', level: 86, color: 'from-green-500 to-teal-400' },
      { icon: Code, name: 'Webpack', level: 79, color: 'from-blue-700 to-blue-500' },
      { icon: Zap, name: 'Vite', level: 91, color: 'from-purple-500 to-pink-400' },
      { icon: Palette, name: 'Figma', level: 85, color: 'from-purple-600 to-pink-500' },
      { icon: Code, name: 'Testing', level: 84, color: 'from-red-500 to-pink-400' },
    ]
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4"
            whileInView={{ scale: [0.9, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Skills
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Here are the technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              {/* Category Title */}
              <motion.h3 
                className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center"
                whileInView={{ scale: [0.95, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 + 0.3 }}
              >
                {category.title}
              </motion.h3>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </section>
  );
};