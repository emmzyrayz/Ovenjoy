// src/App.jsx
import React from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
// src/index.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import NavBar from "./components/navbar/navbar";
import BottomNav from "./components/bottom-nav/bottom-nav";
import Home from "./components/pages/home";
import Liked from "./components/pages/liked";
import Cart from "./components/pages/cart";
import Profile from "./components/pages/profile";
import LoadingScreen from "./components/loading";
import ProductDetail from "./components/prod-det";
import SearchResults from "./components/search-result/searchresults";
import { FavoriteProvider } from "./context/favouriteContext";
import {CartProvider} from "./context/cartContext";

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/");
  };

  return (
    <div>
      <LoadingScreen onExploreClick={handleExploreClick} />
      {location.pathname === "/" && <NavBar />}
      {location.pathname === "/liked" && <NavBar />}
      {location.pathname === "/cart" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      {location.pathname === "/" && <BottomNav />}
      {location.pathname === "/liked" && <BottomNav />}
      {location.pathname === "/cart" && <BottomNav />}
      {location.pathname === "/profile" && <BottomNav />}
      {location.pathname === "/item/:id" && <BottomNav />}
    </div>
  );
};

function App() {
  return (
    <FavoriteProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </FavoriteProvider>
  );
}

export default App;