import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { Link } from "react-router-dom";
const Carts=()=>{
  const cartItems=useSelector((store)=>store.cart.items);
  return (
    <div className="">
       <h2 className="text-center text-2xl my-3 font-noto-sans font-bold dark:text-white">Carts</h2>
       <div className="w-8/12 mx-auto">
        <CartItemCard items={cartItems}/>
       </div>
       {
        cartItems.length===0 && 
        <div className="text-center w-full max-w-3xl mx-auto bg-white p-8 dark:shadow-md dark:shadow-indigo-600 rounded-lg shadow-md dark:bg-[#191740]">
            <img
              className="w-40 mx-auto mb-4"
              src="https://img.icons8.com/?size=100&id=o4V4IXgZasg6&format=png&color=000000"
              alt="Empty Cart"
            />
            <h3 className="text-2xl font-semibold dark:text-white text-gray-700">Your Cart is Empty</h3>
            <p className="text-gray-500 mt-2 dark:text-white">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/">
              <button className="mt-4 bg-blue-500 dark:text-white text-white px-5 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                Start Shopping
              </button>
            </Link>
          </div>
      }
      {
        cartItems.length>0 && <Link to="/"><div className="flex justify-center"><button className="px-4 dark:mt-10 dark:bg-indigo-200 dark:text-black dark:hover:bg-indigo-300 cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-200 py-2 my-5 rounded-lg font-reddit-mono bg-blue-500 text-white">Shop More</button></div></Link>
      }
    </div>
  );
}
export default Carts;