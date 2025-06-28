import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] h-[360px] rounded-lg bg-[#1f1f1f] hover:bg-[#2c2c2c] shadow-md text-white flex flex-col justify-between transition duration-200"
    >
      <img
        className="rounded-lg w-full h-[150px] object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <div className="flex flex-col flex-grow mt-3">
        <h3 className="font-bold text-lg text-orange-400 line-clamp-1">
          {name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
         Cuisines : {cuisines.join(", ")}
        </p>

        <div className="flex justify-between text-sm text-gray-300 pt-2">
          <span>Rating : ⭐ {avgRating}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-300 pt-2">
          <span> {sla?.deliveryTime} mins</span>
        </div>
        <div className="flex justify-between text-sm text-gray-300 pt-2">
          <p className="text-sm text-gray-400 mt-1">{costForTwo} Items</p>
        </div>
      </div>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-red-600 text-white m-2 p-2 rounded-lg text-xs z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
