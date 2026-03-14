import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser, "vamsy");

  const loginHandler = () => {
    isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
  };

  return (
    <div className="header">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://images.freecreatives.com/wp-content/uploads/2016/03/Editable-Restaurant-Logo-Design-.png"
      />
      <ul className="nav-items">
        <li className="nav-list-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/cart">Cart</Link>
        </li>
        <button className="login-btn" onClick={loginHandler}>
          {isLoggedIn}
        </button>
        <li>{`Username: ${loggedInUser}`}</li>
      </ul>
    </div>
  );
};

export default Header;
