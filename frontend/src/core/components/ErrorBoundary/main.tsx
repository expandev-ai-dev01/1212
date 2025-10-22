import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../Button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * @component ErrorBoundary
 * @summary Catches and handles React errors gracefully
 * @domain core
 * @type error-boundary
 * @category error-handling
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Algo deu errado</h2>
              <p className="text-gray-600">
                Ocorreu um erro inesperado. Por favor, tente novamente.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-red-800 font-mono">{this.state.error.message}</p>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <Button variant="primary" onClick={this.handleReset}>
                Tentar Novamente
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = '/')}>
                Voltar para Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
