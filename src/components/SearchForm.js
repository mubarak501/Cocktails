import React from "react";
import { useGlobalContext } from "../context";
import "./SearchFormStyle.css";

const SearchForm = () => {
  return (
    <div className="search-Div">
      <form className="Search-form">
        <div className="Form-control">
          <label className="search-lable" for="name">
            Search for your Favorite Cocktail
          </label>
          <input type="text" name="name" id="name" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
