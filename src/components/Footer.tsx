const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Game Search. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Powered by{' '}
            <a
              href="https://github.com/Phalcode/rawg-to-steam-redirect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700"
            >
              RAWG to Steam Redirect
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
