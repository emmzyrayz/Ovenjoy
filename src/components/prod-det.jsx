// src/components/prod-det.jsx
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import data from "../assets/products/product.json";
import "./grid-con/grid-con.css";
import "../App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHeart as farHeart,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faMinusSquare,
  faSquarePlus as farSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import {BackButton} from "./buttons";

const ProductDetail = () => {
  const {id} = useParams();
  const item = data.find((item) => item.id.toString() === id);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  console.log("Imported data:", data);
  console.log("Item ID from URL params:", id);
  console.log("Found item:", item);

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="product-detail">
      <BackButton />

      <img src={item.imgSrc} alt={item.title} className="product-image" />

      <div className="product-info">
        <div className="product-info-top">
          <h1>{item.title}</h1>

          <button
            className={`favorite-button ${
              isFavorite ? "icon-color" : "icon-color-active"
            }`}
            onClick={handleFavoriteToggle}
          >
            <FontAwesomeIcon icon={isFavorite ? faHeart : farHeart} />
          </button>
        </div>

        <p>{item.description}</p>

        <div className="product-meta">
          <div className="quantity">
            <div className="faint-head">Quantity</div>
            <div className="quantity-control">
              <button onClick={() => handleQuantityChange(-1)}>
                <FontAwesomeIcon icon={faMinusSquare} />
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)}>
                <FontAwesomeIcon icon={farSquarePlus} />
              </button>
            </div>
          </div>
          <div className="ready-in">
            <div className="faint-head">Ready In</div>
            <span>{item.readyTime} min</span>
          </div>
          <div className="distance">
            <div className="faint-head"> Distance</div>
            <span>{item.distance} km</span>
          </div>
        </div>
        <div className="product-info-bottom">
          <div className="total-price">
            <div className="faint-head">Total Price</div>
            <span>${(item.price * quantity).toFixed(2)}</span>
          </div>
          <button className="add-to-cart-button">
            Add To Cart <FontAwesomeIcon icon={faSquarePlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;