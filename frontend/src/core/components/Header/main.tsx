import { Link } from 'react-router-dom';

/**
 * @component Header
 * @summary Application header with navigation and branding
 * @domain core
 * @type ui-component
 * @category navigation
 */
export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">Quiz Naruto</span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
