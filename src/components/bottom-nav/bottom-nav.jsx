import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faUser as farUser,
} from "@fortawesome/free-regular-svg-icons";
import {faHeart, faUser} from "@fortawesome/free-solid-svg-icons";
import {useLocation, Link} from "react-router-dom";
import "./bottom-nav.css";
import {
  PiHouse,
  PiHouseFill,
  PiShoppingCart,
  PiShoppingCartFill,
} from "react-icons/pi";
import { useFavorite } from "../../context/favouriteContext";
import { useCart } from "../../context/cartContext";

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const {favorites} = useFavorite();
  const {cartItems} = useCart();

  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-icon">
        {currentPath === "/" ? (
          <PiHouseFill className="filled" />
        ) : (
          <PiHouse className="regular" />
        )}
      </Link>
      <Link to="/liked" className="nav-icon">
        <div className="nav-icon-container">
          <FontAwesomeIcon
            icon={currentPath === "/liked" ? faHeart : farHeart}
            className={currentPath === "/liked" ? "filled" : "regular"}
          />
          {favorites.length > 0 && (
            <span className="badge">{favorites.length}</span>
          )}
        </div>
      </Link>
      <Link to="/cart" className="nav-icon">
        <div className="nav-icon-container">
          {currentPath === "/cart" ? (
            <PiShoppingCartFill className="filled" />
          ) : (
            <PiShoppingCart className="regular" />
          )}
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
        </div>
      </Link>
      {/* <Link to="/profile" className="nav-icon">
        <FontAwesomeIcon
          icon={currentPath === "/profile" ? faUser : farUser}
          className={currentPath === "/profile" ? "filled" : "regular"}
        />
      </Link> */}
    </div>
  );
};

export default BottomNav;