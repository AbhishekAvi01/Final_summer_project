import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';
import { personalInfo } from '../data/projects';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  const handleResumeDownload = () => {
    // TODO: Implement resume download
    console.log('Resume download triggered');
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 px-6 py-3 w-full z-50"
    >
      <nav className="flex items-center justify-between w-full">
        {/* Left: Logo/Name */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold gradient-text">{personalInfo.name.split(' ')[0]}</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</a>
          <a href="/projects" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Projects</a>
          <a href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Contact</a>
        </div>

        {/* Right: Resume & Theme Switcher */}
        <div className="flex items-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Resume</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;