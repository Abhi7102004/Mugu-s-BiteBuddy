import RestaurantCont, { WithPromotedRestauratCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import DarkModeToggle from "./DarkModeToggle";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [showRatingOptions, setShowRatingOptions] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.44250&lng=81.85170&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      // console.log(json);
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

  const PromotedRestaurantCard = WithPromotedRestauratCard(RestaurantCont);
  let restnumber = 1;
  let j = 1;

  return (
    <div className="body mx-[70px]">
      <div className="filter">
        <div className="search-cont">
          <input
            className="border-2 mr-2 border-blue-500 rounded-lg py-2 px-4 text-gray-900 dark:text-white leading-tight focus:outline-none focus:border-blue-700 bg-white dark:bg-gray-700 focus:bg-white w-full shadow-md hover:shadow-lg"
            type="text"
            value={searchText}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="Search Your Restaurant"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-indigo-600 dark:bg-indigo-200 dark:shadow-md dark:shadow-white dark:hover:bg-indigo-300 hover:bg-blue-700 text-white dark:text-black font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-95"
            onClick={handleSearch}
          >
            Search         
           </button>

        </div>
        <div className="rating-cont">
          <button className="flex items-center mr-7 bg-blue-500 dark:bg-blue-200 dark:text-black dark:shadow-md dark:shadow-white text-white px-3 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform scale-90 ">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleRatingOptions} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-black text-white mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
            <h4 class="text-lg font-bold">Top-Rated Restaurants</h4>
          </button>
          {showRatingOptions && (
            <div className="rating-option dark:bg-slate-900">
              <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 0, maxRating: 5 })}>0.0-5.0</button>
              <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 3, maxRating: 5 })}>3.0-5.0</button>
              <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 4.3, maxRating: 5 })}>4.3-5.0</button>
              <button className="ratings dark:text-white dark:shadow-md dark:shadow-indigo-200" onClick={() => filterByRating({ minRating: 4.6, maxRating: 5 })}>4.6-5.0</button>
            </div>
          )}
        </div>
      </div>
      <div className="res-container relative">
        {filteredList.map((restaurant) => {
          const isPromoted = (restnumber === j);
          if (isPromoted) j += 5;
          restnumber++;
          return (
            <Link to={"/resmenu/" + restaurant.info.id} style={{ textDecoration: 'none', color: 'inherit' }} key={restaurant.info.id}>
              {isPromoted ? <PromotedRestaurantCard resData={restaurant} /> : <RestaurantCont resData={restaurant} />}
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Body;
