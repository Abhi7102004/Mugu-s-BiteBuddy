import React from "react";
import { useSelector } from "react-redux";
import RestaurantCont from "./RestaurantCard";
import { Link } from "react-router-dom";
import { EmptyFavorite } from "./EmptyFavourite";

const FavoriteItems = () => {
  const favoriteList = useSelector((store) => store.favourite?.favouriteItems);

  return (
    <div className="mx-[70px]">
      {favoriteList.length === 0 ? (
        <EmptyFavorite />
      ) : (
        <>
          <h1 className="text-3xl font-noto-sans mb-4 dark:text-white text-center">
            Favorite Items
          </h1>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 relative">
            {favoriteList.map((item) => (
              <Link to={"/resmenu/" + item?.info?.id} key={item?.info?.id}>
                <RestaurantCont resData={item} />
              </Link>
            ))}
          </div>
            <Link to="/">
              <div className="flex justify-center">
                <button className="px-4 dark:mt-10 dark:bg-indigo-200 dark:text-black dark:hover:bg-indigo-300 cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-200 py-2 my-5 rounded-lg font-reddit-mono bg-blue-500 text-white">
                  Shop More
                </button>
              </div>
            </Link>
        </>
      )}
    </div>
  );
};

export default FavoriteItems;
