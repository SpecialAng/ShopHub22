export type PageType = 'home' | 'products' | 'about' | 'shipping' | 'returns' | 'login';

export interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}