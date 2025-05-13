import { useState } from "react";  // Import useState

const GallerySection = () => {
  const [showMore, setShowMore] = useState(false); // State to toggle "View More"
  
  // Limiting the number of initially visible images
  const visibleImages = showMore ? filteredImages : filteredImages.slice(0, 6); // Show 6 initially, rest on "View More"

  return (
    <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-900 py-16 px-4">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Chahat's Journey
        </motion.h2>
        <p className="text-lg sm:text-xl text-white mt-4 max-w-3xl mx-auto">
          A glimpse into the incredible moments and milestones of Chahat Arora's journey from small-town girl to influencer.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        <AnimatePresence>
          {visibleImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transform transition hover:scale-105"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="relative group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-white text-lg font-semibold">View Details</p>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-b-2xl">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{img.alt}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">{img.tag}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Button */}
      {!showMore && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(true)} 
            className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};
