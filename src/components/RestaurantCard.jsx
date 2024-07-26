import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { addFavouriteItem, removeFavouriteItem } from "../utils/favoriteSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

const borderAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  }
};

const RestaurantCont = ({ resData }) => {
  const { name, costForTwo, cuisines, avgRating, locality, areaName, id } =
    resData?.info || {};
  const dispatch = useDispatch();
  const favoriteList = useSelector((store) => store.favourite?.favouriteItems);
  const isInitialFavourite = favoriteList.some((item) => item.info.id === id);
  const [isFavorite, setIsFavorite] = useState(isInitialFavourite);
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains("dark")
  );
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsFavorite(isInitialFavourite);
  }, [isInitialFavourite, favoriteList]);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setIsDarkMode(document.body.classList.contains("dark"));
    };
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleFavourite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavouriteItem(id));
    } else {
      dispatch(addFavouriteItem(resData));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div
      className={`res-card relative shadow-lg rounded-lg overflow-hidden ${
        isDarkMode
          ? "dark:bg-gray-900 dark:border-gray-800"
          : "border-transparent"
      } border-4`}
      style={{
        borderColor: isDarkMode
          ? (isHovered ? "transparent" : "#1a202c")
          : (isHovered ? "transparent" : "white"),
        transition: "border-color 0.3s"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        borderColor: isHovered
          ? (isDarkMode
            ? ["#FF0077", "#FF6600", "#33FF77", "#FF0077"]
            : ["#FF0077", "#FF6600", "#33FF77", "#FF0077"])
          : (isDarkMode ? "#1a202c" : "white")
      }}
      transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
    >
      <motion.div
        className="relative"
        whileHover={hoverEffect}
      >
        <img
          className="res-logo w-full object-cover transition-transform duration-300"
          src={LOGO_URL + resData.info.cloudinaryImageId}
          alt={name}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100"
          whileHover={{ opacity: 1 }}
        >
          <div className="text-center p-2 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg">
            <h3 className="text-xl font-noto-sans">{name}</h3>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-4 right-4 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <IconButton
            onClick={handleFavourite}
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: !isDarkMode ? "white" : "#1a202c",
            }}
          >
            {isFavorite ? (
              <FavoriteIcon color="error" style={{ fontSize: "24px" }} />
            ) : (
              <FavoriteBorderIcon color="error" style={{ fontSize: "24px" }} />
            )}
          </IconButton>
        </motion.div>
      </motion.div>
      <div className="p-4">
        <div className="flex gap-4 items-center font-bold text-md mb-2">
          <motion.h4
            className={`price text-md ${isDarkMode ? "dark:text-white" : "transition-transform duration-300 hover:scale-105"}`}
          >
            {costForTwo}
          </motion.h4>
          <motion.div
            className={`rating ${isDarkMode ? "dark:text-white" : "transition-transform duration-300 hover:scale-105"}`}
            whileHover={{ scale: 1.1 }}
          >
            <motion.h4
              className="rating"
              animate={{ scale: [1, 1.1] }}
              transition={{ duration: 0.3 }}
            >
              ⭐{avgRating}
            </motion.h4>
          </motion.div>
        </div>
        <motion.h4
          className={`foodtype line-clamp-1 font-reddit-mono text-sm mb-2 ${isDarkMode ? "dark:text-white" : "transition-transform duration-300 hover:scale-105"}`}
        >
          {cuisines.join(", ")}
        </motion.h4>
        <p className="address text-green-600 text-sm font-semibold">
          {locality + "," + areaName}
        </p>
      </div>
    </motion.div>
  );
};

export const WithPromotedRestaurantCard = (RestaurantCont) => {
  return (props) => {
    return (
      <div>
        <RestaurantCont {...props} />
        {/* Uncomment the label if needed */}
        {/* <label className="absolute top-[10px] left-[10px] px-[4px] py-[1.5px] bg-indigo-800 rounded-md text-white">Promoted</label> */}
      </div>
    );
  };
};

export default RestaurantCont;
