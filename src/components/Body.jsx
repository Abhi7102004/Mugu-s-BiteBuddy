import RestaurantCont from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { SEARCH_ICON } from "../utils/constants";
import { motion, AnimatePresence } from "framer-motion";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [showRatingOptions, setShowRatingOptions] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.44250&lng=81.85170&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurantList(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants || []);
      setFilteredList(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants || []);
    } catch {
      console.log("UNABLE TO FETCH");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  const toggleRatingOptions = () => {
    setShowRatingOptions(prevState => !prevState);
  };

  const filterByRating = ({ minRating, maxRating }) => {
    const filtered = restaurantList.filter(restaurant => {
      return restaurant.info.avgRating >= minRating && restaurant.info.avgRating < maxRating;
    });
    setFilteredList(filtered);
  };

  const handleSearch = () => {
    const filtered = restaurantList.filter(res =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <div className="body mx-[70px]">
      <div className="filter items-center">
        <div className="search-cont relative">
          <input
            className="border-[2px] mr-2 border-gray-300 rounded-2xl py-2 pl-4 pr-32 text-gray-900 dark:text-white outline-none bg-white dark:bg-gray-700 focus:bg-white w-full shadow-md hover:shadow-lg"
            type="text"
            value={searchText}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="Search Your Restaurant"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <motion.span
            onClick={handleSearch}
            className="absolute right-2 flex items-center justify-center rounded-r-2xl h-full w-auto bg-gray-300 px-6 cursor-pointer"
            whileTap={{ scale: 0.95 }} // Animation on click
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              className="w-auto h-3/4"
              src={SEARCH_ICON}
              alt=""
            />
          </motion.span>
        </div>
        <div className="rating-cont">
          <motion.button
            onClick={toggleRatingOptions}
            className="flex items-center mr-7 bg-blue-500 dark:bg-gray-300 dark:text-black dark:shadow-md dark:shadow-white text-white px-3 py-2 rounded-lg shadow-md scale-90"
            whileTap={{ scale: 0.95 }} // Animation on click
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 dark:text-black transition-all duration-300 ease-in-out transform text-white mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            <h4 className="text-lg font-bold">Top-Rated Restaurants</h4>
          </motion.button>
          <AnimatePresence>
            {showRatingOptions && (
              <motion.div
                className="rating-option dark:bg-slate-900"
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }}   
                exit={{ opacity: 0, x: -20 }}   
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 0, maxRating: 5 })}>0.0-5.0</button>
                <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 3, maxRating: 5 })}>3.0-5.0</button>
                <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 4.3, maxRating: 5 })}>4.3-5.0</button>
                <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 4.6, maxRating: 5 })}>4.6-5.0</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 relative">
        {filteredList.map((restaurant) => (
          <Link to={"/resmenu/" + restaurant.info.id} style={{ textDecoration: 'none', color: 'inherit' }} key={restaurant.info.id}>
            <RestaurantCont resData={restaurant} />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
