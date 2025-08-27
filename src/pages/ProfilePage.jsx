import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Calendar, Users, FileText, Link, Clock, Edit, Shield, Activity } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const [userStats, setUserStats] = useState({
    totalNotes: 0,
    pdfCount: 0,
    linkCount: 0,
    recentActivity: []
  });
  const [loadingStats, setLoadingStats] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchUserStats();
    }
  }, [isAuthenticated, user]);

  const fetchUserStats = async () => {
    setLoadingStats(true);
    try {
      const response = await axios.get('/api/notes/my-notes');
      const notes = response.data.data.notes;
      
      const stats = {
        totalNotes: notes.length,
        pdfCount: notes.filter(note => note.type === 'pdf').length,
        linkCount: notes.filter(note => note.type === 'link').length,
        recentActivity: notes.slice(0, 5).map(note => ({
          id: note._id,
          title: note.title,
          type: note.type,
          createdAt: note.createdAt,
          action: 'uploaded'
        }))
      };
      
      setUserStats(stats);
    } catch (error) {
      console.error('Error fetching user stats:', error);
      toast.error('Failed to load profile statistics');
    } finally {
      setLoadingStats(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInHours < 48) return 'Yesterday';
    return formatDate(dateString);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8 flex-grow">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-sm sm:text-base text-gray-600">Manage your account and view your activity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1">
            <div className="card">
                             <div className="text-center mb-6">
                 <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary-100">
                   {user?.profilePhoto ? (
                     <img
                       src={`https://shareme-backend-pi.vercel.app/${user.profilePhoto}`}
                       alt="Profile"
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         e.target.style.display = 'none';
                         e.target.nextSibling.style.display = 'flex';
                       }}
                     />
                   ) : null}
                   <div className={`w-full h-full bg-primary-100 flex items-center justify-center ${user?.profilePhoto ? 'hidden' : 'flex'}`}>
                     <User className="h-12 w-12 text-primary-600" />
                   </div>
                 </div>
                 <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
                 <p className="text-gray-600">Member since {formatDate(user?.createdAt)}</p>
               </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{user?.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-medium text-gray-900">{user?.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Age</p>
                    <p className="font-medium text-gray-900">{user?.age} years old</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Gender</p>
                    <p className="font-medium text-gray-900 capitalize">{user?.gender}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                  <Edit className="h-4 w-4" />
                  <span>Edit Profile</span>
                </button>
              </div>
            </div>
          </div>

          {/* Statistics and Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="card text-center">
                <div className="bg-primary-100 rounded-lg p-3 w-fit mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {loadingStats ? '...' : userStats.totalNotes}
                </h3>
                <p className="text-gray-600">Total Notes</p>
              </div>

              <div className="card text-center">
                <div className="bg-red-100 rounded-lg p-3 w-fit mx-auto mb-4">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {loadingStats ? '...' : userStats.pdfCount}
                </h3>
                <p className="text-gray-600">PDF Files</p>
              </div>

              <div className="card text-center">
                <div className="bg-blue-100 rounded-lg p-3 w-fit mx-auto mb-4">
                  <Link className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {loadingStats ? '...' : userStats.linkCount}
                </h3>
                <p className="text-gray-600">Shared Links</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
              </div>

              {loadingStats ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                </div>
              ) : userStats.recentActivity.length === 0 ? (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">No activity yet</p>
                  <p className="text-sm text-gray-500">Start by uploading your first PDF or sharing a link!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {userStats.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-lg ${
                        activity.type === 'pdf' ? 'bg-red-100' : 'bg-blue-100'
                      }`}>
                        {activity.type === 'pdf' ? (
                          <FileText className="h-5 w-5 text-red-600" />
                        ) : (
                          <Link className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-600">
                          {activity.action} a {activity.type === 'pdf' ? 'PDF file' : 'link'}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>{formatTimeAgo(activity.createdAt)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Account Security */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-6 w-6 text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900">Account Security</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Account Status</p>
                      <p className="text-sm text-gray-600">Active and secure</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Password</p>
                      <p className="text-sm text-gray-600">Last updated securely</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-600">Not enabled</p>
                    </div>
                  </div>
                  <button className="btn-secondary text-sm">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfilePage;
