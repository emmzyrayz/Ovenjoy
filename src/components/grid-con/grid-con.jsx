// src/components/grid-con/grid-con.jsx
import React, {useEffect, useState} from "react";
import ItemCard from "../item-card";
import {Link} from "react-router-dom";
import data from "../../assets/products/product.json";
import "./grid-con.css";
import "../../App.css";
import burgerNirvana from "../../assets/img/burger-Nirvana.png";
import cakeDelight from "../../assets/img/cake delight.png";
import cupCake from "../../assets/img/cupcake.png";
import pieBliss from "../../assets/img/pie bliss.png";
import brownCake from "../../assets/img/brown-cake.jpg";
import brownRolls from "../../assets/img/brown-rolls.jpg";
import longBread from "../../assets/img/long-bread.jpg";
import roundCookies from "../../assets/img/round-cookies.jpg";

const GridCon = () => {
 const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    // Simulate fetching data from a server
    console.log("Setting items with data:", data);
    setItems(data);
  }, []);

  const productImages = {
    "Burger Nirvana": burgerNirvana,
    "Cake Delights": cakeDelight,
    "Pie Bliss": pieBliss,
    "Muffin Medley": cupCake,
    "Brown Cake": brownCake,
    "Brown Rolls": brownRolls,
    "Long Bread": longBread,
    "Round Cookies": roundCookies,
  };

  const productSum = {
    "Burger Nirvana": "Innovative pastries merging flavors and styles.",
    "Cake Delights": "Indulge in elegant cakes, from layered creations.",
    "Pie Bliss": "Sweet and savory pies that offer comforting flavors.",
    "Muffin Medley":
      "Explore a world of muffin flavors, from classic blueberry.",
    "Brown Cake": "Rich and moist Brown Cake, perfect for any sweet occasion.",
    "Brown Rolls":
      "Soft and fluffy Brown Rolls with a golden crust, ideal for sandwiches or sides.",
    "Long Bread":
      "Chewy Long Bread with a crunchy crust, perfect for hearty sandwiches or toasting.",
    "Round Cookies":
      "Deliciously baked Round Cookies, a delightful snack anytime.",
  };

  console.log("Items to render:", items);

  return (
    <div className="container">
      {items.map((item) => (
        <Link key={item.id} to={`/item/${item.id}`} className="item-link">
          <ItemCard
            imgSrc={productImages[item.title]}
            title={item.title}
            description={productSum[item.title]}
            price={item.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default GridCon;