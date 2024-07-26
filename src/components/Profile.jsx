import React from 'react';
import { motion } from 'framer-motion';

export const Profile = () => {
    const user = {
        username: "foodie_jane",
        email: "user07@example.com",
        accountCreationDate: "2023-05-20",
        favoriteCuisine: "Italian",
        favoriteRestaurant: "Mama Mia's Pizzeria",
        recentOrders: [
            {
                id: 1,
                restaurant: "Burger Palace",
                items: ["Classic Cheeseburger", "Fries", "Milkshake"],
                total: 25.99,
                date: "2024-06-10",
            },
            {
                id: 2,
                restaurant: "Sushi Haven",
                items: ["California Roll", "Salmon Nigiri", "Miso Soup"],
                total: 42.50,
                date: "2024-06-08",
            }
        ]
    };

    return (
        <motion.div
            className="max-w-md mx-auto bg-white shadow-lg rounded-lg dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740] overflow-hidden my-4 dark:text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
        >
            <div className="px-6 py-4">
                <div className="text-center">
                    <motion.h2
                        className="font-bold text-2xl mb-2"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {user.username}
                    </motion.h2>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                        {user.email}
                    </p>
                </div>
                <div className="mt-4">
                    <motion.p
                        className="text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <strong>Account Creation Date:</strong> {user.accountCreationDate}
                    </motion.p>
                    <motion.p
                        className="text-gray-700 mt-2 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <strong>Favorite Cuisine:</strong> {user.favoriteCuisine}
                    </motion.p>
                    <motion.p
                        className="text-gray-700 mt-2 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <strong>Favorite Restaurant:</strong> {user.favoriteRestaurant}
                    </motion.p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Recent Orders:</h3>
                        {user.recentOrders.map(order => (
                            <motion.div
                                key={order.id}
                                className="border border-gray-200 dark:border-gray-600 p-4 rounded mb-2"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p><strong>Restaurant:</strong> {order.restaurant}</p>
                                <p><strong>Items:</strong> {order.items.join(", ")}</p>
                                <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                                <p><strong>Date:</strong> {order.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
