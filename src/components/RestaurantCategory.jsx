import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data,showMenu,setshowIndex}) => {
    const expandMenu = () => {
        setshowIndex();
    };

    return (
        <div>
            <div className="lg:w-8/12 md:w-8/12 w-10/12 cursor-pointer p-4 dark:shadow-2xl dark:shadow-indigo-600 dark:bg-[#191740] mx-auto bg-white shadow-lg dark:border-b-6 border-b-8 dark:border-b-indigo-900 border-gray-200">
                <button className="flex justify-between w-full" onClick={expandMenu}>
                    <span className="font-noto-sans dark:text-white font-bold text-lg mb-3">{data.title} ({data.itemCards.length})</span>
                    <span>{showMenu ? '⬆️' : '⬇️'}</span>
                </button>
                {showMenu && (
                    <div>
                        <ItemCards items={data.itemCards}/>
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default RestaurantCategory;
