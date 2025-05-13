// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import shoot1 from '../assets/portfolio/fashion.png';
// import shoot2 from '../assets/portfolio/business.png';
// import shoot3 from '../assets/portfolio/model.png';
// import shoot4 from '../assets/portfolio/fashion.png';
// import shoot5 from '../assets/portfolio/business.png';
// import shoot6 from '../assets/portfolio/model.png';
// import chahatImage from '../assets/chahat.jpeg'; // Replace with actual image path

// const categories = ['All', 'Fashion', 'Skincare', 'Travel'];

// const portfolioImages = [
//   { id: 1, src: shoot1, alt: 'Fashion Editorial', category: 'Fashion', tag: 'Street Style' },
//   { id: 2, src: shoot2, alt: 'Morning Glow', category: 'Skincare', tag: 'Natural Light' },
//   { id: 3, src: shoot3, alt: 'Tropical Escape', category: 'Travel', tag: 'Resort' },
//   { id: 4, src: shoot4, alt: 'Evening Look', category: 'Fashion', tag: 'Bold & Chic' },
//   { id: 5, src: shoot5, alt: 'Minimal Routine', category: 'Skincare', tag: 'Fresh Face' },
//   { id: 6, src: shoot6, alt: 'Wanderlust', category: 'Travel', tag: 'Scenic' },
// ];

// export default function Portfolio() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [filter, setFilter] = useState('All');

//   const filteredImages =
//     filter === 'All' ? portfolioImages : portfolioImages.filter((img) => img.category === filter);

//   return (
//     <section className="p-4 sm:p-8 max-w-7xl mx-auto">
//      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4 sm:text-5xl">
//   Portfolio
// </h2>
// <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
//   Chahat Arora, a passionate digital creator, transitioned from a food technologist in Canada to pursuing her dreams in Mumbai. Her portfolio showcases collaborations with top brands and her journey in the fashion and acting industry. Dive in to explore the work that has made her a leading influencer and digital creator.
// </p>


//       {/* Category Filter */}
//       <div className="flex justify-center mb-6 gap-2 flex-wrap">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={`px-4 py-1 rounded-full border transition ${
//               filter === cat
//                 ? 'bg-black text-white'
//                 : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Portfolio Grid */}
//     <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//   {filteredImages.map((img) => (
//     <div
//       key={img.id}
//       className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transform transition duration-500 ease-in-out hover:scale-105"
//       onClick={() => setSelectedImage(img.src)}
//     >
//       <div className="relative group">
//         <img
//           src={img.src}
//           alt={img.alt}
//           className="w-full h-64 object-cover transition-all duration-300 rounded-2xl group-hover:opacity-80"
//         />
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300">
//           <p className="text-white text-lg font-semibold">View Details</p>
//         </div>
//       </div>

//       <div className="p-4 bg-white rounded-b-2xl shadow-inner hover:shadow-xl transition-all">
//         <h3 className="font-semibold text-xl text-gray-800 hover:text-[#F472B6] transition-all duration-300">{img.alt}</h3>
//         <p className="text-sm text-gray-500 mt-2">{img.tag}</p>
//       </div>
//     </div>
//   ))}
// </div>

// {/* Modal for Image Enlargement */}
// {selectedImage && (
//   <div
//     className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transform transition-all duration-300"
//     onClick={() => setSelectedImage(null)}
//   >
//     <div className="relative w-full h-full flex items-center justify-center">
//       <img
//         src={selectedImage}
//         alt="Full View"
//         className="max-w-full max-h-full object-contain p-4 rounded-xl shadow-lg"
//       />
//       <div
//         className="absolute top-4 right-4 text-white cursor-pointer text-3xl"
//         onClick={() => setSelectedImage(null)}
//       >
//         &times;
//       </div>
//     </div>
//   </div>
// )}


