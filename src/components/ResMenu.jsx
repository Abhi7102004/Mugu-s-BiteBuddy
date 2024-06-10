import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);
  const [showIndex,setshowIndex]=useState(-1);
  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resInfo)
  const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
  const categories = itemCards.filter(
    (c) =>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories)

  return (
    <div className="text-center">
      <h2 className="text-4xl dark:text-white font-semibold my-3">{name}</h2>
      <p className="text-gray-700 dark:text-white text-xl mb-4">{cuisines.join(", ")}</p>
      {categories.map((category,index) => (
          <RestaurantCategory 
            key={category?.card?.card?.title}
            data={category?.card?.card} 
            showMenu={index===showIndex && true}
            setshowIndex={()=>setshowIndex(index)} />
        ))
      }
    </div>
  );
};

export default ResMenu;
