import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCards = ({ items }) => {
  const [readMore, setReadMore] = useState({});

  const toggleReadMore = (id) => {
    setReadMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between items-center"
        >
          <div className="w-9/12 text-left border-b-2 border-gray-300 p-2 m-2">
            <span className="text-lg dark:text-white font-noto-sans mb-2">
              {item?.card?.info?.name}
            </span>
            <p className="text-md dark:text-white font-medium mb-1">
              ₹{" "}
              {item?.card?.info?.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </p>
            <p className="text-[#2c906b] dark:text-white mb-1">
              {item?.card?.info?.ratings?.aggregatedRating?.rating
                ? "★" + item?.card?.info?.ratings?.aggregatedRating?.rating
                : ""}
            </p>
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
              onClick={() => handleAddToCart(item)}
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 px-10 hover:bg-gray-200 hover:scale-95 transition-all delay-100 rounded-lg text-lg tracking-widest font-reddit-mono font-extrabold pb-2 bg-white text-[#1BA672]"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