//       {/* Highlight Section: Chahat's Journey */}
//       <section className="relative bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-900 text-white py-16">
//         <motion.div
//           className="absolute inset-0 bg-black opacity-30"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.3 }}
//           transition={{ duration: 2, ease: 'easeOut' }}
//         />
//         <div className="relative container mx-auto text-center px-6">
//           <motion.h2
//             className="text-4xl sm:text-5xl font-bold leading-tight mb-6 relative z-10"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             <span className="text-3xl sm:text-4xl">Chahat Arora: </span>
//             <span className="block sm:inline-block text-gradient bg-clip-text text-transparent">A Small Town Girl Achieving Big Dreams</span>
//           </motion.h2>
//           <motion.p
//             className="text-lg sm:text-xl max-w-3xl mx-auto mb-8"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             A 26-year-old Punjabi girl who stepped down from her job in Canada, now taking significant steps to accomplish her passions in the dream city of Mumbai.
//           </motion.p>
//           <motion.a
//             href="https://femglammagazine.com/2021/10/06/chahat-arora-a-small-town-girl-achieving-big-dreams/"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block bg-[#F472B6] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#D72F90] transition-all"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 1 }}
//           >
//             Read More
//           </motion.a>

//           {/* Image of Chahat */}
//           <div className="mt-8">
//             <motion.img
//               src={chahatImage}
//               alt="Chahat Arora"
//               className="mx-auto rounded-lg shadow-2xl max-w-[80%] sm:max-w-[60%]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 2 }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Connect with Chahat Section */}
//       <section className="bg-[#2D2D2D] p-8 rounded-xl max-w-7xl mx-auto text-white mt-16">
//         <h2 className="text-3xl font-bold text-center mb-6">Connect with Chahat</h2>
//         <motion.div
//           className="text-center mb-6"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <p className="text-lg mb-4">Email: 
//             <a href="mailto:chahatarora528@gmail.com" className="text-[#F472B6] hover:text-white hover:scale-105 transition-all">
//               chahatarora528@gmail.com
//             </a>
//           </p>

//           <p className="text-lg mb-4">Instagram: 
//             <a href="https://www.instagram.com/chahataroraofficial/" target="_blank" rel="noreferrer" className="text-[#F472B6] hover:text-white hover:scale-105 transition-all">
//               @chahataroraofficial
//             </a>
//           </p>

//           <p className="text-xl font-semibold mb-4">Digital Creator & Influencer</p>
//           <p className="text-sm mb-2 text-gray-400">🇨🇦 GTA’s Influencer | ✨ Business & Brand Promotions | 📽️ Modelling Assignments</p>
//           <p className="text-sm text-gray-400">📨 Open for Paid Promotions & Collaborations</p>
//         </motion.div>

//         <motion.div
//           className="mt-8 flex justify-center"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <a
//             href="mailto:chahatarora528@gmail.com"
//             className="bg-[#F472B6] text-white py-2 px-6 rounded-full hover:bg-[#D72F90] transition-all"
//           >
//             Send an Email
//           </a>
//         </motion.div>
//       </section>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import chahatImage from '../assets/chahat.jpeg';
import chahatImage1 from '../assets/chahat1.jpeg';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import fashionImg from '../assets/fashion.png';
import businessImg from '../assets/business.png';
import modelImg from '../assets/model.png';

const categories = ['All', 'Fashion', 'Skincare', 'Travel'];

