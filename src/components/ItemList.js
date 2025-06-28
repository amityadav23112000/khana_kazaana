import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const info = item.card.info;
        return (
          <div
            data-testid="foodItems"
            key={info.id}
            className="p-4 m-2 border-b-2 text-left flex justify-between relative 
                       border-gray-200 dark:border-gray-700
                       bg-white dark:bg-gray-900
                       text-black dark:text-gray-100"
          >
            {/* Info Section */}
            <div className="w-9/12">
              <div className="py-2 font-semibold">
                <span>{info.name}</span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  ₹{(info.price ?? info.defaultPrice) / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{info.description}</p>
            </div>

            {/* Image & Button Section */}
            <div className="w-3/12 p-2 relative">
              <img
                src={CDN_URL + info.imageId}
                alt={info.name}
                className="w-full rounded-lg"
              />
              <button
                className="absolute bottom-2 left-1/2 -translate-x-1/2 
                           px-3 py-1 text-sm rounded-lg 
                           bg-black text-white dark:bg-white dark:text-black
                           shadow-md hover:scale-105 transition-transform"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
