import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Button } from '@/components/ui/button';

// Sample project data - replace with your actual projects
const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI/UX, secure payments, and admin dashboard.',
    longDescription: 'This comprehensive e-commerce platform features a React frontend with TypeScript, Node.js backend, PostgreSQL database, and Stripe integration. The platform includes user authentication, product management, shopping cart, order tracking, and an admin dashboard with analytics. Built with scalability and performance in mind.',
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Express.js'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    longDescription: 'A sophisticated task management application built with React and real-time WebSocket connections. Features include drag-and-drop task boards, team collaboration, file attachments, due date reminders, and progress tracking. The backend uses Node.js with Socket.io for real-time updates.',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
    ],
    technologies: ['React', 'Socket.io', 'MongoDB', 'Express.js', 'Material-UI', 'JWT'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/yourusername/task-manager',
    category: 'Web App'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with forecasts, maps, and location-based weather data.',
    longDescription: 'An elegant weather dashboard that provides comprehensive weather information including current conditions, 7-day forecasts, interactive weather maps, and severe weather alerts. Built with React and integrates multiple weather APIs for accurate data. Features geolocation support and favorite locations.',
    images: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
      'https://images.unsplash.com/photo-1592210454359-9043f067919b'
    ],
    technologies: ['React', 'Weather API', 'Chart.js', 'Geolocation', 'CSS Modules'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    category: 'Frontend'
  },
  {
    id: '4',
    title: 'Social Media Platform',
    description: 'A modern social media platform with posts, stories, messaging, and video calls.',
    longDescription: 'A comprehensive social media platform featuring user profiles, posts with media uploads, stories, real-time messaging, video calls, and social interactions. Built with modern technologies including React, Node.js, WebRTC for video calls, and WebSocket for real-time features.',
    images: [
      'https://images.unsplash.com/photo-1611605698335-8b1569810432',
      'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07',
      'https://images.unsplash.com/photo-1607703703520-bb638e84caf2'
    ],
    technologies: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'MongoDB', 'AWS S3', 'Express.js'],
    liveUrl: 'https://example-social.com',
    githubUrl: 'https://github.com/yourusername/social-platform',
    category: 'Full Stack'
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects with smooth animations and modern design.',
    longDescription: 'This portfolio website features a modern design with smooth animations, responsive layout, and optimized performance. Built with React and Framer Motion for animations, it includes project showcases, skill demonstrations, contact forms, and blog integration. Optimized for SEO and accessibility.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    ],
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'TypeScript'],
    liveUrl: 'https://example-portfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    category: 'Frontend'
  },
  {
    id: '6',
    title: 'Learning Management System',
    description: 'An educational platform with courses, quizzes, progress tracking, and video streaming.',
    longDescription: 'A comprehensive learning management system designed for educational institutions and online learning. Features include course creation, video streaming, interactive quizzes, progress tracking, student-teacher communication, and certificate generation. Built with scalability and user experience in mind.',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Video.js', 'AWS', 'Redis', 'Express.js'],
    liveUrl: 'https://example-lms.com',
    githubUrl: 'https://github.com/yourusername/lms',
    category: 'Full Stack'
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Web App'];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/20">
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
            My Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={handleViewDetails}
            />
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};