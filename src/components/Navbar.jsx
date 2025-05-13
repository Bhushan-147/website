import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaSnapchatGhost,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLink = `transition-colors duration-300 hover:text-rose-500`;

  return (
    <nav className="bg-[#fffaf0] shadow-sm sticky top-0 z-50 backdrop-blur-xl border-b border-neutral-200 bg-gradient-to-r from-blue-200 to-white-500 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-semibold text-neutral-800 tracking-wide hover:scale-105 transition-transform"
          >
            Chahat Arora
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-neutral-700">
            <Link to="/" className={navLink}>
              Home
            </Link>
            <Link to="/portfolio" className={navLink}>
              Portfolio
            </Link>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button className={navLink}>Blog</button>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-lg shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top"
                aria-labelledby="blog-menu"
              >
                {["fashion", "makeup", "haircare", "fitness", "places"].map(
                  (slug) => (
                    <Link
                      key={slug}
                      to={`/blog/${slug}`}
                      className="block px-4 py-2 text-sm capitalize text-neutral-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-all"
                    >
                      {slug}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Collaborate Dropdown */}
            <div className="relative group">
              <button className={navLink}>Collaborate</button>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-lg shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top"
                aria-labelledby="collaborate-menu"
              >
                {["agency", "model", "company"].map((slug) => (
                  <Link
                    key={slug}
                    to={`/collaborate/${slug}`}
                    className="block px-4 py-2 text-sm capitalize text-neutral-700 hover:text-rose-500 hover:bg-rose-50 rounded transition-all"
                  >
                    {slug}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className={navLink}>
              Contact
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-3 text-lg text-neutral-600">
              <a
                href="https://www.instagram.com/chahataroraofficial"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@i.chahatarora"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition-transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.snapchat.com/add/i.chahatarora"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-500 transition-transform hover:scale-110"
                aria-label="Snapchat"
              >
                <FaSnapchatGhost />
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-neutral-700 hover:text-rose-500 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <div className="px-4 space-y-3 font-medium text-neutral-700 text-lg">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-rose-500"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-rose-500"
          >
            Portfolio
          </Link>

          <details className="group">
            <summary className="cursor-pointer hover:text-rose-500">
              Blog
            </summary>
            <div className="ml-4 mt-1 space-y-1 text-sm">
              {["fashion", "makeup", "haircare", "fitness", "places"].map(
                (slug) => (
                  <Link
                    key={slug}
                    to={`/blog/${slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block capitalize"
                  >
                    {slug}
                  </Link>
                )
              )}
            </div>
          </details>

          <details className="group">
            <summary className="cursor-pointer hover:text-rose-500">
              Collaborate
            </summary>
            <div className="ml-4 mt-1 space-y-1 text-sm">
              {["agency", "model", "company"].map((slug) => (
                <Link
                  key={slug}
                  to={`/collaborate/${slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block capitalize"
                >
                  {slug}
                </Link>
              ))}
            </div>
          </details>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-rose-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaInstagram,
//   FaYoutube,
//   FaSnapchatGhost,
//   FaBars,
//   FaTimes,
//   FaMoon,
//   FaSun,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", darkMode);
//   }, [darkMode]);

//   const navLink = `transition-colors duration-300 hover:text-rose-500`;

//   return (
//     <nav className="bg-[#fffaf0] dark:bg-gray-900 text-neutral-800 dark:text-white shadow-sm sticky top-0 z-50 backdrop-blur-xl border-b border-neutral-200 bg-gradient-to-r from-blue-200 to-white-500 dark:from-gray-800 dark:to-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link
//             to="/"
//             className="text-2xl font-semibold tracking-wide hover:scale-105 transition-transform"
//           >
//             Chahat Arora
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 items-center font-medium">
//             <Link to="/" className={navLink}>Home</Link>
//             <Link to="/portfolio" className={navLink}>Portfolio</Link>

//             {/* Blog Dropdown */}
//             <div className="relative group">
//               <button className={navLink}>Blog</button>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800 backdrop-blur-lg rounded-lg shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top">
//                 {["fashion", "makeup", "haircare", "fitness", "places"].map(slug => (
//                   <Link
//                     key={slug}
//                     to={`/blog/${slug}`}
//                     className="block px-4 py-2 text-sm capitalize hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-gray-700 rounded transition-all"
//                   >
//                     {slug}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Collaborate Dropdown */}
//             <div className="relative group">
//               <button className={navLink}>Collaborate</button>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white/90 dark:bg-gray-800 backdrop-blur-lg rounded-lg shadow-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transform transition-all duration-300 origin-top">
//                 {["agency", "model", "company"].map(slug => (
//                   <Link
//                     key={slug}
//                     to={`/collaborate/${slug}`}
//                     className="block px-4 py-2 text-sm capitalize hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-gray-700 rounded transition-all"
//                   >
//                     {slug}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <Link to="/contact" className={navLink}>Contact</Link>

//             {/* Social Icons */}
//             <div className="flex space-x-3 text-lg">
//               <a
//                 href="https://www.instagram.com/chahataroraofficial"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-pink-500 transition-transform hover:scale-110"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://youtube.com/@i.chahatarora"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-red-500 transition-transform hover:scale-110"
//                 aria-label="YouTube"
//               >
//                 <FaYoutube />
//               </a>
//               <a
//                 href="https://www.snapchat.com/add/i.chahatarora"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-yellow-500 transition-transform hover:scale-110"
//                 aria-label="Snapchat"
//               >
//                 <FaSnapchatGhost />
//               </a>
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="hover:text-rose-500 transition-all"
//                 aria-label="Toggle Dark Mode"
//               >
//                 {darkMode ? <FaSun /> : <FaMoon />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Icon */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="hover:text-rose-500 transition-all"
//               aria-label="Toggle menu"
//             >
//               {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ height: 0 }}
//         animate={{ height: mobileOpen ? "auto" : 0 }}
//         transition={{ duration: 0.3 }}
//         className="md:hidden overflow-hidden bg-[#fffaf0] dark:bg-gray-900"
//       >
//         <div className="px-4 py-4 space-y-3 font-medium text-lg">
//           <Link to="/" onClick={() => setMobileOpen(false)} className="block hover:text-rose-500">Home</Link>
//           <Link to="/portfolio" onClick={() => setMobileOpen(false)} className="block hover:text-rose-500">Portfolio</Link>

//           <details className="group">
//             <summary className="cursor-pointer hover:text-rose-500">Blog</summary>
//             <div className="ml-4 mt-1 space-y-1 text-sm">
//               {["fashion", "makeup", "haircare", "fitness", "places"].map(slug => (
//                 <Link key={slug} to={`/blog/${slug}`} onClick={() => setMobileOpen(false)} className="block capitalize">
//                   {slug}
//                 </Link>
//               ))}
//             </div>
//           </details>

//           <details className="group">
//             <summary className="cursor-pointer hover:text-rose-500">Collaborate</summary>
//             <div className="ml-4 mt-1 space-y-1 text-sm">
//               {["agency", "model", "company"].map(slug => (
//                 <Link key={slug} to={`/collaborate/${slug}`} onClick={() => setMobileOpen(false)} className="block capitalize">
//                   {slug}
//                 </Link>
//               ))}
//             </div>
//           </details>

//           <Link to="/contact" onClick={() => setMobileOpen(false)} className="block hover:text-rose-500">Contact</Link>

//           {/* Dark Mode Toggle for Mobile */}
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="flex items-center gap-2 hover:text-rose-500"
//           >
//             {darkMode ? <FaSun /> : <FaMoon />} <span>{darkMode ? "Light" : "Dark"} Mode</span>
//           </button>
//         </div>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;