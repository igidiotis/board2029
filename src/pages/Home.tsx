import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">School Board 2029</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">Welcome to the future of education management</p>
      <div className="flex space-x-4">
        <Link to="/about" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          About
        </Link>
        <Link to="/contact" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home; 