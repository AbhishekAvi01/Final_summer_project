import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Code,
  Cloud,
  Brain,
  Zap
} from 'lucide-react';
import { personalInfo, projects, projectCategories } from '../data/projects';
import ProfileImage from '../components/ProfileImage';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skills = [
    { name: 'Full Stack Development', icon: Code, color: 'text-blue-600' },
    { name: 'Cloud & DevOps', icon: Cloud, color: 'text-green-600' },
    { name: 'Machine Learning', icon: Brain, color: 'text-purple-600' },
    { name: 'AI & Automation', icon: Zap, color: 'text-yellow-600' }
  ];

  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="py-12">
        <div className="relative">
          <ProfileImage 
            imageUrl={personalInfo.profileImage}
            name={personalInfo.name}
            size="lg"
          />
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 dark:text-gray-400 mb-8"
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/projects"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors hover-lift"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors hover-lift"
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-8">Expertise Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass-effect rounded-xl p-6 text-center hover-lift"
            >
              <skill.icon size={48} className={`mx-auto mb-4 ${skill.color}`} />
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link
            to="/projects"
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <div className="mb-4">
                <span className="text-2xl">
                  {projectCategories.find(cat => cat.id === project.category)?.icon}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="tech-tag">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
              
              <Link
                to={`/project/${project.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
              >
                <span>View Details</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Project Categories */}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-8">Project Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCategories.map((category) => {
            const categoryProjects = projects.filter(p => p.category === category.id);
            return (
              <Link
                key={category.id}
                to={`/projects/${category.id}`}
                className="glass-effect rounded-xl p-6 hover-lift block"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {categoryProjects.length} project{categoryProjects.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;