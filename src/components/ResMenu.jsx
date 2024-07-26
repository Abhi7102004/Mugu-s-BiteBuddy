import { useParams } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";

const ResMenu = () => {
    const { resId } = useParams();
    const resInfo = useResMenu(resId);
    const [showIndex, setshowIndex] = useState(-1);
    if (resInfo === null) {
        return <Shimmer />;
    }
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
    const categories = itemCards.filter(
        (c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="text-center">
            <button onClick={scrollToTop} className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg">⬆️</button>
            <h2 className="text-4xl dark:text-white font-semibold my-3 animate-fade-in">{name}</h2>
            <p className="text-gray-700 dark:text-white text-xl mb-4">{cuisines.join(", ")}</p>
            {categories.map((category, index) => (
                <ScrollLink key={category?.card?.card?.title} to={`category-${index}`} smooth={true} duration={500}>
                    <RestaurantCategory
                        data={category?.card?.card}
                        showMenu={index === showIndex}
                        setshowIndex={() => setshowIndex(index)}
                    />
                </ScrollLink>
            ))}
        </div>
    );
};

export default ResMenu;
