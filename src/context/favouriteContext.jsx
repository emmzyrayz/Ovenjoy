// src/context/FavoriteContext.jsx
import React, {createContext, useState, useContext} from "react";

const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === product.id)) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{favorites, toggleFavorite}}>
      {children}
    </FavoriteContext.Provider>
  );
};
