import React from "react";
import { Link } from "react-router-dom";

export const EmptyFavorite = () => {
  return (
    <div className="text-center w-full mt-36 max-w-3xl mx-auto bg-white p-8 dark:shadow-md dark:shadow-indigo-600 rounded-lg shadow-md dark:bg-[#191740]">
      <h3 className="text-2xl font-semibold dark:text-white text-gray-700">
        Your Favorites List is Empty
      </h3>
      <p className="text-gray-500 mt-2 dark:text-white">
        Looks like you haven't added any restaurants to your favorites yet.
      </p>
      <Link to="/">
        <button className="mt-4 bg-blue-500 dark:text-white text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          Start Exploring
        </button>
      </Link>
    </div>
  );
};
