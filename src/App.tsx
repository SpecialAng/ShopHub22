import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AboutUs, ShippingPolicy, ReturnsExchanges } from './pages/info';
import { PageType } from './types';

const App: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
    if (page === 'home') {
      setSelectedCategory(undefined);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage('products');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onCategoryClick={handleCategoryClick} />;
      case 'products':
        return <Products categoryId={selectedCategory} />;
      case 'about':
        return <AboutUs />;
      case 'shipping':
        return <ShippingPolicy />;
      case 'returns':
        return <ReturnsExchanges />;
      case 'login':
        return <Login onNavigate={handleNavigation} />;
      case 'register':
        return <Register onNavigate={handleNavigation} />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <Home onCategoryClick={handleCategoryClick} />;
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <MainLayout
          isCartOpen={isCartOpen}
          onCartClose={() => setIsCartOpen(false)}
          onCartOpen={() => setIsCartOpen(true)}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        >
          {renderPage()}
        </MainLayout>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;