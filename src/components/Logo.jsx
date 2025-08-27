import React from 'react';
import { FileText, Share2 } from 'lucide-react';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: {
      container: 'w-8 h-8',
      icon: 'h-4 w-4',
      share: 'w-3 h-3',
      shareIcon: 'h-1.5 w-1.5',
      text: 'text-lg'
    },
    md: {
      container: 'w-10 h-10',
      icon: 'h-5 w-5',
      share: 'w-4 h-4',
      shareIcon: 'h-2 w-2',
      text: 'text-xl'
    },
    lg: {
      container: 'w-16 h-16',
      icon: 'h-8 w-8',
      share: 'w-6 h-6',
      shareIcon: 'h-3 w-3',
      text: 'text-2xl'
    },
    xl: {
      container: 'w-20 h-20',
      icon: 'h-10 w-10',
      share: 'w-8 h-8',
      shareIcon: 'h-4 w-4',
      text: 'text-4xl'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className={`${currentSize.container} bg-primary-600 rounded-full flex items-center justify-center shadow-lg`}>
          <FileText className={`${currentSize.icon} text-white`} />
        </div>
                 <div className={`absolute -top-1 -right-1 ${currentSize.share} bg-primary-500 rounded-full flex items-center justify-center`}>
           <Share2 className={`${currentSize.shareIcon} text-white`} />
         </div>
      </div>
      {showText && (
        <span className={`font-bold text-gray-900 ${currentSize.text}`}>
          Share Me
        </span>
      )}
    </div>
  );
};

export default Logo;
