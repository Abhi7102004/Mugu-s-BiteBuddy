import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { addFavouriteItem, removeFavouriteItem } from "../utils/favoriteSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

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
    <div className="res-card relative shadow-lg shadow-[#cacaca] dark:bg-gray-900 dark:shadow-lg dark:shadow-indigo-600">
      <div className="res-logo-cont">
        <img
          className="res-logo w-full"
          src={LOGO_URL + resData.info.cloudinaryImageId}
          alt={name}
        />
        <IconButton
          onClick={handleFavourite}
          className="absolute bottom-4 -right-40"
          style={{
            zIndex: 10,
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
      </div>
      <h3 className="dark:text-white text-xl font-noto-sans line-clamp-2 -mt-6">{name}</h3>
      <div className="flex gap-4 items-center font-bold text-md mt-1 ">
        <h4 className="price dark:text-white text-md ">{costForTwo}</h4>
        <div className={`rating-timedark:text-white font-reddit-mono`}>
          <h4 className="rating">⭐{avgRating}</h4>
        </div>
      </div>
      <h4 className="foodtype line-clamp-1 font-reddit-mono text-sm mt-1 dark:text-white">
        {cuisines.join(", ")}
      </h4>
      <p className={`address text-green-600 text-sm mt-2 font-semibold`}>{locality + "," + areaName}</p>
    </div>
  );
};

export const WithPromotedRestaurantCard = (RestaurantCont) => {
  return (props) => {
    return (
      <div>
        <RestaurantCont {...props} />
        {/* <label className="absolute top-[10px] left-[10px] px-[4px] py-[1.5px] bg-indigo-800 rounded-md text-white">Promoted</label> */}
      </div>
    );
  };
};

export default RestaurantCont;
