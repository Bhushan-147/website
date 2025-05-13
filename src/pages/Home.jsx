import React from "react";
import FullscreenSlider from '../components/FullsScreeenSlider';


const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      <FullscreenSlider />

      {/* Hero Section */}
      <section className="bg-green-100 py-16 px-4 text-center">
        {/* <h1 className="text-4xl font-bold mb-4">Welcome to Agri & Food Tech</h1> */}
        <h1 className="text-4xl font-bold mb-4">Welcome to Chahat World</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Revolutionizing agriculture with smart solutions, sustainable practices, and food innovation.
        </p>
      </section>

      {/* Featured Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white border rounded-2xl shadow p-4">
            <img src={`https://unsplash.it/400/200?random=${i}`} alt="highlight" className="rounded-xl mb-4" />
            <h3 className="font-semibold text-xl mb-2">Feature Title {i}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a finibus nisl.</p>
          </div>
        ))}
      </section>

      {/* Long Content Section */}
    <section className="px-6 py-10 bg-gray-50">
  <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
  <div className="grid grid-cols-1 gap-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Blog Thumbnail */}
        <div className="mb-4">
          <img 
            src={`https://picsum.photos/150/150?random=${i}`} 
            alt={`Benefit ${i + 1}`} 
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        
        {/* Blog Content */}
        <h4 className="font-bold text-xl text-gray-800 mb-2">Benefit {i + 1}</h4>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid distinctio nemo, facere
          ullam voluptas pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        {/* Read More Link */}
        <a href="#" className="text-blue-600 mt-4 inline-block">Read More</a>
      </div>
    ))}
  </div>
</section>




      {/* Products / Blog Cards */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={`https://unsplash.it/400/300?random=${i + 10}`} alt="product" className="rounded-t-xl" />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Product {i + 1}</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lacus non justo.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-green-100 py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-2">Want to be Member</h2>
        <p className="mb-4 text-gray-700">Get the latest insights on Chahat Arora.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border w-full"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
