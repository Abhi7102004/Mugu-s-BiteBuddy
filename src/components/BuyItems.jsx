import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../utils/cartSlice';
import { motion } from 'framer-motion';

export const BuyItems = () => {
    const navigate = useNavigate();
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleContinueShopping = () => {
        dispatch(clearCart());
        navigate("/");
    };

    const total_cost = items.reduce((sum, item) => {
        const price = item?.card?.info?.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100;
        return sum + (price * item.count);
    }, 0);

    return (
        <motion.div 
            className="flex flex-col items-center mt-10 min-h-screen p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className="bg-white dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740] p-8 rounded-lg shadow-2xl shadow-gray-300 text-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <motion.h1 
                    className="text-3xl border-b-[2px] border-[#748ffb] pb-2 font-bold dark:text-white text-green-500 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Thank You for Your Purchase!
                </motion.h1>
                <motion.p 
                    className="text-lg text-gray-700 dark:text-white mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Your order has been placed successfully.
                </motion.p>
                <div className="text-left mb-6">
                    <motion.h3 
                        className="text-xl dark:text-white font-semibold text-gray-800 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        Items:
                    </motion.h3>
                    <motion.ul 
                        className="list-none mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        {items.map((item, index) => (
                            <motion.li 
                                key={index} 
                                className="flex justify-between border-b-[1px] border-b-gray-100 dark:bg-[#1f1d49] items-center bg-gray-50 p-2 rounded-md mb-2 shadow-sm"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <span className="font-medium dark:text-white text-gray-900">{item?.card?.info?.name}</span>
                                <span className="text-gray-600 dark:text-white">₹{item?.card?.info?.defaultPrice ? (item.card.info.defaultPrice * item.count) / 100 : item.card.info.price * item.count / 100}</span>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h2 
                        className="text-2xl font-semibold dark:text-white text-gray-800 mt-5 mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        Order Details:
                    </motion.h2>
                    <motion.ul 
                        className="list-disc list-inside text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <li className='dark:text-white'><strong>Order ID:</strong> #ABC123</li>
                        <li className='dark:text-white'><strong>Total Amount:</strong> ₹{total_cost.toFixed(2)}</li>
                    </motion.ul>
                </div>
                <motion.button
                    onClick={handleContinueShopping}
                    className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                >
                    Order More
                </motion.button>
            </motion.div>
        </motion.div>
    );
};
