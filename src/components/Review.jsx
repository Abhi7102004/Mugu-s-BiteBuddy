import React,{ useState } from "react";
export const Review =()=>{
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(true);
        const timer=setTimeout(() => setSuccessMessage(false), 3000);
        return ()=>clearTimeout(timer);
    };
    const [successMessage, setSuccessMessage] = useState(false);
    return (
        <div className="max-w-md mx-auto dark:shadow-md dark:shadow-indigo-600 dark:bg-[#191740] bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <div className="px-6 py-4">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Leave a Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2 dark:text-white">Email:</label>
                        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="topic" className="block text-gray-700 font-bold mb-2 dark:text-white">Topic:</label>
                        <select id="topic" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white" >
                            <option value="">Select a topic</option>
                            <option value="Product">Product</option>
                            <option value="Service">Service</option>
                            <option value="Experience">Experience</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="review" className="block text-gray-700 font-bold mb-2 dark:text-white">Review:</label>
                        <textarea id="review" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white" ></textarea>
                    </div>
                    <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-blue-500 dark:hover:bg-blue-700 dark:text-white">Submit Review</button>
                    </div>
                </form>
                {successMessage && (
                    <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded dark:bg-green-700 dark:text-white">
                        Review submitted successfully!
                    </div>
                )}
            </div>
        </div>
    );

}