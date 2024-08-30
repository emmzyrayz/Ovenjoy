// src/components/grid-con/grid-con.jsx
import React, {useEffect, useState} from "react";
import ItemCard from "../item-card";
import {Link} from "react-router-dom";
import data from "../../assets/products/product.json";
import "./grid-con.css";
import "../../App.css";
import { useImage } from "../../context/ImageContext";

const GridCon = () => {
  const [items, setItems] = useState([]);
  const {findImagePath} = useImage();
  //  const [item, setItem] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    // Simulate fetching data from a server
    console.log("Setting items with data:", data);
    setItems(data);
  }, []);


  const productSum = {
    "Burger Nirvana": "Innovative pastries merging flavors and styles.",
    "Cake Delights": "Indulge in elegant cakes, from layered creations.",
    "Pie Bliss": "Sweet and savory pies that offer comforting flavors.",
    "Muffin Medley":
      "Explore a world of muffin flavors, from classic blueberry.",
    "Brown Cake": "Rich and moist Brown Cake, perfect for any sweet occasion.",
    "Browwn Cake": "Rich and moist Brown Cake, perfect for any sweet occasion.",
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
            imgSrc={findImagePath(item.imgSrc.split("/").pop())}
            title={item.title}
            description={productSum[item.title]}
            price={item.price}
            product={item} // Pass the whole product object
          />
        </Link>
      ))}
    </div>
  );
};

export default GridCon;
