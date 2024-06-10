import React from 'react';
import { Link } from 'react-router-dom'; // Import for navigation

const Footer = () => {
  return (
    <footer className="swiggy-footer mt-5 dark:shadow-2xl dark:shadow-indigo-600 dark:bg-slate-900">
      <div className="footer-container mb-5">
        <div className="footer-col">
          <h3 className='dark:text-white'>About Us</h3>
          <ul>
            <li className='dark:text-white'>
              Who We Are
            </li>
            <li className='dark:text-white'>
              Careers
            </li>
            <li className='dark:text-white'>
              Press
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className='dark:text-white'>Contact Us</h3>
          <ul>
            <li className='dark:text-white'>Help & Support</li>
            <li className='dark:text-white'>FAQs</li>
            <li className='dark:text-white'>Contact</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className='dark:text-white'>Legal</h3>
          <ul>
            <li className='dark:text-white'>Terms & Conditions</li>
            <li className='dark:text-white'>Privacy Policy</li>
            <li className='dark:text-white'>Refund & Cancellation</li>
          </ul>
        </div>
        <div className="footer-col social-links">
          <h3 className='dark:text-white'>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target='_blank' className='dark:text-white'>
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/"  target='_blank'  className='dark:text-white'>
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/"  target='_blank' className='dark:text-white'>
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright dark:text-white">
        <p>&copy; MuguFoods 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
