import React from 'react';
import { Link } from 'react-router-dom';

const Agency = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-rose-300 py-16 px-6 md:px-20 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Collaborate as an Agency
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Creative Partnerships</h2>
        <p className="text-gray-700 mb-6">
          Collaborate on innovative projects and boundary-pushing campaigns. We help agencies
          bring brands to life through compelling stories and influencer-led initiatives.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Brand Campaigns & Digital Storytelling</li>
          <li>Influencer Outreach & Management</li>
          <li>Content Creation (Photo, Video, Reels)</li>
          <li>Analytics & Performance Tracking</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Our team partners closely with agency leads to co-create projects that blend creativity
          and results. We bring a collaborative spirit and diverse talent to the table.
        </p>

        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-block text-white bg-pink-600 hover:bg-pink-700 py-3 px-6 rounded-full font-semibold"
          >
            Partner with Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Agency;
