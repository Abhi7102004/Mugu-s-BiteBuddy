// src/components/ThankYou.js
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../utils/cartSlice';
import { useSelector } from 'react-redux';
export const BuyItems = () => {
    const navigate = useNavigate();
    const Items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleContinueShopping = () => {
        dispatch(clearCart());
        navigate("/");
    };
    const total_cost = Items.reduce((sum, item) => {
        const price = item?.card?.info?.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price / 100;
        return sum + (price*item.count);
    }, 0);    

    return (
        <div className="flex flex-col items-center mt-10 min-h-screen p-4">
            <div className="bg-white dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740] p-8 rounded-lg shadow-2xl shadow-gray-300 text-center">
                <h1 className="text-3xl border-b-[2px] border-[#748ffb] pb-2 font-bold dark:text-white text-green-500 mb-4">Thank You for Your Purchase!</h1>
                <p className="text-lg text-gray-700 dark:text-white mb-4">Your order has been placed successfully.</p>
                <div className="text-left mb-6">
                    <h3 className="text-xl dark:text-white font-semibold text-gray-800 mt-4">Items:</h3>
                    <ul className="list-none mt-2">
                        {Items.map((item, index) => (
                            <li key={index} className="flex justify-between border-b-[1px] border-b-gray-100 dark:bg-[#1f1d49] items-center bg-gray-50 p-2 rounded-md mb-2 shadow-sm">
                                <span className="font-medium dark:text-white text-gray-900">{item?.card?.info?.name}</span>
                                <span className="text-gray-600 dark:text-white">₹{item?.card?.info?.defaultPrice ? (item.card.info.defaultPrice*item.count) / 100 : item.card.info.price*item.count / 100}</span>
                            </li>
                        ))}
                    </ul>
                    <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mt-5 mb-2">Order Details:</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className='dark:text-white'><strong >Order ID:</strong> #ABC123</li>
                        <li className='dark:text-white'><strong>Total Amount:</strong> ₹{total_cost.toFixed(2)}</li>
                    </ul>
                </div>
                <button
                    onClick={handleContinueShopping}
                    className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Order More
                </button>
            </div>
        </div>
    );
};

