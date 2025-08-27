import React from 'react';
import { FileText, Share2, Shield, Zap, Users, Search, Download, Eye, Trash2, Upload, Link, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';

const FeaturesPage = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Easy PDF Upload",
      description: "Drag and drop or click to upload PDF files up to 10MB. Simple, fast, and secure file sharing.",
      details: [
        "Drag & drop interface",
        "File size validation",
        "PDF format validation",
        "Progress indicators"
      ]
    },
    {
      icon: <Link className="h-8 w-8" />,
      title: "Link Sharing",
      description: "Share valuable study resources, articles, and educational links with your community.",
      details: [
        "URL validation",
        "Link preview",
        "Resource categorization",
        "Easy sharing"
      ]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Smart Filtering",
      description: "Filter and organize content by type - PDFs, links, or view everything at once.",
      details: [
        "Type-based filtering",
        "Real-time search",
        "Content organization",
        "Quick access"
      ]
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Easy Downloads",
      description: "Download shared PDFs with one click. Access your resources offline anytime.",
      details: [
        "One-click download",
        "File size display",
        "Download tracking",
        "Offline access"
      ]
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Preview & View",
      description: "Preview PDFs and open links directly in your browser. No need to download everything.",
      details: [
        "PDF preview",
        "Link opening",
        "External link handling",
        "Quick viewing"
      ]
    },
    {
      icon: <Trash2 className="h-8 w-8" />,
      title: "Content Management",
      description: "Delete your own shared content. Full control over what you've uploaded.",
      details: [
        "Own content deletion",
        "Confirmation dialogs",
        "Instant updates",
        "Content ownership"
      ]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Authentication",
      description: "JWT-based authentication with bcrypt password hashing. Your data is safe with us.",
      details: [
        "JWT tokens",
        "Password hashing",
        "Secure sessions",
        "Data protection"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Optimized for all devices - mobile, tablet, laptop, and desktop. Perfect experience everywhere.",
      details: [
        "Mobile-first design",
        "Tablet optimization",
        "Desktop experience",
        "Touch-friendly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful <span className="text-primary-600">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover all the amazing features that make Share Me the perfect platform 
            for sharing and discovering study resources.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4 text-primary-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <FileText className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">File Support</h3>
              <p className="text-sm text-gray-600">PDF files up to 10MB</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <Users className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">User Management</h3>
              <p className="text-sm text-gray-600">Secure registration & login</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <Shield className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
              <p className="text-sm text-gray-600">JWT + bcrypt encryption</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-4 mb-4">
                <Zap className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-sm text-gray-600">Fast & responsive design</p>
            </div>
          </div>
        </div>

        {/* Device Support */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Works on All Devices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile</h3>
                <p className="text-sm text-gray-600">Optimized for smartphones</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-semibold text-gray-900 mb-2">Tablet</h3>
                <p className="text-sm text-gray-600">Perfect for iPads & tablets</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="font-semibold text-gray-900 mb-2">Laptop</h3>
                <p className="text-sm text-gray-600">Great for students</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-4xl mb-4">🖥️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Desktop</h3>
                <p className="text-sm text-gray-600">Full desktop experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who are already sharing and discovering amazing study resources.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
               href="/dashboard"
               className="btn-primary inline-flex items-center justify-center"
             >
               Start Sharing Now
             </a>
             <a
               href="/about"
               className="btn-secondary inline-flex items-center justify-center"
             >
               Learn More
             </a>
           </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturesPage;
