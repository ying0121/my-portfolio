import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: '1',
    projectName: 'E-Commerce Platform Redesign',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: 'Jan 2023 - Present',
    role: 'Full Stack Developer',
    description: 'Led the complete redesign and development of a high-traffic e-commerce platform serving 100K+ users. Implemented microservices architecture, optimized database queries resulting in 40% performance improvement, and integrated advanced payment systems.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    achievements: [
      'Increased conversion rate by 25%',
      'Reduced page load time by 40%',
      'Implemented automated testing pipeline'
    ]
  },
  {
    id: '2',
    projectName: 'Mobile Banking Application',
    company: 'FinanceFirst Bank',
    location: 'New York, NY',
    period: 'Jun 2022 - Dec 2022',
    role: 'Frontend Developer',
    description: 'Developed a secure mobile banking application with biometric authentication, real-time transaction monitoring, and comprehensive financial management tools. Collaborated with security teams to ensure compliance with banking regulations.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'REST APIs'],
    achievements: [
      'Launched app with 4.8/5 App Store rating',
      'Achieved 99.9% uptime SLA',
      'Implemented advanced security features'
    ]
  },
  {
    id: '3',
    projectName: 'Learning Management System',
    company: 'EduTech Innovations',
    location: 'Austin, TX',
    period: 'Sep 2021 - May 2022',
    role: 'Backend Developer',
    description: 'Built scalable backend infrastructure for an online learning platform supporting 50K+ concurrent users. Designed and implemented RESTful APIs, real-time messaging system, and automated grading mechanisms.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Redis'],
    achievements: [
      'Supported 50K+ concurrent users',
      'Reduced API response time by 60%',
      'Implemented real-time collaboration features'
    ]
  },
  {
    id: '4',
    projectName: 'Healthcare Data Analytics',
    company: 'MedTech Solutions',
    location: 'Boston, MA',
    period: 'Jan 2021 - Aug 2021',
    role: 'Full Stack Developer',
    description: 'Developed a comprehensive healthcare analytics platform for processing and visualizing patient data. Created interactive dashboards, implemented data encryption, and ensured HIPAA compliance throughout the application.',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
    achievements: [
      'Processed 1M+ patient records',
      'Achieved HIPAA compliance certification',
      'Reduced data processing time by 50%'
    ]
  }
];

const TimelineItem = ({ experience, index, isLast }: { experience: typeof experiences[0], index: number, isLast: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1/2 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-primary/30 transform -translate-x-1/2 hidden md:block" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 hidden md:block">
        <div className="absolute inset-1 bg-background rounded-full" />
      </div>
      
      {/* Content */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
        >
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-2">{experience.projectName}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase size={14} />
                <span>{experience.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>
          
          {/* Role badge */}
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {experience.role}
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-4">
            {experience.description}
          </p>
          
          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary/50 text-secondary-foreground px-2 py-1 rounded text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Work Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            My professional journey and the projects I've contributed to
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main timeline line for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/30 md:hidden" />
          
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};