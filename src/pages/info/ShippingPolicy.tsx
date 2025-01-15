import React from 'react';

export const ShippingPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
      
      <div className="space-y-6 text-gray-600">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Processing Time</h2>
          <p>
            All orders are processed within 1-2 business days. Orders placed during weekends 
            or holidays will be processed on the next business day.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Shipping Methods</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Standard Shipping: 3-5 business days</li>
            <li>Express Shipping: 1-2 business days</li>
            <li>Same Day Delivery: Available for select areas</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Shipping Costs</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Free shipping on orders over $100</li>
            <li>Standard Shipping: $5.99</li>
            <li>Express Shipping: $12.99</li>
            <li>Same Day Delivery: $19.99</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Tracking Your Order</h2>
          <p>
            Once your order ships, you will receive a tracking number via email. You can track 
            your order status through our website or the carrier's tracking system.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">International Shipping</h2>
          <p>
            We currently ship to select international destinations. International shipping rates 
            and delivery times vary by location. Additional customs fees may apply.
          </p>
        </div>
      </div>
    </div>
  );
};