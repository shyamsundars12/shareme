import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Upload, Eye, FileText, Link } from 'lucide-react';
import UploadForm from '../components/UploadForm';
import NoteCard from '../components/NoteCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { user, logout, isAuthenticated, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('upload');
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loadingNotes, setLoadingNotes] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchNotes();
    }
  }, [isAuthenticated]);

  const fetchNotes = async () => {
    setLoadingNotes(true);
    try {
      const response = await axios.get('/api/notes');
      setNotes(response.data.data.notes);
    } catch (error) {
      console.error('Error fetching notes:', error);
      toast.error('Failed to load notes');
    } finally {
      setLoadingNotes(false);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`/api/notes/${noteId}`);
      toast.success('Note deleted successfully');
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error('Failed to delete note');
    }
  };

  const handleUploadSuccess = () => {
    fetchNotes();
    setActiveTab('view');
  };

  const filteredNotes = notes.filter(note => {
    if (filter === 'all') return true;
    return note.type === filter;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-green-50 flex items-center justify-center">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Share2 className="h-4 w-4 text-white" />
              </div>
            </div>
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
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-8 flex-grow">
        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 mb-4 sm:mb-6 lg:mb-8 bg-white rounded-lg shadow-sm p-2 sm:p-1">
                      <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'upload'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Upload className="h-5 w-5" />
                <span className="hidden sm:inline">Upload & Share</span>
                <span className="sm:hidden">Upload</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('view')}
              className={`flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'view'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Eye className="h-5 w-5" />
                <span className="hidden sm:inline">View Notes</span>
                <span className="sm:hidden">View</span>
              </div>
            </button>
        </div>

        {/* Content */}
        {activeTab === 'upload' ? (
          <div className="max-w-2xl mx-auto">
            <UploadForm onUploadSuccess={handleUploadSuccess} />
          </div>
        ) : (
          <div>
                         {/* Filter Controls */}
             <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-2">
               <button
                 onClick={() => setFilter('all')}
                 className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base ${
                   filter === 'all'
                     ? 'bg-primary-600 text-white'
                     : 'bg-white text-gray-600 hover:bg-gray-100'
                 }`}
               >
                 All Notes ({notes.length})
               </button>
               <button
                 onClick={() => setFilter('pdf')}
                 className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base ${
                   filter === 'pdf'
                     ? 'bg-red-600 text-white'
                     : 'bg-white text-gray-600 hover:bg-gray-100'
                 }`}
               >
                 <FileText className="h-4 w-4" />
                 <span>PDFs ({notes.filter(n => n.type === 'pdf').length})</span>
               </button>
               <button
                 onClick={() => setFilter('link')}
                 className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base ${
                   filter === 'link'
                     ? 'bg-blue-600 text-white'
                     : 'bg-white text-gray-600 hover:bg-gray-100'
                 }`}
               >
                 <Link className="h-4 w-4" />
                 <span>Links ({notes.filter(n => n.type === 'link').length})</span>
               </button>
             </div>

            {/* Notes Grid */}
            {loadingNotes ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            ) : filteredNotes.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  {filter === 'all' ? (
                    <FileText className="h-16 w-16 mx-auto" />
                  ) : filter === 'pdf' ? (
                    <FileText className="h-16 w-16 mx-auto" />
                  ) : (
                    <Link className="h-16 w-16 mx-auto" />
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No {filter === 'all' ? '' : filter === 'pdf' ? 'PDF ' : 'link '}notes found
                </h3>
                <p className="text-gray-600">
                  {filter === 'all' 
                    ? 'Start by uploading a PDF or sharing a link!'
                    : `No ${filter === 'pdf' ? 'PDFs' : 'links'} have been shared yet.`
                  }
                </p>
                {filter !== 'all' && (
                  <button
                    onClick={() => setFilter('all')}
                    className="mt-4 btn-primary"
                  >
                    View All Notes
                  </button>
                )}
              </div>
            ) : (
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredNotes.map((note) => (
                  <NoteCard
                    key={note._id}
                    note={note}
                    onDelete={handleDeleteNote}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
