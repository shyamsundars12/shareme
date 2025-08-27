import React from 'react';
import Logo from './Logo';

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-green-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Logo size="xl" showText={false} />
        </div>
        
        {/* App Name */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Share Me</h1>
        <p className="text-gray-600 mb-8">Notes Sharing Platform</p>
        
        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-500 mt-6 text-sm">Loading your workspace...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
