import { Outlet } from 'react-router';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
