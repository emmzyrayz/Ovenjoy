// src/utils/ImageUtils.jsx
import burgerNirvanaSrc from "../assets/img/burger-Nirvana.png";
import cakeDelightSrc from "../assets/img/cake delight.png";
import pieBlissSrc from "../assets/img/pie bliss.png";
import cupCakeSrc from "../assets/img/cupcake.png";
import brownCakeSrc from "../assets/img/brown-cake.jpg";
import brownRollsSrc from "../assets/img/brown-rolls.jpg";
import longBreadSrc from "../assets/img/long-bread.jpg";
import roundCookiesSrc from "../assets/img/round-cookies.jpg";

// You can add more images to this object as needed
const imagePathsSrc = {
  "burger-Nirvana.png": burgerNirvanaSrc,
  "cake delight.png": cakeDelightSrc,
  "pie bliss.png": pieBlissSrc,
  "cupcake.png": cupCakeSrc,
  "brown-cake.jpg": brownCakeSrc,
  "brown-rolls.jpg": brownRollsSrc,
  "long-bread.jpg": longBreadSrc,
  "round-cookies.jpg": roundCookiesSrc,
};

const ImageUtils = {
  getImagePath: (imageName) => {
    // First, try to load from the src folder
    const srcImagePath = imagePathsSrc[imageName];

    if (srcImagePath) {
      return srcImagePath;
    }

    // Fallback to /public folder
    return `${process.env.PUBLIC_URL}/assets/img/${imageName}`;
  },
};

export default ImageUtils;
