import React from 'react';
import { FileText, Link, Download, ExternalLink, Trash2, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const NoteCard = ({ note, onDelete }) => {
  const { user } = useAuth();
  const isOwner = user && note.uploaderId._id === user._id;

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDownload = () => {
    if (note.type === 'pdf') {
      window.open(`https://shareme-backend-pi.vercel.app${note.fileUrl}`, '_blank');
    }
  };

  const handleLinkClick = () => {
    if (note.type === 'link') {
      window.open(note.linkUrl, '_blank');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      onDelete(note._id);
    }
  };

  return (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {note.type === 'pdf' ? (
            <div className="p-1.5 sm:p-2 bg-red-100 rounded-lg">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
            </div>
          ) : (
            <div className="p-1.5 sm:p-2 bg-blue-100 rounded-lg">
              <Link className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{note.title}</h3>
            <p className="text-xs sm:text-sm text-gray-500 flex items-center">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="truncate">{note.uploaderId.name}</span>
            </p>
          </div>
        </div>
        
        {isOwner && (
          <button
            onClick={handleDelete}
            className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
            title="Delete note"
          >
            <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        )}
      </div>

      {note.description && (
        <p className="text-gray-600 mb-4 line-clamp-2">{note.description}</p>
      )}

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>{formatDate(note.createdAt)}</span>
        {note.type === 'pdf' && (
          <span>{formatFileSize(note.fileSize)}</span>
        )}
      </div>

      <div className="flex space-x-2">
        {note.type === 'pdf' ? (
          <button
            onClick={handleDownload}
            className="btn-primary flex items-center space-x-2 text-sm sm:text-base"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download PDF</span>
            <span className="sm:hidden">Download</span>
          </button>
        ) : (
          <button
            onClick={handleLinkClick}
            className="btn-primary flex items-center space-x-2 text-sm sm:text-base"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Open Link</span>
            <span className="sm:hidden">Open</span>
          </button>
        )}
      </div>

      {note.type === 'pdf' && note.fileName && (
        <p className="text-xs text-gray-400 mt-2 truncate">
          File: {note.fileName}
        </p>
      )}
    </div>
  );
};

export default NoteCard;
