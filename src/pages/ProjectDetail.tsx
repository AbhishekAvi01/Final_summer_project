import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Tag,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Linkedin
} from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { useState } from 'react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  const [projectCode, setProjectCode] = useState<string | null>(null);
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const category = projectCategories.find(cat => cat.id === project.category);

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

  const handleViewCode = async () => {
    // Determine file extension based on project tech stack
    const getFileExtension = () => {
      const techStack = project.techStack.map(tech => tech.toLowerCase());
      if (techStack.includes('html') || techStack.includes('javascript') || techStack.includes('css')) {
        return 'html';
      }
      return 'py'; // Default to Python
    };

    const extension = getFileExtension();
    
    try {
      const res = await fetch(`/code/${project.id}.${extension}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const code = await res.text();
      setProjectCode(code);
      setShowCodeModal(true);
    } catch (error) {
      console.error('Error loading code:', error);
      setProjectCode(`<!-- Error loading code: ${error.message} -->
/* 
 * Code file not found for this project.
 * Expected file: /code/${project.id}.${extension}
 * 
 * Please ensure the code file exists in the public/code/ directory.
 */`);
      setShowCodeModal(true);
    }
  };
  const handleCopyCode = () => {
    if (projectCode) {
      navigator.clipboard.writeText(projectCode);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 1500);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants}>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">{category?.icon}</span>
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {category?.name}
                </span>
                <h1 className="text-3xl font-bold gradient-text">{project.title}</h1>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={18} />
                <span>Code</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
            {/* View Code Button for all projects */}
            <button
              onClick={handleViewCode}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg"
            >
              <span>View Code</span>
            </button>
            {/* LinkedIn Button if linkedinUrl exists */}
            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#005983] transition-colors shadow-md hover:shadow-lg"
                title="View LinkedIn Post"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
        {/* Code Modal */}
        {showCodeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl w-full relative transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                onClick={() => setShowCodeModal(false)}
              >
                <span className="text-2xl">&times;</span>
              </button>
              <h2 className="text-2xl font-bold mb-4">Project Code</h2>
              <div className="relative">
                <pre className="overflow-auto rounded bg-gray-100 dark:bg-gray-800 p-4 text-sm max-h-96 border border-gray-200 dark:border-gray-700 transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-blue-900">
                  <code>{projectCode || 'Loading...'}</code>
                </pre>
                <button
                  onClick={handleCopyCode}
                  className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs shadow hover:shadow-md"
                >
                  {codeCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div> {/* End Project Header */}

      {/* Project Description */}
      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        {project.fullDescription}
      </p>

      {/* Tech Stack */}
      <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
          <Tag size={24} />
          <span>Technology Stack</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-3 rounded-lg text-center font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Project Features */}
      {project.features && project.features.length > 0 && (
        <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <CheckCircle size={24} className="text-green-600" />
            <span>Key Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <AlertTriangle size={24} className="text-yellow-600" />
            <span>Challenges & Solutions</span>
          </h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start space-x-3">
                <AlertTriangle size={16} className="text-yellow-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Outcomes & Impact */}
      {project.outcomes && project.outcomes.length > 0 && (
        <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <TrendingUp size={24} className="text-purple-600" />
            <span>Outcomes & Impact</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <TrendingUp size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tags */}
      <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Tags</h2>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Related Projects */}
      <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter(p => p.id !== project.id && p.category === project.category)
            .slice(0, 2)
            .map((relatedProject) => (
              <Link
                key={relatedProject.id}
                to={`/project/${relatedProject.id}`}
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h3 className="font-bold mb-2">{relatedProject.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {relatedProject.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {relatedProject.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;