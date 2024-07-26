import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const EmptyCart = () => {
  return (
    <div className="text-center w-full max-w-3xl mx-auto bg-white p-8 dark:shadow-md dark:shadow-indigo-600 rounded-lg shadow-md dark:bg-[#191740] relative overflow-hidden">
      <motion.div
        className="relative w-40 mx-auto mb-4"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <img
          className="w-full h-auto"
          src="https://img.icons8.com/?size=100&id=o4V4IXgZasg6&format=png&color=000000"
          alt="Empty Cart"
        />
      </motion.div>
      <motion.h3
        className="text-2xl font-semibold dark:text-white text-gray-700 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart is Empty
      </motion.h3>
      <motion.p
        className="text-gray-500 mt-2 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Looks like you haven't added any items to your cart yet.
      </motion.p>
      <Link to="/">
        <motion.button
          className="mt-4 bg-blue-500 dark:text-white text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Start Shopping
        </motion.button>
      </Link>
    </div>
  );
};
