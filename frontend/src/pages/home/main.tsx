import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';
import { Card } from '@/core/components/Card';

/**
 * @page HomePage
 * @summary Welcome page with introduction to Quiz Naruto
 * @domain core
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Guards: none
 */
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Quiz Naruto</h1>
        <p className="text-xl text-gray-600">Teste seus conhecimentos sobre o universo Naruto</p>
      </div>

      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Bem-vindo ao Quiz Naruto!</h2>
        <p className="text-gray-700 mb-6">
          Prepare-se para testar seus conhecimentos sobre personagens, histórias e elementos do
          anime e mangá Naruto. Responda perguntas de múltipla escolha acompanhadas de imagens e
          receba feedback imediato sobre suas respostas.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="large" onClick={() => navigate('/quiz')}>
            Começar Quiz
          </Button>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Perguntas Variadas</h3>
          <p className="text-gray-600">
            Questões sobre personagens, jutsus, clãs e momentos marcantes da série.
          </p>
        </Card>

        <Card className="p-6">
          <div className="text-4xl mb-3">🖼️</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Imagens Ilustrativas</h3>
          <p className="text-gray-600">
            Cada pergunta vem acompanhada de imagens relevantes do universo Naruto.
          </p>
        </Card>

        <Card className="p-6">
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback Imediato</h3>
          <p className="text-gray-600">
            Receba feedback instantâneo sobre suas respostas e aprenda mais.
          </p>
        </Card>
      </div>
    </div>
  );
};
