import React from 'react';

const Fashion = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Fashion Trends to Watch in 2025</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Explore the cutting-edge fashion trends that are making waves in 2025. Stay ahead of the curve with the latest styles, colors, and trends for every occasion.
      </p>

      {/* Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/fashion-trend-1.jpg" alt="Fashion Trend 1" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Bold Prints</h2>
          <p className="text-gray-600 mb-6">
            Make a statement with bold prints. From florals to animal patterns, this trend is all about standing out and expressing your individuality.
          </p>
          <a href="/blog/fashion" className="text-pink-600 font-semibold hover:underline">
            Read More
          </a>
        </div>
      </div>

      {/* Another Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/fashion-trend-2.jpg" alt="Fashion Trend 2" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Sustainable Fashion</h2>
          <p className="text-gray-600 mb-6">
            Eco-friendly materials and practices are dominating fashion in 2025. Learn how to look stylish while making sustainable choices.
          </p>
          <a href="/blog/fashion" className="text-pink-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>
      </div>

      {/* Another Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/fashion-trend-3.jpg" alt="Fashion Trend 3" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Retro Revival</h2>
          <p className="text-gray-600 mb-6">
            From the 90s to the early 2000s, retro fashion is back. Dive into the nostalgia and explore how vintage styles are making a comeback.
          </p>
          <a href="/blog/fashion" className="text-pink-600 font-semibold hover:underline">
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
