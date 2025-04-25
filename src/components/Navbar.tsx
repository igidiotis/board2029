import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">School Board 2029</Link>
          <div className="space-x-4">
            <Link 
              to="/" 
              className={`hover:text-blue-300 transition-colors ${pathname === '/' ? 'text-blue-300 font-semibold' : ''}`}
            >
              Budget Simulator
            </Link>
            <Link 
              to="/home" 
              className={`hover:text-blue-300 transition-colors ${pathname === '/home' ? 'text-blue-300 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-300 transition-colors ${pathname === '/about' ? 'text-blue-300 font-semibold' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-blue-300 transition-colors ${pathname === '/contact' ? 'text-blue-300 font-semibold' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 