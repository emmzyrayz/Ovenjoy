// src/components/pages/SearchResults.jsx
import React from "react";
import {useLocation} from "react-router-dom";
import data from "../../assets/products/product.json";
import ItemCard from "../item-card";
import "./searchresult.css";
import {BackButton} from "../buttons";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || "";
  const results = data.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div re-body>
      <BackButton />
      <div className="search-results">
        {results.length > 0 ? (
          results.map((item) => (
            <ItemCard
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        ) : (
          <p>No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
