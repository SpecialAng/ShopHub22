import React from 'react';
import { X } from 'lucide-react';
import { Product } from '../types';
import { formatToRupiah } from '../utils/currency';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" onClick={onClose}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black bg-opacity-75" />
        
        <div 
          className="relative inline-block w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              {formatToRupiah(product.price)}
            </p>
            <p className="mt-2 text-gray-600">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};