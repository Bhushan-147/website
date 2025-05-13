import React from 'react';

const Makeup = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Top Makeup Trends for 2025</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Get ready for the hottest makeup trends of 2025. From bold lips to glowing skin, discover the essentials to your makeup routine this year.
      </p>

      {/* Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/makeup-trend-1.jpg" alt="Makeup Trend 1" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Glitter Eyes</h2>
          <p className="text-gray-600 mb-6">
            Sparkling eyeshadows are the must-have for 2025. Shine bright with glittery eye makeup that dazzles.
          </p>
          <a href="/blog/makeup" className="text-pink-600 font-semibold hover:underline">
            Explore More
          </a>
        </div>
      </div>

      {/* Another Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/makeup-trend-2.jpg" alt="Makeup Trend 2" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Natural Glowing Skin</h2>
          <p className="text-gray-600 mb-6">
            Embrace your natural beauty with glowing, dewy skin. Keep it fresh and minimal with light coverage products.
          </p>
          <a href="/blog/makeup" className="text-pink-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>
      </div>

      {/* Another Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/makeup-trend-3.jpg" alt="Makeup Trend 3" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Bold Lip Colors</h2>
          <p className="text-gray-600 mb-6">
            Red, purple, or even blue lips—dare to wear bold colors this year. Choose your signature shade and let your lips do the talking!
          </p>
          <a href="/blog/makeup" className="text-pink-600 font-semibold hover:underline">
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Makeup;
