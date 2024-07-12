// src/App.jsx
import React from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/item/:id" element={<ProductDetail />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      {location.pathname === "/" && <BottomNav />}
    </div>
  );
};

function App() {
  return <AppContent />;
}

export default App;