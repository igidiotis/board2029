const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">School Board 2029</h3>
            <p className="text-sm text-gray-300">The future of education management</p>
          </div>
          <div className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} School Board 2029. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 