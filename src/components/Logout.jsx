import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

const Logout = ({setIsLoggedIn,setShowLogout}) => {
    const { loggedInUser,userName } = useContext(UserContext);
    const handleLogoutClick = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setShowLogout(false);
    };
    const isDarkMode = document.body.classList.contains("dark");
    return (
        <div className="flex text-left dark:bg-[#191740] flex-col z-50 mb-1 py-2 px-4 bg-white absolute right-10 top-18 shadow-lg border-l border-r border-b border-gray-300 rounded-lg">
            <span className='border-b-2 text-center dark:text-white border-gray-200 py-2'><span className={`${isDarkMode?"text-white":"text-black"}`}>👤</span>{userName}</span>
            <button className="px-16 py-1 mb-1 dark:text-white text-black rounded-sm cursor-pointer hover:bg-gray-100 transition"> About</button>
            <button className="px-16 py-1 mb-1 dark:text-white text-black rounded-sm cursor-pointer hover:bg-gray-100 transition">Contact</button>
            <button className="px-16 py-1 mb-1 dark:text-white border-b-2 border-gray-200 text-black rounded-sm cursor-pointer hover:bg-gray-100 transition">Carts</button>
            <div className='flex justify-center py-2'>
                <button className="dark:bg-gray-800 bg-gray-200 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-900 px-6 py-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105" onClick={handleLogoutClick}>Logout</button>
            </div>
        </div>
    );
};

export default Logout;