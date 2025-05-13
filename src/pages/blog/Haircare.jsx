import React from 'react';

const Haircare = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">Essential Haircare Tips for 2025</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Keep your hair healthy and radiant in 2025 with these essential tips. From hydration to heat protection, we’ve got you covered.
      </p>

      {/* Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/haircare-tip-1.jpg" alt="Haircare Tip 1" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Moisturizing Hair Masks</h2>
          <p className="text-gray-600 mb-6">
            Deeply hydrate and nourish your hair with moisturizing hair masks. Use weekly for shiny, soft hair.
          </p>
          <a href="/blog/haircare" className="text-pink-600 font-semibold hover:underline">
            Learn More
          </a>
        </div>
      </div>

      {/* Another Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/haircare-tip-2.jpg" alt="Haircare Tip 2" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Heat Protection</h2>
          <p className="text-gray-600 mb-6">
            Protect your hair from heat damage by using heat protection sprays before styling. Your hair will thank you!
          </p>
          <a href="/blog/haircare" className="text-pink-600 font-semibold hover:underline">
            Explore More
          </a>
        </div>
      </div>

      {/* Another Single Blog Post Block */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10 transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img src="/assets/haircare-tip-3.jpg" alt="Haircare Tip 3" className="w-full h-72 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">Scalp Care</h2>
          <p className="text-gray-600 mb-6">
            Take care of your scalp for healthy hair growth. Incorporate scalp massages and clarifying shampoos into your routine.
          </p>
          <a href="/blog/haircare" className="text-pink-600 font-semibold hover:underline">
            Explore More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Haircare;
