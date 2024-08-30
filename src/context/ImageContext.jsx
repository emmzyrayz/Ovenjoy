// src/context/ImageContext.jsx
import React, {createContext, useContext} from "react";
import ImageUtils from "../utility/imageUtilis";

const ImageContext = createContext();

export const ImageProvider = ({children}) => {
  const findImagePath = (imageName) => {
    return ImageUtils.getImagePath(imageName);
  };

  return (
    <ImageContext.Provider value={{findImagePath}}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => useContext(ImageContext);