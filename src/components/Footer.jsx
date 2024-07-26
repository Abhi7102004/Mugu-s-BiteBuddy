import React from 'react';
import { Link } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 

const Footer = () => {
  return (
    <footer className="swiggy-footer mt-5 dark:shadow-2xl dark:shadow-indigo-600 dark:bg-slate-900 py-8 px-4 md:px-8">
      <div className="footer-container mb-5 grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/about">
            <h3 className='text-lg font-semibold dark:text-white mb-3 hover:text-indigo-500 transition-colors duration-300 cursor-pointer'>
              About Us
            </h3>
          </Link>
          <ul>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              Who We Are
            </li>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              Careers
            </li>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              Press
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='text-lg font-semibold dark:text-white mb-3 hover:text-indigo-500 transition-colors duration-300 cursor-pointer'>
            Contact Us
          </h3>
          <ul>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              Help & Support
            </li>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              FAQs
            </li>
            <Link to="/contact">
              <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
                Contact
              </li>
            </Link>
          </ul>
        </motion.div>
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className='text-lg font-semibold dark:text-white mb-3 hover:text-indigo-500 transition-colors duration-300 cursor-pointer'>
            Legal
          </h3>
          <ul>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              Terms & Conditions
            </li>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              Privacy Policy
            </li>
            <li className='dark:text-white mb-2 hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
              Refund & Cancellation
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="footer-col social-links"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className='text-lg font-semibold dark:text-white mb-3 hover:text-indigo-500 transition-colors duration-300 cursor-pointer'>
            Follow Us
          </h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com/"
                target='_blank'
                rel='noopener noreferrer'
                className='dark:text-white hover:text-gray-400 transition-colors duration-300 flex items-center space-x-1 cursor-pointer'
              >
                <i className="fab fa-facebook-f text-xl"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target='_blank'
                rel='noopener noreferrer'
                className='dark:text-white hover:text-gray-400 transition-colors duration-300 flex items-center space-x-1 cursor-pointer'
              >
                <i className="fab fa-instagram text-xl"></i>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target='_blank'
                rel='noopener noreferrer'
                className='dark:text-white hover:text-gray-400 transition-colors duration-300 flex items-center space-x-1 cursor-pointer'
              >
                <i className="fab fa-twitter text-xl"></i>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        className="copyright text-center dark:text-white mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>&copy; MuguFoods 2023. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
