import React, { useContext, useRef, useEffect } from 'react';
import UserContext from '../utils/UserContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logout = ({ setIsLoggedIn, setShowLogout }) => {
    const { userName } = useContext(UserContext);
    const containerRef = useRef(null);

    const handleLogoutClick = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setShowLogout(false);
    };

    const hideProfileView = () => {
        setShowLogout(false);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setShowLogout(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const isDarkMode = document.body.classList.contains("dark");

    return (
        <motion.div
            ref={containerRef}
            className={`flex text-left px-10 flex-col z-50 mb-1 py-2 bg-white absolute right-10 top-18 shadow-lg border-l border-r border-b border-gray-300 rounded-lg ${isDarkMode ? 'dark:bg-[#191740] dark:border-gray-700' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.span
                className='flex items-center border-b-2 text-center dark:text-white border-gray-200 py-2'
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
            >
                <span className={`${isDarkMode ? "text-white" : "text-black"}`}>👤</span>
                <span className="ml-2 font-semibold">{userName}</span>
            </motion.span>
            <motion.div
                className='flex flex-col'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
            >
                <Link to="profileview/profile" onClick={hideProfileView} className='flex items-center py-2 px-4 rounded-sm transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <span className="text-lg dark:text-white text-black">Profile</span>
                </Link>
                <Link to="about" onClick={hideProfileView} className='flex items-center py-2 px-4 rounded-sm transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <span className="text-lg dark:text-white text-black">About Us</span>
                </Link>
                <Link to="profileview/review" onClick={hideProfileView} className='flex items-center py-2 px-4 rounded-sm transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700'>
                    <span className="text-lg dark:text-white text-black">Review</span>
                </Link>
            </motion.div>
            <div className='flex justify-center py-2 border-t-2 border-gray-200'>
                <motion.button
                    className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 text-black dark:text-white px-6 py-2 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
                    onClick={handleLogoutClick}
                    whileHover={{ scale: 1.05 }}
                >
                    Logout
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Logout;
