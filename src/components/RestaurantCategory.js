const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // If used with index, pass index here
  };

  return (
    <div className="w-11/12 md:w-6/12 mx-auto my-4">
      <div
        className="bg-gray-50 dark:bg-gray-800 text-black dark:text-gray-100 
                   shadow-lg p-4 rounded-lg transition-colors duration-300"
      >
        {/* Header */}
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl">{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {/* Item List */}
        {showItems && (
          <div className="mt-4">
            <ItemList items={data.itemCards} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
