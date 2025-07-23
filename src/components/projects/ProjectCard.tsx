import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
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

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard = ({ project, index, onViewDetails }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.button
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
          </motion.button>
          <motion.button
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-foreground p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.button>
          <motion.button
            onClick={() => onViewDetails(project)}
            className="bg-accent hover:bg-accent/90 text-foreground p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye size={20} />
          </motion.button>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-primary-foreground">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1"
          >
            <Eye className="mr-2" size={14} />
            View Details
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink size={14} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};