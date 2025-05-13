// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-white py-10 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-2">Chahat Arora</h2>
          <p className="text-sm text-gray-400">Empowering through fashion, travel, and lifestyle.</p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-300">
            {["Home", "Portfolio", "Blog", "Collaborate", "Contact"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white transition duration-200">{item}</a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-pink-500 hover:text-white transition duration-200"><FaInstagram size={24} /></a>
            <a href="#" className="text-red-500 hover:text-white transition duration-200"><FaYoutube size={24} /></a>
            <a href="#" className="text-pink-300 hover:text-white transition duration-200"><FaPinterest size={24} /></a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.p
        className="text-center text-sm text-gray-500 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Chahat Arora. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
