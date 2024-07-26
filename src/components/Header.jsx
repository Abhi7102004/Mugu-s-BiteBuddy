import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import DarkModeToggle from './DarkModeToggle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const onlineStatus = useOnline();
  const { userLogoLight, userLogoDark } = useContext(UserContext);
  const [showLogout, setShowLogout] = useState(false);
  const itemCart = useSelector((store) => store.cart.items);
  const favCart = useSelector(store => store.favourite.favouriteItems);
  const isDarkMode = document.body.classList.contains("dark");
  const color = isDarkMode ? 'white' : 'black';

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const [userLogo, setUserLogo] = useState(userLogoDark);
  const handleDarkModeChange = () => {
    const isDarkMode = document.body.classList.contains("dark");
    setUserLogo(!isDarkMode ? userLogoDark : userLogoLight);
  };
  const observer = new MutationObserver(handleDarkModeChange);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  return (
    <header className="header relative flex justify-between mx-[70px] items-center py-4 px-6">
      <div className="flex items-center">
        <div className="img-container">
          <motion.img
            className="img-logo h-12 w-12 rounded-full"
            src={CDN_URL}
            alt="logo"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.p
          className="text-2xl font-bold dark:text-white text-gray-800 ml-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-yellow-500 text-5xl">M</span>
          <span className="text-green-500">u</span>
          <span className="text-red-500">g</span>
          <span className="text-blue-500">u</span>
          <span className="text-purple-500">'</span>
          <span className="text-pink-500">s</span>
          <span className="text-orange-500"> </span>
          <span className="text-teal-500 text-5xl">B</span>
          <span className="text-indigo-500">i</span>
          <span className="text-yellow-500">t</span>
          <span className="text-green-500">e</span>
          <span className="text-red-500">B</span>
          <span className="text-blue-500">u</span>
          <span className="text-purple-500">d</span>
          <span className="text-pink-500">d</span>
          <span className="text-orange-500">y</span>
        </motion.p>
      </div>
      <div className="nav-list">
        <ul className="flex space-x-6 items-center">
          <li className="flex items-center bg-gray-800 dark:bg-gray-600 px-3 py-1 rounded-full">
            {onlineStatus ? (
              <>
                <span className="text-green-500">🟢</span>
                <span className="text-green-400">Online</span>
              </>
            ) : (
              <>
                <span className="text-red-500">🔴</span>
                <span className="text-red-400">Offline</span>
              </>
            )}
          </li>
          <li>
            <DarkModeToggle />
          </li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="nav-item font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900 transition-transform duration-300 ease-in-out"
            >
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/about"
              className="nav-item font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900 transition-transform duration-300 ease-in-out"
            >
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="nav-item font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900 transition-transform duration-300 ease-in-out"
            >
              Contact
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/carts"
              className="relative font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900 transition-transform duration-300 ease-in-out"
            >
              <ShoppingCart style={{ color, position: "relative", width: '30px', height: '28px' }} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {itemCart.length}
              </span>
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/favourite"
              className="relative font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900 transition-transform duration-300 ease-in-out"
            >
              <FavoriteIcon style={{ color, position: "relative", width: '30px', height: '28px' }} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {favCart.length}
              </span>
            </Link>
          </motion.li>
          <li>
            {isLoggedIn ? (
              <div className="relative">
                <div onClick={toggleLogout} className="cursor-pointer flex items-center text-center">
                  {userLogo}
                </div>
                {showLogout && (
                  <motion.div
                    className="absolute right-0 z-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Logout setShowLogout={setShowLogout} setIsLoggedIn={setIsLoggedIn} />
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <motion.span
                  className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  Login
                </motion.span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
