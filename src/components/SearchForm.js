import React from "react";

import "./SearchFormStyle.css";

const SearchForm = () => {
  return (
    <div className="search-Div" fetch={fetch}>
      <form className="Search-form">
        <div className="Form-control">
          <label className="search-lable" for="name">
            Search for your Favorite Cocktail
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
