import { Outlet } from 'react-router-dom';
import { Header } from '@/core/components/Header';
import { Footer } from '@/core/components/Footer';

/**
 * @component MainLayout
 * @summary Main application layout with header and footer
 * @domain core
 * @type layout-component
 * @category layout
 */
export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
