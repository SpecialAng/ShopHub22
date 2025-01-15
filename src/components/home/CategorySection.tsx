import React from 'react';
import { CategoryCarousel } from './CategoryCarousel';
import { Category } from '../../types';

interface CategorySectionProps {
  categories: Category[];
  onCategoryClick: (id: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  onCategoryClick,
}) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">Kategori Belanja</h2>
      <CategoryCarousel
        categories={categories}
        onCategoryClick={onCategoryClick}
      />
    </section>
  );
};