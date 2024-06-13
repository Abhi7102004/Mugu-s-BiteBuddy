import React from 'react';

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
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740] overflow-hidden my-4 dark:text-white">
            <div className="px-6 py-4">
                <div className="text-center">
                    <h2 className="font-bold text-2xl mb-2">{user.username}</h2>
                    <p className="text-gray-600 text-lg dark:text-gray-300">{user.email}</p>
                </div>
                <div className="mt-4">
                    <p className="text-gray-700 dark:text-gray-300">
                        <strong>Account Creation Date:</strong> {user.accountCreationDate}
                    </p>
                    <p className="text-gray-700 mt-2 dark:text-gray-300">
                        <strong>Favorite Cuisine:</strong> {user.favoriteCuisine}
                    </p>
                    <p className="text-gray-700 mt-2 dark:text-gray-300">
                        <strong>Favorite Restaurant:</strong> {user.favoriteRestaurant}
                    </p>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Recent Orders:</h3>
                        {user.recentOrders.map(order => (
                            <div key={order.id} className="border border-gray-200 dark:border-gray-600 p-4 rounded mb-2">
                                <p><strong>Restaurant:</strong> {order.restaurant}</p>
                                <p><strong>Items:</strong> {order.items.join(", ")}</p>
                                <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                                <p><strong>Date:</strong> {order.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
