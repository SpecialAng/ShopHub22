import React from 'react';

export const ReturnsExchanges: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Returns & Exchanges</h1>
      
      <div className="space-y-6 text-gray-600">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Return Policy</h2>
          <p>
            We accept returns within 30 days of delivery for most items in their original condition. 
            Some products may have different return eligibility periods.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">How to Return</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Log in to your account and initiate a return</li>
            <li>Print the provided return shipping label</li>
            <li>Pack the item securely in its original packaging</li>
            <li>Drop off the package at any authorized shipping location</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Exchange Process</h2>
          <p>
            To exchange an item, simply return it using the process above and place a new order 
            for the desired item. This ensures the fastest processing time.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Refund Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Refunds are processed within 5-7 business days after receiving the return</li>
            <li>Original shipping costs are non-refundable</li>
            <li>Refunds are issued to the original payment method</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Non-Returnable Items</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Personal care items</li>
            <li>Opened software or digital products</li>
            <li>Gift cards</li>
            <li>Customized or personalized items</li>
          </ul>
        </div>
      </div>
    </div>
  );
};