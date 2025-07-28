import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  FolderOpen, 
  Mail, 
  Settings, 
  ChevronDown, 
  ChevronRight,
  X
} from 'lucide-react';
import { projectCategories } from '../data/projects';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['projects']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' }
  };

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/admin', label: 'Admin', icon: Settings }
  ];

  return (
    <>
      <motion.aside
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-r border-gray-200/20 dark:border-gray-700/20 lg:translate-x-0"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200/20 dark:border-gray-700/20">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold gradient-text">Portfolio</h2>
              <button
                onClick={onClose}
                className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {/* Main Navigation */}
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => window.innerWidth < 1024 && onClose()}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}

            {/* Projects Section */}
            <div className="mt-6">
              <button
                onClick={() => toggleSection('projects')}
                className="flex items-center justify-between w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FolderOpen size={20} />
                  <span className="font-medium text-gray-700 dark:text-gray-300">Projects</span>
                </div>
                {expandedSections.includes('projects') ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              <AnimatePresence>
                {expandedSections.includes('projects') && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                  >
                    <NavLink
                      to="/projects"
                      onClick={() => window.innerWidth < 1024 && onClose()}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-lg text-sm transition-colors ${
                          isActive && window.location.pathname === '/projects'
                            ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        }`
                      }
                    >
                      All Projects
                    </NavLink>
                    
                    {projectCategories.map((category) => (
                      <NavLink
                        key={category.id}
                        to={`/projects/${category.id}`}
                        onClick={() => window.innerWidth < 1024 && onClose()}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                          }`
                        }
                      >
                        <span className="flex items-center space-x-2">
                          <span>{category.icon}</span>
                          <span>{category.name}</span>
                        </span>
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2025 Abhishek Kumar
              </p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Desktop sidebar always visible */}
      <div className="hidden lg:block w-80" />
    </>
  );
};

export default Sidebar;