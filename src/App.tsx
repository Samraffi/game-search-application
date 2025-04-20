import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => console.error('Ошибка:', error, info)}
    >
      <Header />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
