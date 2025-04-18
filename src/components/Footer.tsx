const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Game Search. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Data from {' '}
            <a
              href="https://rawg.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700"
            >
              RAWG, the biggest video game database.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
