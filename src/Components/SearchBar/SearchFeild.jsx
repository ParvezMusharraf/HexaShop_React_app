import React, { useState, useEffect } from "react";
import "./search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MAIN_LocalURL from "../../Request/ApiConfig";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.length > 2) {
        try {
          const response = await axios.get(`${MAIN_LocalURL}/suggestions`, {
            params: { term: searchTerm }
          });
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = async (suggestion) => {
    setSearchTerm(suggestion.title);
    setShowSuggestions(false);
    navigate(`/listingpage?productId=${suggestion._id}`)
    // try {
    //   const response = await axios.get(`http://localhost:3000/productdetailsbyId?productId=${suggestion._id}`);
    //   console.log("Product details:", response.data);
    // } catch (error) {
    //   console.error("Error fetching product details:", error);
    // }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".search-container")) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(searchTerm.length > 0)}
      />
      {showSuggestions && (
        <div className="search-suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
