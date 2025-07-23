import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  color: string;
  delay: number;
}

export const SkillCard = ({ icon: Icon, name, level, color, delay }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 2,
        transition: { duration: 0.2 }
      }}
      className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
    >
      {/* Gradient background on hover */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${color} mb-4`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="text-white" size={24} />
        </motion.div>
        
        {/* Skill name */}
        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Proficiency</span>
            <span className={`text-sm font-medium bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {level}%
            </span>
          </div>
          
          <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${color} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.5, duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
        
        {/* Animated dots */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-1">
            <motion.div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};