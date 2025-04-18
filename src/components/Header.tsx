import { Link, useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'text-cyan-600' : 'text-gray-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-cyan-600">
            Game Search
          </Link>
          
          <div className="space-x-6">
            <Link 
              to="/games" 
              className={`${isActive('/games')} hover:text-cyan-600 transition-colors`}
            >
              Games
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact')} hover:text-cyan-600 transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
