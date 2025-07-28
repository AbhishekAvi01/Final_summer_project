import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Search, Filter, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects, projectCategories, Project } from '../data/projects';

const Projects: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const currentCategory = category 
    ? projectCategories.find(cat => cat.id === category)
    : null;

  const allTechStack = Array.from(
    new Set(projects.flatMap(project => project.techStack))
  ).sort();

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (category) {
      filtered = filtered.filter(project => project.category === category);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        project.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by selected technologies
    if (selectedTech.length > 0) {
      filtered = filtered.filter(project =>
        selectedTech.every(tech => project.techStack.includes(tech))
      );
    }

    setFilteredProjects(filtered);
  }, [category, searchTerm, selectedTech]);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          {currentCategory ? (
            <span className="flex items-center justify-center space-x-3">
              <span className="text-5xl">{currentCategory.icon}</span>
              <span className="gradient-text">{currentCategory.name}</span>
            </span>
          ) : (
            <span className="gradient-text">All Projects</span>
          )}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-6">
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects, technologies, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Technology Filter */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Filter size={20} />
              <h3 className="font-medium">Filter by Technology</h3>
              {selectedTech.length > 0 && (
                <button
                  onClick={() => setSelectedTech([])}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTechStack.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedTech.includes(tech)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-none"
        style={{marginLeft: 0, marginRight: 0, maxWidth: '100vw'}}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="glass-effect rounded-xl p-6 hover-lift"
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">
                    {projectCategories.find(cat => cat.id === project.category)?.icon}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {projectCategories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="tech-tag text-xs">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="tech-tag text-xs">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <Link
                to={`/project/${project.id}`}
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1"
              >
                <span>Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <motion.div
          variants={itemVariants}
          className="text-center py-12 glass-effect rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-2">No projects found</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Try adjusting your search terms or filters
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedTech([]);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;