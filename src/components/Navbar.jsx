import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: location.pathname === '/dashboard' },
    { name: 'Profile', href: '/profile', current: location.pathname === '/profile' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Features', href: '/features', current: location.pathname === '/features' },
    { name: 'Privacy Policy', href: '/privacy-policy', current: location.pathname === '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service', current: location.pathname === '/terms-of-service' },
  ];

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.current
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

                         {/* User Menu */}
             <div className="flex items-center space-x-4">
               <div className="flex items-center space-x-2 text-sm text-gray-600">
                 <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200">
                   {user?.profilePhoto ? (
                     <img
                       src={`http://localhost:5000${user.profilePhoto}`}
                       alt="Profile"
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                   ) : null}
                   <div className={`w-full h-full bg-primary-100 flex items-center justify-center ${user?.profilePhoto ? 'hidden' : 'flex'}`}>
                     <User className="h-4 w-4 text-primary-600" />
                   </div>
                 </div>
                 <span className="hidden lg:inline">Welcome, {user?.name}</span>
                 <span className="lg:hidden">{user?.name}</span>
               </div>
              <button
                onClick={handleLogout}
                className="btn-secondary flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.current
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
                         {/* Mobile User Info */}
             <div className="px-3 py-2 border-t border-gray-200 mt-4">
               <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                 <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                   {user?.profilePhoto ? (
                     <img
                       src={`http://localhost:5000${user.profilePhoto}`}
                       alt="Profile"
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                   ) : null}
                   <div className={`w-full h-full bg-primary-100 flex items-center justify-center ${user?.profilePhoto ? 'hidden' : 'flex'}`}>
                     <User className="h-3 w-3 text-primary-600" />
                   </div>
                 </div>
                 <span>Welcome, {user?.name}</span>
               </div>
              <button
                onClick={handleLogout}
                className="w-full btn-secondary flex items-center justify-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
