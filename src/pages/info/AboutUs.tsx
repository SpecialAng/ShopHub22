import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About ShopHub</h1>
      <div className="space-y-6 text-gray-600">
        <p>
          Welcome to ShopHub, your premier destination for quality products across multiple categories. 
          Since our establishment, we've been committed to providing our customers with an exceptional 
          shopping experience.
        </p>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
          <p>
            To provide high-quality products at competitive prices while ensuring an outstanding 
            shopping experience for our customers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quality: We ensure all our products meet high-quality standards</li>
            <li>Integrity: We operate with honesty and transparency</li>
            <li>Customer Focus: Your satisfaction is our top priority</li>
            <li>Innovation: We continuously improve our services</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Curated selection of premium products</li>
            <li>Competitive pricing</li>
            <li>Excellent customer service</li>
            <li>Secure shopping experience</li>
            <li>Fast and reliable shipping</li>
          </ul>
        </div>
      </div>
    </div>
  );
};