import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';
import Logout from './Logout';
import { useSelector } from 'react-redux';
import DarkModeToggle from './DarkModeToggle';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const onlineStatus = useOnline();
  const { userLogoLight, userLogoDark } = useContext(UserContext);
  const [showLogout, setShowLogout] = useState(false);
  const itemCart = useSelector((store) => store.cart.items);
  const favCart=useSelector(store=>store.favourite.favouriteItems)
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
    <div className="header relative flex justify-between mx-[70px] items-center py-4 px-6">
      <div className="flex items-center">
        <div className="img-container">
          <img className="img-logo h-10 w-10 rounded-full" src={CDN_URL} alt="logo" />
        </div>
        <p className="text-lg font-semibold dark:text-white text-gray-800 ml-2">Mugu's BiteBuddy</p>
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
          <li>
            <Link to="/" className="nav-item font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900">Contact</Link>
          </li>
          <li>
            <Link to="/carts" className="relative font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900">
              <ShoppingCart style={{ color, position: "relative", width: '30px', height: '28px' }} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">{itemCart.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className='relative font-semibold text-md dark:text-white text-gray-700 hover:text-gray-900' >
              <FavoriteIcon style={{ color, position: "relative", width: '30px', height: '28px' }} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">{favCart.length}</span>
            </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <div className="relative">
                <div onClick={toggleLogout} className="cursor-pointer flex items-center text-center">
                  {userLogo}
                </div>
                {showLogout && <Logout setShowLogout={setShowLogout} setIsLoggedIn={setIsLoggedIn} />}
              </div>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                  Login
                </span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
