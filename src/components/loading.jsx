import React, {useEffect, useState} from "react";
import "../App.css"; // Make sure to create and link a CSS file for styling
import Logo from "../assets/img/logo.svg"

const LoadingScreen = ({onExploreClick}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add class to body to hide the scrollbar
    document.body.classList.add("loading-active");

    // Simulate a loading delay
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Adjust the delay as needed

    return () => {
      // Remove class from body when component unmounts
      document.body.classList.remove("loading-active");
      clearTimeout(timer);
    };
  }, []);

 const handleButtonClick = () => {
   setIsLoaded(true);
   setTimeout(() => {
     onExploreClick();
     document.body.classList.remove("loading-active"); // Ensure scrollbar is re-enabled after loading
   }, 500); // Adjust the timeout to match the CSS transition duration
 };

  return (
    <div className={`loading-screen ${isLoaded ? "loaded" : ""}`}>
      <div className="content">
        <div className={`content-logo ${showButton ? "stopped" : ""}`}>
          <img src={Logo} alt="OvenJoy Logo" />
        </div>
        <h1>Welcome to OvenJoy!</h1>
        <p>
          Embark on a delightful journey through the world of pastries. From
          flaky croissants to creamy éclairs, OvenJoy brings the bakery to you.
        </p>
        {showButton && (
          <button onClick={handleButtonClick}>Let's Explore</button>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;