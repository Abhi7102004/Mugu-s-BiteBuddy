const Shimmer = () => {
  return (
    <div className="body mx-[70px]">
      <div className="filter">
        <div className="search-cont">
          <input className="shimmer-search-btn" type="text"></input>
          <button className="shimmer-search-submit"></button>
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