const Shimmer = () => {
  return (
    <div className="body mx-[70px]">
      <div className="filter">
      <div className="search-cont relative">
          <input
            className="border-[2px] mr-2 border-gray-300 rounded-2xl py-2 pl-4 pr-32 text-gray-900 dark:text-white focus:border-blue-700 bg-white dark:bg-gray-700 focus:bg-gray-300 w-full shadow-md hover:shadow-lg"
            type="text"
          />
          <span className="absolute right-2 flex items-center justify-center rounded-r-2xl h-full w-auto bg-gray-300 px-10">
          </span>
        </div>
        <button className="shimmer-filter-btn"></button>
      </div>
      <div className="shimmer-cont">
        <div className="shimmer-card dark:bg-gray-900"></div>
        <div className="shimmer-card dark:bg-gray-900"></div>
        <div className="shimmer-card dark:bg-gray-900"></div>
        <div className="shimmer-card dark:bg-gray-900"></div>
        <div className="shimmer-card dark:bg-gray-900"></div>
        <div className="shimmer-card dark:bg-gray-900"></div>
        <div className="shimmer-card dark:bg-gray-900"></div>
        <div className="shimmer-card dark:bg-gray-900"></div>
      </div>
    </div>
  );
}

export default Shimmer;