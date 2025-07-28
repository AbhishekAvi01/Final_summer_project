import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Eye,
  Github,
  ExternalLink
} from 'lucide-react';
import { Project, projects as initialProjects, projectCategories } from '../data/projects';

const Admin: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [viewProject, setViewProject] = useState<Project | null>(null);

  const emptyProject: Omit<Project, 'id'> = {
    title: '',
    description: '',
    fullDescription: '',
    techStack: [],
    category: 'fullstack',
    tags: [],
    features: [],
    challenges: [],
    outcomes: []
  };

  const handleCreate = () => {
    setIsCreating(true);
    setEditingProject({
      ...emptyProject,
      id: Date.now().toString()
    });
  };

  const handleEdit = (project: Project) => {
    setEditingProject({ ...project });
    setIsCreating(false);
  };

  const handleSave = () => {
    if (!editingProject) return;

    if (isCreating) {
      setProjects([...projects, editingProject]);
    } else {
      setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
    }

    setEditingProject(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingProject(null);
    setIsCreating(false);
  };

  const updateEditingProject = (field: keyof Project, value: string | string[] | number | boolean) => {
    if (!editingProject) return;
    setEditingProject({ ...editingProject, [field]: value });
  };

  const updateArrayField = (field: keyof Project, value: string, index?: number) => {
    if (!editingProject) return;
    const currentArray = editingProject[field] as string[];
    
    if (index !== undefined) {
      // Update existing item
      const newArray = [...currentArray];
      newArray[index] = value;
      setEditingProject({ ...editingProject, [field]: newArray });
    } else {
      // Add new item
      if (value.trim()) {
        setEditingProject({ 
          ...editingProject, 
          [field]: [...currentArray, value.trim()] 
        });
      }
    }
  };

  const removeArrayItem = (field: keyof Project, index: number) => {
    if (!editingProject) return;
    const currentArray = editingProject[field] as string[];
    const newArray = currentArray.filter((_, i) => i !== index);
    setEditingProject({ ...editingProject, [field]: newArray });
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
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold gradient-text">Admin Panel</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Manage your portfolio projects
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreate}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus size={18} />
          <span>Add Project</span>
        </motion.button>
      </motion.div>

      {/* Edit/Create Form */}
      {editingProject && (
        <motion.div
          variants={itemVariants}
          className="glass-effect rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {isCreating ? 'Create New Project' : 'Edit Project'}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              >
                <Save size={18} />
                <span>Save</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <X size={18} />
                <span>Cancel</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => updateEditingProject('title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                  placeholder="Project title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <select
                  value={editingProject.category}
                  onChange={(e) => updateEditingProject('category', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                >
                  {projectCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Short Description *</label>
                <textarea
                  value={editingProject.description}
                  onChange={(e) => updateEditingProject('description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description for project cards"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Full Description *</label>
                <textarea
                  value={editingProject.fullDescription}
                  onChange={(e) => updateEditingProject('fullDescription', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                  placeholder="Detailed description for project detail page"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">GitHub Link</label>
                <input
                  type="url"
                  value={editingProject.githubLink || ''}
                  onChange={(e) => updateEditingProject('githubLink', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                  placeholder="https://github.com/username/repo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Live Demo Link</label>
                <input
                  type="url"
                  value={editingProject.liveDemo || ''}
                  onChange={(e) => updateEditingProject('liveDemo', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                  placeholder="https://your-demo.com"
                />
              </div>
            </div>

            {/* Arrays */}
            <div className="space-y-4">
              {/* Tech Stack */}
              <div>
                <label className="block text-sm font-medium mb-2">Tech Stack</label>
                <div className="space-y-2">
                  {editingProject.techStack.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={tech}
                        onChange={(e) => updateArrayField('techStack', e.target.value, index)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                      />
                      <button
                        onClick={() => removeArrayItem('techStack', index)}
                        className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => updateArrayField('techStack', 'New Technology')}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    + Add Technology
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium mb-2">Tags</label>
                <div className="space-y-2">
                  {editingProject.tags.map((tag, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={tag}
                        onChange={(e) => updateArrayField('tags', e.target.value, index)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                      />
                      <button
                        onClick={() => removeArrayItem('tags', index)}
                        className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => updateArrayField('tags', 'New Tag')}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    + Add Tag
                  </button>
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium mb-2">Features</label>
                <div className="space-y-2">
                  {editingProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => updateArrayField('features', e.target.value, index)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
                      />
                      <button
                        onClick={() => removeArrayItem('features', index)}
                        className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => updateArrayField('features', 'New Feature')}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    + Add Feature
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Projects List */}
      <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Projects ({projects.length})</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-none"
  style={{ marginLeft: 0, marginRight: 0, maxWidth: '100vw' }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">
                    {projectCategories.find(cat => cat.id === project.category)?.icon}
                  </span>
                  <div>
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {projectCategories.find(cat => cat.id === project.category)?.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
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
              </div>

              <div className="flex items-center space-x-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                <button
                  onClick={() => setViewProject(project)}
                  className="p-2 text-blue-600 hover:text-blue-700 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  <Eye size={16} />
                </button>
                <button
                  onClick={() => handleEdit(project)}
                  className="p-2 text-green-600 hover:text-green-700 rounded-lg hover:bg-green-100 dark:hover:bg-green-900"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 text-red-600 hover:text-red-700 rounded-lg hover:bg-red-100 dark:hover:bg-red-900"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* View Project Modal */}
      {viewProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">{viewProject.title}</h2>
              <button
                onClick={() => setViewProject(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Category</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {projectCategories.find(cat => cat.id === viewProject.category)?.name}
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Description</h3>
                <p className="text-gray-600 dark:text-gray-300">{viewProject.fullDescription}</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {viewProject.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {viewProject.features.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {viewProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h3 className="font-medium mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {viewProject.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Admin;