import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { clearCart } from "../utils/cartSlice";
import { EmptyCart } from "./EmptyCart";

const Carts = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { isLoggedIn } = useOutletContext();
  const navigate=useNavigate();
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
    <div>
      <h2 className="text-center text-2xl my-3 font-noto-sans font-bold dark:text-white">Carts</h2>
      <div className="w-8/12 mx-auto">
        <CartItemCard items={cartItems} />
      </div>
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length > 0 && (
        <div className="flex items-center justify-center gap-20">
          <Link to="/">
            <div className="flex justify-center">
              <button className="px-4 dark:mt-10 dark:bg-indigo-200 dark:text-black dark:hover:bg-indigo-300 cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-200 py-2 my-5 rounded-lg font-reddit-mono bg-blue-500 text-white">
                Shop More
              </button>
            </div>
          </Link>
          <div className="flex justify-center">
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 dark:mt-10 dark:bg-indigo-200 dark:text-black dark:hover:bg-indigo-300 cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-200 py-2 my-5 rounded-lg font-reddit-mono bg-blue-500 text-white"
            >
              Clear Cart
            </button>
          </div>
          {isLoggedIn ? (
            <Link to="/buy">
              <div className="flex justify-center">
                <button className="px-7 dark:mt-10 dark:bg-indigo-200 dark:text-black dark:hover:bg-indigo-300 cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-200 py-2 my-5 rounded-lg font-reddit-mono bg-blue-500 text-white">
                  Buy Now
                </button>
              </div>
            </Link>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={handleBuyClick}
                className="px-7 dark:mt-10 dark:bg-indigo-200 dark:text-black dark:hover:bg-indigo-300 cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-200 py-2 my-5 rounded-lg font-reddit-mono bg-blue-500 text-white"
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      )}
      {showLoginMessage && (
        <div className="text-center dark:text-red-200 text-red-500 pb-4">
          Please log In or Register to proceed with your purchase.
        </div>
      )}
    </div>
  );
};

export default Carts;
