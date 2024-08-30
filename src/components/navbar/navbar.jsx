import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBarsStaggered,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/img/logo.svg";
import data from "../../assets/products/product.json";
import SearchSuggestions from "../suggestion/suggestion";


const NavBar = () => {

  const [searchActive, setSearchActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setSearchActive(true);
  };

  const handleCloseIconClick = () => {
    setSearchActive(false);
    setInputValue("");
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setInputValue(query);
    if (query) {
      const filteredSuggestions = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      setSearchActive(false);
      navigate(`/search?query=${inputValue.trim()}`);
    }
  };

    return (
      <>
        <div className="navbar">
          {/* <FontAwesomeIcon icon={faBarsStaggered} /> */}

          <div className="logo-con m-left">
            <div className="logo-img">
              <img src={Logo} />
            </div>
            <div className="logo-title">Ovenjoy</div>
          </div>

          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={handleSearchIconClick}
          />
        </div>
        <div className={`search-con ${searchActive ? "active" : ""}`}>
          <input
            placeholder="Search...."
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="search-icons">
            <FontAwesomeIcon
              className={inputValue ? "" : "active"}
              icon={faTimes}
              onClick={handleCloseIconClick}
            />
            <FontAwesomeIcon
              className={inputValue ? "active" : ""}
              icon={faMagnifyingGlass}
              onClick={handleSearch}
            />
          </div>
          {searchActive && suggestions.length > 0 && (
            <SearchSuggestions
              suggestions={suggestions}
              onSelect={(item) => {
                setSearchActive(false);
                setInputValue("");
                navigate(`/item/${item.id}`);
              }}
            />
          )}
        </div>
      </>
    );
};

export default NavBar;