import React from 'react';
import { motion } from 'framer-motion';

interface ProfileImageProps {
  imageUrl?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  imageUrl, 
  name, 
  size = 'lg',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16 text-lg',
    md: 'w-24 h-24 text-xl',
    lg: 'w-32 h-32 text-4xl',
    xl: 'w-40 h-40 text-5xl'
  };

  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${sizeClasses[size]} mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden ${className}`}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${name} profile`}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to initials if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `<span class="text-white font-bold">${initials}</span>`;
            }
          }}
        />
      ) : (
        <span className="text-white font-bold">
          {initials}
        </span>
      )}
    </motion.div>
  );
};

export default ProfileImage; 