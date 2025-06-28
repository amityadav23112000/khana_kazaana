import { LOGO_URL } from "../utils/constants";
import  UserContext from "../utils/UserContext";
import React, { useState ,useContext } from "react";
import {Link} from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
   
  const [Loginbtn ,setLoginbtn] = useState("Login");
  const {loggedInUser} = useContext(UserContext);

  // Accessing the cart items from the Redux store subscription
  const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="header">
        <div>
          <img
            className="logo"
            scr="react/khana_kazaana/images.png"
            alt="Test"
          />
          <div className="title">
            <h1>Khana-Kazaana</h1>
          </div>
        </div>

        <div className="nav-items">
          <ul className="nav-list">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {" "}
              <Link to="/cart">Cart 🛒 - {cartItems.length} items</Link>
            </li>
            <button
              className="login-btn"
              onClick={() => {
                {
                  Loginbtn === "Login"
                    ? setLoginbtn(loggedInUser)
                    : setLoginbtn("Login");
                }
              }}
            >
              {Loginbtn}
            </button>
          </ul>
        </div>
      </div>
    );
};

export default Header;