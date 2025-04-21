const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Gaming News</h1>
          <p className="text-lg">Stay updated with the latest gaming news and announcements</p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover md:h-full md:w-96" 
                  src="featured-news.jpg" 
                  alt="Featured news"
                />
              </div>
              <div className="p-8">
                <div className="text-sm text-cyan-600 font-semibold tracking-wide">FEATURED</div>
                <h2 className="text-2xl font-bold mt-2">Latest Game Release Breaks All Records</h2>
                <p className="mt-4 text-gray-600">
                  Detailed description of the featured news story goes here. This section can contain
                  a longer preview of the article content...
                </p>
                <div className="mt-4 flex items-center">
                  <div className="text-sm text-gray-600">April 21, 2025</div>
                  <div className="mx-4 text-gray-300">|</div>
                  <a href="#" className="text-cyan-600 hover:text-cyan-700">Read More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-4">
            <button className="btn-primary whitespace-nowrap">All News</button>
            <button className="btn-secondary whitespace-nowrap">Game Releases</button>
            <button className="btn-secondary whitespace-nowrap">Updates & Patches</button>
            <button className="btn-secondary whitespace-nowrap">eSports</button>
            <button className="btn-secondary whitespace-nowrap">Industry News</button>
            <button className="btn-secondary whitespace-nowrap">Reviews</button>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Card */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img 
                src="news1.jpg" 
                alt="News 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-cyan-600">Game Releases</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">5 min read</span>
                </div>
                <h3 className="font-bold text-xl mb-2">New Game Title Announcement</h3>
                <p className="text-gray-600 mb-4">
                  Brief preview of the news article content. This can be a short summary
                  of what readers can expect...
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">April 20, 2025</span>
                  <a href="#" className="text-cyan-600 hover:text-cyan-700">Read More →</a>
                </div>
              </div>
            </article>

            {/* More news cards would be repeated here */}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <button className="btn-secondary px-4 py-2">Previous</button>
            <button className="btn-primary px-4 py-2">1</button>
            <button className="btn-secondary px-4 py-2">2</button>
            <button className="btn-secondary px-4 py-2">3</button>
            <button className="btn-secondary px-4 py-2">Next</button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest gaming news and updates
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;