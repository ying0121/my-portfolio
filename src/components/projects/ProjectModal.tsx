import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-background rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
                  <p className="text-muted-foreground mt-1">{project.category}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-6 space-y-6">
                  {/* Image Carousel */}
                  <div className="relative aspect-video bg-secondary/20 rounded-lg overflow-hidden">
                    <img
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        >
                          <ChevronRight size={20} />
                        </button>
                        
                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <ExternalLink className="mr-2" size={16} />
                  View Live Site
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="flex-1"
                >
                  <Github className="mr-2" size={16} />
                  View Code
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};