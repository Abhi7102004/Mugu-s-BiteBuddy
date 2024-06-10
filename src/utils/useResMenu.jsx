import { useEffect, useState } from "react";
import { ITEM_API } from "./constants";
const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(ITEM_API + resId);
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}

export default useResMenu;