// src/components/search/SearchSuggestions.jsx
import React from "react";
import {Link} from "react-router-dom";
import "./suggestion.css";

const SearchSuggestions = ({suggestions, onSelect}) => {
  return (
    <div className="search-suggestions">
      {suggestions.map((item) => (
        <Link
          key={item.id}
          to={`/item/${item.id}`}
          className="suggestion-item"
          onClick={() => onSelect(item)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestions;
