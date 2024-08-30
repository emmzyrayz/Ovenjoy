// src/components/pages/liked.jsx
import React from "react";
import {useFavorite} from "../../context/favouriteContext";
import ItemCard from "../item-card";
import {Link} from "react-router-dom";
import {useImage} from "../../context/ImageContext";

// image imports
// import burgerNirvana from "../../assets/img/burger-Nirvana.png";
// import cakeDelight from "../../assets/img/cake delight.png";
// import cupCake from "../../assets/img/cupcake.png";
// import pieBliss from "../../assets/img/pie bliss.png";
// import brownCake from "../../assets/img/brown-cake.jpg";
// import brownRolls from "../../assets/img/brown-rolls.jpg";
// import longBread from "../../assets/img/long-bread.jpg";
// import roundCookies from "../../assets/img/round-cookies.jpg";

const Liked = () => {
  const {favorites} = useFavorite();
  const {findImagePath} = useImage();
  // const {publicPath, srcPath} = useImageContext();

  // const getImageForProduct = async (imageName) => {
  //   return await getImageSrc(imageName, publicPath, srcPath);
  // };


  // image props
  // const productImages = {
  //   "Burger Nirvana": burgerNirvana,
  //   "Cake Delights": cakeDelight,
  //   "Pie Bliss": pieBliss,
  //   "Muffin Medley": cupCake,
  //   "Brown Cake": brownCake,
  //   "Browwn Cake": brownCake,
  //   "Brown Rolls": brownRolls,
  //   "Long Bread": longBread,
  //   "Round Cookies": roundCookies,
  // };

  return (
    <div className="flex flex-col w-full items-center justify-center gap-3 relative py-3">
      <h1 className="flex text-4xl font-bold w-full items-center justify-center">
        Liked Products
      </h1>
      <div className="container">
        {favorites.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <p className="flex font-semibold items-center justify-center text-2xl w-full ">
              No products liked yet.
            </p>
          </div>
        ) : (
          favorites.map((product) => (
            <Link
              key={product.id}
              to={`/item/${product.id}`}
              className="item-link"
            >
              <ItemCard
                key={product.id}
                imgSrc={findImagePath(product.imgSrc.split("/").pop())}
                title={product.title}
                description={product.description}
                price={product.price}
                product={product}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Liked;
