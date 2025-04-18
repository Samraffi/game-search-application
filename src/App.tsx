import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
