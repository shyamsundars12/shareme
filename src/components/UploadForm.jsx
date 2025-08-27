import React, { useState } from 'react';
import { Upload, Link, FileText, X } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UploadForm = ({ onUploadSuccess }) => {
  const [activeTab, setActiveTab] = useState('pdf');
  const [pdfForm, setPdfForm] = useState({
    title: '',
    description: '',
    file: null
  });
  const [linkForm, setLinkForm] = useState({
    title: '',
    description: '',
    linkUrl: ''
  });
  const [loading, setLoading] = useState(false);

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        toast.error('Please select a PDF file');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      setPdfForm({ ...pdfForm, file });
    }
  };

  const handlePdfSubmit = async (e) => {
    e.preventDefault();
    if (!pdfForm.file) {
      toast.error('Please select a PDF file');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('pdf', pdfForm.file);
    formData.append('title', pdfForm.title);
    formData.append('description', pdfForm.description);

    try {
      const response = await axios.post('/api/notes/upload-pdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('PDF uploaded successfully!');
      setPdfForm({ title: '', description: '', file: null });
      onUploadSuccess();
    } catch (error) {
      const message = error.response?.data?.message || 'Upload failed';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleLinkSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/notes/share-link', linkForm);
      toast.success('Link shared successfully!');
      setLinkForm({ title: '', description: '', linkUrl: '' });
      onUploadSuccess();
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to share link';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const removeFile = () => {
    setPdfForm({ ...pdfForm, file: null });
  };

  return (
    <div className="card w-full">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-1 mb-4 sm:mb-6 bg-gray-100 p-2 sm:p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('pdf')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${
            activeTab === 'pdf'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Upload PDF</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('link')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors text-sm sm:text-base ${
            activeTab === 'link'
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <div className="flex items-center justify-center space-x-2">
            <Link className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Share Link</span>
          </div>
        </button>
      </div>

      {activeTab === 'pdf' ? (
        <form onSubmit={handlePdfSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={pdfForm.title}
              onChange={(e) => setPdfForm({ ...pdfForm, title: e.target.value })}
              className="input-field"
              placeholder="Enter PDF title"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={pdfForm.description}
              onChange={(e) => setPdfForm({ ...pdfForm, description: e.target.value })}
              className="input-field"
              rows="3"
              placeholder="Enter description (optional)"
              maxLength="500"
            />
          </div>

          <div>
            <label htmlFor="pdf-file" className="block text-sm font-medium text-gray-700 mb-2">
              PDF File *
            </label>
            {!pdfForm.file ? (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
                <input
                  type="file"
                  id="pdf-file"
                  accept=".pdf"
                  onChange={handlePdfChange}
                  className="hidden"
                />
                <label htmlFor="pdf-file" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Click to upload PDF</p>
                  <p className="text-sm text-gray-500">Maximum file size: 10MB</p>
                </label>
              </div>
            ) : (
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-red-500" />
                    <div>
                      <p className="font-medium text-gray-900">{pdfForm.file.name}</p>
                      <p className="text-sm text-gray-500">
                        {(pdfForm.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1 text-gray-400 hover:text-red-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !pdfForm.file}
            className="btn-primary w-full flex items-center justify-center"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Uploading...
              </div>
            ) : (
              'Upload PDF'
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleLinkSubmit} className="space-y-4">
          <div>
            <label htmlFor="link-title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="link-title"
              value={linkForm.title}
              onChange={(e) => setLinkForm({ ...linkForm, title: e.target.value })}
              className="input-field"
              placeholder="Enter link title"
              required
            />
          </div>

          <div>
            <label htmlFor="link-description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="link-description"
              value={linkForm.description}
              onChange={(e) => setLinkForm({ ...linkForm, description: e.target.value })}
              className="input-field"
              rows="3"
              placeholder="Enter description (optional)"
              maxLength="500"
            />
          </div>

          <div>
            <label htmlFor="link-url" className="block text-sm font-medium text-gray-700 mb-2">
              URL *
            </label>
            <input
              type="url"
              id="link-url"
              value={linkForm.linkUrl}
              onChange={(e) => setLinkForm({ ...linkForm, linkUrl: e.target.value })}
              className="input-field"
              placeholder="https://example.com"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sharing...
              </div>
            ) : (
              'Share Link'
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default UploadForm;
