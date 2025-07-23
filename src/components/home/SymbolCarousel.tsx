import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Smartphone, Zap, Cpu, Cloud } from 'lucide-react';

const symbols = [
  { icon: Code, name: 'Frontend', color: 'text-blue-400' },
  { icon: Database, name: 'Database', color: 'text-green-400' },
  { icon: Globe, name: 'Web Dev', color: 'text-purple-400' },
  { icon: Server, name: 'Backend', color: 'text-orange-400' },
  { icon: Smartphone, name: 'Mobile', color: 'text-pink-400' },
  { icon: Zap, name: 'Fast', color: 'text-yellow-400' },
  { icon: Cpu, name: 'Logic', color: 'text-red-400' },
  { icon: Cloud, name: 'Cloud', color: 'text-cyan-400' },
];

export const SymbolCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % symbols.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const getPosition = (index: number) => {
    const total = symbols.length;
    const angle = (2 * Math.PI * index) / total;
    const radius = 120;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return { x, z, angle };
  };

  const getCurrentPosition = (index: number) => {
    const adjustedIndex = (index - currentIndex + symbols.length) % symbols.length;
    return getPosition(adjustedIndex);
  };

  return (
    <div 
      className="relative w-80 h-80 mx-auto perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {symbols.map((symbol, index) => {
          const Icon = symbol.icon;
          const { x, z } = getCurrentPosition(index);
          const isActive = index === currentIndex;
          const scale = isActive ? 1.5 : 1;
          const opacity = Math.max(0.3, 1 - Math.abs(z) / 200);

          return (
            <motion.div
              key={symbol.name}
              className={`absolute flex flex-col items-center cursor-pointer ${symbol.color}`}
              animate={{
                x,
                z,
                scale,
                opacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
              whileHover={{ scale: scale * 1.2 }}
              onClick={() => setCurrentIndex(index)}
              style={{
                transformStyle: 'preserve-3d',
                zIndex: Math.round(100 - z),
              }}
            >
              <motion.div
                className={`p-4 rounded-full bg-background/10 backdrop-blur-sm border border-white/20 ${
                  isActive ? 'shadow-2xl shadow-current/50' : 'shadow-lg'
                }`}
                animate={{
                  rotateY: isActive ? 360 : 0,
                }}
                transition={{
                  duration: isActive ? 2 : 0,
                  repeat: isActive ? Infinity : 0,
                  ease: 'linear',
                }}
              >
                <Icon size={isActive ? 32 : 24} />
              </motion.div>
              <motion.span
                className={`mt-2 text-sm font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}
                animate={{ opacity: isActive ? 1 : 0.7 }}
              >
                {symbol.name}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* Center dot indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full opacity-50" />
      
      {/* Navigation dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {symbols.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};