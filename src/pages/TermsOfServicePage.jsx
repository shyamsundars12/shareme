import React from 'react';
import { FileText, Shield, AlertTriangle, Users, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using Share Me ("the Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <div className="bg-primary-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Note:</strong> These terms apply to all users of the platform, including students, 
                educators, and any other individuals who access or use our services.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Permission is granted to:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Temporarily download one copy of the materials for personal, non-commercial transitory viewing only</li>
                    <li>• Share educational content and resources with other users</li>
                    <li>• Use the platform for educational purposes</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">This is the grant of a license, not a transfer of title, and under this license you may not:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Modify or copy the materials</li>
                    <li>• Use the materials for any commercial purpose or for any public display</li>
                    <li>• Attempt to reverse engineer any software contained on the platform</li>
                    <li>• Remove any copyright or other proprietary notations from the materials</li>
                    <li>• Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Registration</h3>
                  <p className="text-gray-600">
                    You are responsible for maintaining the confidentiality of your account and password. 
                    You agree to accept responsibility for all activities that occur under your account.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Upload</h3>
                  <p className="text-gray-600">
                    You are solely responsible for the content you upload. You must ensure that:
                  </p>
                  <ul className="space-y-2 text-gray-600 mt-2">
                    <li>• Content is educational and appropriate</li>
                    <li>• You have the right to share the content</li>
                    <li>• Content does not violate any copyright laws</li>
                    <li>• Content is not harmful, offensive, or inappropriate</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Uses</h2>
            <p className="text-gray-600 mb-4">
              You may not use the Service for any purpose that is unlawful or prohibited by these Terms of Service. 
              Specifically, you may not:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Upload content that is illegal, harmful, threatening, abusive, or defamatory</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Violate any intellectual property rights or copyright laws</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Attempt to gain unauthorized access to the Service or its systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Use the Service to distribute spam, malware, or other harmful content</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Impersonate another person or entity</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Use the Service for commercial purposes without permission</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of Share Me and its licensors. The Service is protected by copyright, 
                trademark, and other laws.
              </p>
              <div className="bg-primary-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Important:</strong> Users retain ownership of their uploaded content. 
                  However, by uploading content, you grant Share Me a license to store and display 
                  your content on the platform for educational purposes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                  <p className="text-gray-600">
                    We are committed to protecting your privacy. Our collection and use of personal 
                    information is governed by our Privacy Policy, which is incorporated into these Terms.
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                By using the Service, you consent to the collection and use of information in accordance 
                with our Privacy Policy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to maintain the Service's availability, but we do not guarantee that the Service 
              will be available at all times. We may suspend or discontinue the Service at any time 
              without notice.
            </p>
            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Note:</strong> We are not liable for any damages or losses resulting from 
                the unavailability of the Service.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall Share Me, nor its developers, be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including without limitation, loss of profits, 
              data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Your use or inability to use the Service</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Any unauthorized access to or use of our servers and/or personal information</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Any interruption or cessation of transmission to or from the Service</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Any bugs, viruses, or other harmful code that may be transmitted through the Service</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
            <p className="text-gray-600 mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, 
              without prior notice or liability, under our sole discretion, for any reason whatsoever 
              and without limitation, including but not limited to a breach of the Terms.
            </p>
            <p className="text-gray-600">
              If you wish to terminate your account, you may simply discontinue using the Service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms 
              taking effect.
            </p>
            <div className="bg-primary-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Your continued use of the Service after any changes constitutes acceptance of the new Terms.</strong>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-primary-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Email:</strong> support@shareme.com<br />
                <strong>Developer:</strong> Sanjay Panneerselvan<br />
                <strong>Response Time:</strong> Within 48 hours
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Terms?</h2>
            <p className="text-gray-600 mb-6">
              We're here to help clarify any questions you may have about our terms of service.
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
                 Back to Dashboard
               </a>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;
