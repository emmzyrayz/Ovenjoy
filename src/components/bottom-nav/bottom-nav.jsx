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

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
        <FontAwesomeIcon
          icon={currentPath === "/liked" ? faHeart : farHeart}
          className={currentPath === "/liked" ? "filled" : "regular"}
        />
      </Link>
      <Link to="/cart" className="nav-icon">
        {currentPath === "/cart" ? (
          <PiShoppingCartFill className="filled" />
        ) : (
          <PiShoppingCart className="regular" />
        )}
      </Link>
      <Link to="/profile" className="nav-icon">
        <FontAwesomeIcon
          icon={currentPath === "/profile" ? faUser : farUser}
          className={currentPath === "/profile" ? "filled" : "regular"}
        />
      </Link>
    </div>
  );
};

export default BottomNav;