const mockFetchImages = async () => {
  return [
    { id: 1, src: fashionImg, alt: 'Fashion Editorial', category: 'Fashion', tag: 'Street Style' },
    { id: 2, src: businessImg, alt: 'Morning Glow', category: 'Skincare', tag: 'Natural Light' },
    { id: 3, src: modelImg, alt: 'Tropical Escape', category: 'Travel', tag: 'Resort' },
    { id: 4, src: fashionImg, alt: 'Evening Look', category: 'Fashion', tag: 'Bold & Chic' },
    { id: 5, src: businessImg, alt: 'Minimal Routine', category: 'Skincare', tag: 'Fresh Face' },
    { id: 6, src: modelImg, alt: 'Wanderlust', category: 'Travel', tag: 'Scenic' },
  ];
};

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const [portfolioImages, setPortfolioImages] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Replace this with actual CMS fetch
    mockFetchImages().then(setPortfolioImages);
  }, []);

  const filteredImages =
    filter === 'All' ? portfolioImages : portfolioImages.filter(img => img.category === filter);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors">
        
        {/* Navbar */}
        <header className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Chahat's Portfolio</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </button>
            <button
              className="sm:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="sm:hidden flex flex-col items-center gap-4 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setMenuOpen(false);
                }}
                className={`text-lg ${filter === cat ? 'font-bold text-pink-500' : ''}`}
              >
                {cat}
              </button>
            ))}
          </nav>
        )}

        {/* Filter Buttons (desktop) */}
        <div className="hidden sm:flex justify-center gap-2 flex-wrap mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition-all ${
                filter === cat
                  ? 'bg-pink-500 text-white'
                  : 'bg-white dark:bg-gray-800 dark:text-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with Animation */}
        {/* Gallery Section with Gradient Background */}
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
      {filteredImages.map((img) => (
       <motion.div
  key={img.id}
  layout
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.3 }}
  className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 bg-white dark:bg-gray-800"
  onClick={() => setSelectedImage(img.src)}
>
  <div className="relative group">
    <img
      src={img.src}
      alt={img.alt}
      className="w-full h-64 object-cover transition-all duration-300 rounded-2xl group-hover:opacity-80"
    />
    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <p className="text-white text-lg font-semibold">View Details</p>
    </div>
  </div>
  <div className="p-4 bg-white dark:bg-gray-800 rounded-b-2xl shadow-inner hover:shadow-xl transition-all">
    <h3 className="font-semibold text-xl text-gray-800 dark:text-white hover:text-pink-400 transition-all duration-300">
      {img.alt}
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">{img.tag}</p>
  </div>
</motion.div>

      ))}
    </AnimatePresence>
  </div>
</section>

{/* Modal for Full Image */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Enlarged"
      className="max-w-full max-h-[90vh] object-contain p-4 rounded-xl"
    />
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-6 right-6 text-white text-3xl font-bold"
    >
      &times;
    </button>
  </div>
)}


        {/* About Section */}
        {/* About Section */}
<section className="bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-900 text-white py-16 text-center px-6">
  <motion.h2
    className="text-4xl sm:text-5xl font-bold mb-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Chahat Arora: A Small Town Girl Achieving Big Dreams
  </motion.h2>

  <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
    A 26-year-old Punjabi girl who stepped down from her job in Canada, now chasing her dreams in Mumbai.
  </p>

  <a
    href="https://femglammagazine.com/2021/10/06/chahat-arora-a-small-town-girl-achieving-big-dreams/"
    target="_blank"
    rel="noreferrer"
    className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
  >
    Read More
  </a>

  {/* Image Container */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
    <img
      src={chahatImage}
      alt="Chahat Arora"
      className="rounded-xl shadow-2xl max-w-[80%] sm:max-w-[45%]"
    />
    <img
      src={chahatImage1}
      alt="Chahat Arora Second"
      className="rounded-xl shadow-2xl max-w-[80%] sm:max-w-[45%]"
    />
  </div>
</section>


        {/* Contact Section */}
        <section className="bg-[#2D2D2D] text-white py-16 text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Connect with Chahat</h2>
          <p>Email: <a href="mailto:chahatarora528@gmail.com" className="text-pink-400 hover:underline">chahatarora528@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/chahataroraofficial/" target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">@chahataroraofficial</a></p>
          <p className="mt-2 text-sm text-gray-400">📽️ Modelling Assignments | ✨ Brand Promotions | 💌 Open for Paid Collaborations</p>
          <a
            href="mailto:chahatarora528@gmail.com"
            className="inline-block mt-6 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600"
          >
            Send an Email
          </a>
        </section>
      </div>
    </div>
  );
}
