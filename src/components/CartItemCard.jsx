// CartItemCard.jsx

import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeItem,addItem } from "../utils/cartSlice";

const CartItemCard = ({ items }) => {
  const [readMore, setReadMore] = useState({});

  const toggleReadMore = (id) => {
    setReadMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item?.card?.info?.id));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(removeItem(item?.card?.info?.id));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex dark:shadow-lg dark:shadow-indigo-600 dark:bg-[#191740] justify-between items-center"
        >
          <div className="w-9/12 text-left border-b-2 border-gray-300 p-2 m-2">
            <span className="text-lg font-noto-sans dark:text-white mb-2">
              {item?.card?.info?.name}
            </span>
            <p className="text-md dark:text-white font-medium mb-1">
              ₹{" "}
              {item?.card?.info?.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-[#2c906b] dark:text-white mb-1">
                {item?.card?.info?.ratings?.aggregatedRating?.rating
                  ? "★" + item?.card?.info?.ratings?.aggregatedRating?.rating
                  : ""}
              </p>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="text-[#2c906b] font-reddit-mono mr-2"
                >
                  -
                </button>
                <p className="font-reddit-mono dark:text-[#46d8a3] text-[#2c906b]">
                  Count: {item.count}
                </p>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="text-[#2c906b] font-reddit-mono ml-2"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-50 font-reddit-mono text-xs font-medium">
              {readMore[item?.card?.info?.id]
                ? item?.card?.info?.description
                : item?.card?.info?.description?.substring(0, 120) +
                  (item?.card?.info?.description?.length > 120 ? "..." : "")}
              {item?.card?.info?.description?.length > 120 && (
                <span
                  className="text-blue-600 cursor-pointer ml-1"
                  onClick={() => toggleReadMore(item?.card?.info?.id)}
                >
                  {readMore[item?.card?.info?.id] ? "Read Less" : "Read More"}
                </span>
              )}
            </p>
          </div>
          <div className="w-[160px] h-[110px] p-[2px] relative object-cover overflow-hidden">
            <img
              className="w-full h-full"
              src={LOGO_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="absolute bottom-[-7px] left-1/2 transform -translate-x-1/2 px-7 hover:bg-gray-200 hover:scale-95 transition-all delay-100 rounded-lg text-lg tracking-widest font-reddit-mono font-extrabold pb-2 bg-white text-[#1BA672]"
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemCard;
