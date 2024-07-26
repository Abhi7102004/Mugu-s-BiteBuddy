import React, { useState } from "react";
import { motion } from "framer-motion";

export const Review = () => {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    const timer = setTimeout(() => setSuccessMessage(false), 3000);
    return () => clearTimeout(timer);
  };

  return (
    <motion.div
      className="max-w-md mx-auto dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740] bg-white shadow-lg rounded-lg overflow-hidden my-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Leave a Review
        </h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 dark:text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="topic"
              className="block text-gray-700 font-bold mb-2 dark:text-white"
            >
              Topic:
            </label>
            <select
              id="topic"
              aria-placeholder="Select an option"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <option value="">Select an option</option>
              <option value="Product">Product</option>
              <option value="Service">Service</option>
              <option value="Experience">Experience</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="review"
              className="block text-gray-700 font-bold mb-2 dark:text-white"
            >
              Review:
            </label>
            <textarea
              id="review"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white transition duration-300 ease-in-out"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-blue-500 dark:hover:bg-blue-700 dark:text-white transition-transform duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Submit Review
            </motion.button>
          </div>
        </motion.form>
        {successMessage && (
          <motion.div
            className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded dark:bg-green-700 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Review submitted successfully!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
