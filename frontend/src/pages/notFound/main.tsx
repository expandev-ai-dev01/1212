import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary 404 error page for non-existent routes
 * @domain core
 * @type error-page
 * @category public
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Página não encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Button variant="primary" size="large" onClick={() => navigate('/')}>
        Voltar para Home
      </Button>
    </div>
  );
};
