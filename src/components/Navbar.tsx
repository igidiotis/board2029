import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">School Board 2029</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 