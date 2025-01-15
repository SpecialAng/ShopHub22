import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We're here to help! Contact us through any of these channels.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-3" />
            <span>123 Shopping Street, NY 10001</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="h-5 w-5 mr-3" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="h-5 w-5 mr-3" />
            <span>support@shophub.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};