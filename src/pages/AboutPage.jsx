import React from 'react';
import { Users, FileText, Share2, Shield, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-primary-600">Share Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A modern platform designed to revolutionize how students and educators share 
            and discover study resources. We believe knowledge should be accessible to everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              To create a collaborative learning environment where students can easily share 
              PDF documents, study materials, and valuable resources with their peers and educators.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a world where knowledge sharing is seamless, secure, and beneficial 
              for the entire educational community.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8">
            <div className="text-center">
              <Users className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Driven</h3>
              <p className="text-gray-600">
                Built by students, for students. Your feedback shapes our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy PDF Sharing</h3>
              <p className="text-gray-600">
                Upload and share PDF documents with just a few clicks. 
                No complicated processes, just simple sharing.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <Share2 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Link Sharing</h3>
              <p className="text-gray-600">
                Share valuable study resources, articles, and links 
                that can help your peers in their learning journey.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is protected with industry-standard security. 
                We respect your privacy and keep your information safe.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast & Responsive</h3>
              <p className="text-gray-600">
                Optimized for all devices - mobile, tablet, laptop, and desktop. 
                Access your resources anywhere, anytime.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focused</h3>
              <p className="text-gray-600">
                Connect with fellow students, share knowledge, and build 
                a supportive learning community together.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="bg-primary-100 rounded-lg p-3 w-fit mb-4">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Organized Content</h3>
              <p className="text-gray-600">
                Filter and organize your shared content by type. 
                Find exactly what you need when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 mb-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet the Developer</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Users className="h-12 w-12 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sanjay Panneerselvan</h3>
              <p className="text-gray-600 mb-4">Full-Stack Developer & Creator</p>
              <p className="text-gray-600 text-sm">
                Passionate about creating tools that make learning easier and more accessible 
                for students around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
               href="mailto:support@shareme.com"
               className="btn-primary inline-flex items-center justify-center"
             >
               Contact Support
             </a>
             <a
               href="/dashboard"
               className="btn-secondary inline-flex items-center justify-center"
             >
               Start Sharing
             </a>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
