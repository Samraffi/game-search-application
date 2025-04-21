const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Dive into the World of Games</h2>
          <p className="text-lg mb-6">Discover the best games, latest news and professional tips.</p>
          <a href="#" className="inline-block bg-white text-cyan-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">Start Playing</a>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Game Cards will go here */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="game1.jpg" alt="Game 1" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Game Title</h3>
                <p className="text-sm text-gray-600 mb-2">Game Genre</p>
                <div className="flex items-center">
                  <span className="text-yellow-400">★★★★☆</span>
                  <span className="ml-2 text-sm text-gray-600">4.0</span>
                </div>
              </div>
            </div>
            {/* Repeat for more games */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">Best Games</h3>
            <p>Selection of the most popular and exciting games for all ages.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Fresh News</h3>
            <p>Stay up to date with the latest events in gaming and technology.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Tips & Guides</h3>
            <p>Improve your skills with our detailed guides and tips.</p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Cards */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="news1.jpg" alt="News 1" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <span className="text-sm text-cyan-600">April 12, 2025</span>
                <h3 className="font-semibold text-lg my-2">News Title</h3>
                <p className="text-gray-600 mb-4">Brief description of the news and main points...</p>
                <a href="#" className="text-cyan-600 hover:text-cyan-700">Read More →</a>
              </div>
            </div>
            {/* Repeat for more news */}
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Game Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-200">
                  {/* Add icon here */}
                </div>
                <h3 className="font-semibold">Action</h3>
                <p className="text-sm text-gray-600">100+ games</p>
              </div>
            </a>
            {/* Repeat for more categories */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-cyan-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Community</h2>
          <p className="mb-6">Create an account and start your adventure today!</p>
          <a href="#" className="inline-block bg-white text-cyan-800 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">Sign Up</a>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Player Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Username</h4>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"Great site for finding new games! Found many interesting projects."</p>
            </div>
            {/* Repeat for more reviews */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
