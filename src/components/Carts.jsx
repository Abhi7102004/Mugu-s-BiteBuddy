import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { clearCart } from "../utils/cartSlice";
import { EmptyCart } from "./EmptyCart";
import { motion } from "framer-motion";

const Carts = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { isLoggedIn } = useOutletContext();
  const navigate = useNavigate();
  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    if (!isLoggedIn) {
      setShowLoginMessage(true);
      const timer = setTimeout(() => {
        setShowLoginMessage(false);
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="p-6">
      <motion.h2
        className="text-center text-3xl my-5 font-bold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Carts
      </motion.h2>
      <div className="w-10/12 mx-auto mb-8">
        <CartItemCard items={cartItems} />
      </div>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col gap-6 items-center">
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <motion.button
                className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop More
              </motion.button>
            </Link>
            <motion.button
              onClick={() => dispatch(clearCart())}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Cart
            </motion.button>
            {isLoggedIn ? (
              <Link to="/buy">
                <motion.button
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Now
                </motion.button>
              </Link>
            ) : (
              <motion.button
                onClick={handleBuyClick}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy Now
              </motion.button>
            )}
          </motion.div>
          {showLoginMessage && (
            <motion.div
              className="text-center text-red-500 dark:text-red-200 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Please log In or Register to proceed with your purchase.
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carts;
