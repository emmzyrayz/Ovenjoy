// src/ItemCard.jsx
import React, {useState} from "react";
import "./grid-con/grid-con.css"; // Ensure this path matches your project structure
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSquarePlus as farSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart, faSquarePlus} from "@fortawesome/free-regular-svg-icons";

const ItemCard = ({imgSrc, title, description, price}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const toggleFavorite = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsFavorite(!isFavorite);
  };

  const toggleCartPlus = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsCart(!isCart);
  };

  console.log("Rendering ItemCard:", {imgSrc, title, description, price});


  return (
    <div className="item">
      <div className="item-img">
        <img src={imgSrc} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="price">${price}</div>
      <div className="icons">
        <button type="button" className="add" onClick={toggleCartPlus}>
          <FontAwesomeIcon
            icon={isCart ? farSquarePlus : faSquarePlus}
            className={isCart ? "icon-color" : "icon-color-active"}
          />
        </button>
        <button type="button" className="heart" onClick={toggleFavorite}>
          <FontAwesomeIcon
            icon={isFavorite ? faHeart : farHeart}
            className={isFavorite ? "icon-color" : "icon-color-active"}
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
