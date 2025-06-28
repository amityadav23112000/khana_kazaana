import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./shimmer";
import useRestrauntMenu  from "../utils/useRestrauntMenu"; // Ensure shimmer component exists
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const  { restaurant, menuItems, loading } = useRestrauntMenu(resId);
  const dispatch = useDispatch();
  const handleItem = (item) => {
    // Function to handle adding an item to the cart
    console.log("Item added to cart:", item);
    dispatch(addItem(item));
  }
  if (!restaurant) return <Shimmer />;
  

  return (
    <div>
      {/* ===== Header ===== */}
      <div className="restaurant-header">
        <h1>{restaurant.name}</h1>
        <div className="restaurant-info">
          <span>
            ⭐ {restaurant.avgRating} ({restaurant.totalRatingsString})
          </span>{" "}
          • <span>{restaurant.costForTwo}</span>
        </div>
        <div className="restaurant-tags">
          {restaurant.cuisines.map((cuisine, i) => (
            <span className="tag" key={i}>
              {cuisine}
              {i < restaurant.cuisines.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div className="restaurant-meta">
          <p>📍 Outlet: {restaurant.locality}</p>
          <p>🕒 {restaurant.sla.slaString}</p>
        </div>
        <div className="offers-banner">
          🆓 Free delivery on orders above ₹199
        </div>
      </div>

      {/* ===== Deals Section ===== */}
      <div className="deals-container">
        <div className="deal-card">
          💸 Extra ₹45 Off
          <br />
          <small>Applicable on Coupons</small>
        </div>
        <div className="deal-card">
          🔥 Items at ₹79
          <br />
          <small>On select items</small>
        </div>
        <div className="deal-card">
          🎁 Flat 30% OFF
          <br />
          <small>Limited Time</small>
        </div>
      </div>

      {/* ===== Menu Search Section ===== */}
      <div className="menu-section">
        <div className="menu-header">🍴 MENU</div>
        <input
          type="text"
          className="menu-search"
          placeholder="Search for dishes"
        />
      </div>

      {/* ===== Menu Items ===== */}
      {menuItems.map((item, index) => (
        <div className="menu-item" key={index}>
          <div className="info">
            <p className="veg-icon">🟢</p>
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>
            <p className="rating">⭐ {item.rating}</p>
            <p className="desc">{item.description}</p>
          </div>
          <div className="image-area">
            <img src={item.image} alt={item.name} />
            <button className="add-btn" onClick={()=>handleItem(item)}>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
