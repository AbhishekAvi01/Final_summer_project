import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-auto">
          <div className="w-full p-4 md:px-12 lg:px-32 m-0">
            {children}
          </div>
        </main>
      </div>
      {/* Footer - always at the bottom */}
      <footer className="w-full mt-auto bg-white/80 dark:bg-gray-900/80 border-t border-gray-200/20 dark:border-gray-700/20 py-6 px-4 flex justify-center">
        <div className="transition-all duration-200 rounded-lg p-4 shadow-md bg-gray-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer text-center max-w-4xl w-full flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-col items-start">
            <p className="text-2xl font-bold mb-2">Contact Information</p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-gray-500 font-medium">Email</p>
                <div className="flex items-center gap-2">
                  <a href="mailto:abhishekkumar04923@gmail.com" className="text-lg text-blue-700 hover:underline">abhishekkumar04923@gmail.com</a>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Phone</p>
                <div className="flex items-center gap-2">
                  <a href="tel:9267991060" className="text-lg text-blue-700 hover:underline">9267991060</a>
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Location</p>
                <div className="flex items-center gap-2">
                  <span className="text-lg">Jaipur, Rajasthan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-2xl">
            {/* Social icons (replace # with your links) */}
            <a href="https://github.com/abhishekkumar04923" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg></a>
            <a href="https://www.linkedin.com/in/abhishekkumar04923/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a2 2 0 00-4 0v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5a6 6 0 016-6z" /><circle cx="8" cy="8" r="3" /></svg></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;