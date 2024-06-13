import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const RestaurantCont = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, sla, locality, areaName } = resData?.info;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="res-card relative shadow-lg shadow-[#cacaca] dark:bg-gray-900 dark:shadow-lg dark:shadow-indigo-600">
      <div className="res-logo-cont">
        <img className="res-logo" src={LOGO_URL + resData.info.cloudinaryImageId}
        />
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className={`res-cart text-4xl cursor-pointer`}>
            {isHovered ? '💙' : '🩷'}
          </h3>
        </div>
      </div>
      <h3 className="res-name dark:text-white">{name}</h3>
      <h4 className="price dark:text-white">{costForTwo}</h4>
      <h4 className="foodtype dark:text-white">{cuisines.join(", ")}</h4>
      <div className="rating-time dark:text-white">
        <h4 className="rating dark:text-white">⭐{avgRating}</h4>
      </div>
      <p className="address dark:text-white">{locality + "," + areaName}</p>
    </div>
  )
};

export const WithPromotedRestauratCard = (RestaurantCont) => {
  return (props) => {
    return (
      <div>
        <RestaurantCont {...props} />
        {/* <label className="absolute top-[10px] left-[10px] px-[4px] py-[1.5px] bg-indigo-800 rounded-md text-white">Promoted</label> */}
      </div>
    )
  }
}

export default RestaurantCont;