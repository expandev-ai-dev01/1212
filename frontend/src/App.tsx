import { BrowserRouter } from 'react-router-dom';
import { router } from './routes';
import { ErrorBoundary } from './core/components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>{router}</BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
