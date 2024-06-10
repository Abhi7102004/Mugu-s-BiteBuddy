import { useState,useEffect } from "react";
const useOnline=()=>{
    const [status,setstatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setstatus(true);
        })
        window.addEventListener("offline",()=>{
            setstatus(false);
        })
    },[])

    return status;
}
export default useOnline;