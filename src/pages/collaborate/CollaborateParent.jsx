import React from 'react';
import { Link } from 'react-router-dom';

const CollaborateParent = ({ isPreview = false }) => {
  const items = [
    {
      title: 'Agency',
      description: 'Collaborate on innovative projects and boundary-pushing campaigns.',
      link: '/collaborate/agency',
    },
    {
      title: 'Model',
      description: 'Showcase your personality and talent with our modeling partnerships.',
      link: '/collaborate/model',
    },
    {
      title: 'Company',
      description: 'Partner with us for impactful Agri-FoodTech solutions and exposure.',
      link: '/collaborate/company',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-rose-300 py-16 px-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        {isPreview ? 'Partner with Us' : 'Collaborate With Us'}
      </h1>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105"
            aria-labelledby={`box-${index}`}
          >
            <div className="flex items-center justify-start mb-6">
              <h2 id={`box-${index}`} className="text-2xl font-semibold text-pink-600">
                {item.title}
              </h2>
            </div>

            <p className="text-gray-600 mb-6">{item.description}</p>
            <Link
              to={item.link}
              className="inline-block text-white bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded-full"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborateParent;
