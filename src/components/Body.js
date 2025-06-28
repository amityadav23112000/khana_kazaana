import RestaurantCard ,{withPromtedLabel} from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlinestatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filterlistofRestaurants, setfilterlistofRestaurants] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );

    const json = await data.json();
    setlistofRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterlistofRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };


  // If the list of restaurants is empty, show the shimmer effect

//  const {isOnline} = useOnlineStatus(); 
//  {console.log(isOnline); }
//   if (!isOnline) {
//      return (
//       <h1 className="offline">You are offline. Please check your internet connection.</h1>
//     );
//   }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants or dishes"
          value={SearchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredlistofRestaurants = listofRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(SearchValue.toLowerCase())
            );
            setfilterlistofRestaurants(filteredlistofRestaurants);
            // Reset search value after filtering
            // This is optional, you can keep the search value if you want
            setSearchValue("");
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlistofRestaurants = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilterlistofRestaurants(filteredlistofRestaurants);
          }}
        >
          Top-rated
        </button>
        <button
          className="filter-btn"
          onClick={() => {
           alert("Feature under development");
          }}
        >
          Nearest
        </button>
      </div>
      <div className="res-container">
        {filterlistofRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}

          </Link>
        ))}
      </div>
    </div>
  );
}



export default Body;
