import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';
import { VideoBackground } from './VideoBackground';
import { TypedText } from './TypedText';
import { SymbolCarousel } from './SymbolCarousel';
import { Button } from '@/components/ui/button';
// Note: AnimeJS will be used for additional animations in production

export const HomeSection = () => {
  useEffect(() => {
    // Enhanced animations can be added with AnimeJS for production
    // For now using Framer Motion for all animations
  }, []);

  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-left lg:text-left">
            <motion.h1
              className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ruis Michel
              </span>
            </motion.h1>

            <div className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-20">
              <TypedText
                strings={[
                  'Full Stack Developer',
                  'React Specialist',
                  'Node.js Expert',
                  'UI/UX Enthusiast',
                  'Problem Solver',
                ]}
                className="text-info font-semibold"
              />
            </div>

            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <TypedText strings={[
                "Passionate about creating exceptional digital experiences with modern technologies. I build scalable web applications that solve real - world problems and deliver outstanding user experiences."
              ]} />
            </motion.p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-success border-primary text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg"
              >
                <Github className="mr-2" size={20} />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - 3D Carousel */}
          <div className="hero-carousel flex justify-center lg:justify-end">
            <SymbolCarousel />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white/70 hover:text-white transition-colors duration-300" size={32} />
      </motion.div>
    </section>
  );
};