import React from "react";
import { Link } from "react-router-dom";
import "./cocktailstyle.css";

const Cocktail = () => {
  return (
    <div className="CocktailHeading">
      <h2>Cocktail</h2>
      <div className="CockTailCenter">
        <article>
          <div className="image-container">
            <img src="" />
          </div>
          <div className="Cocktail-description"></div>
        </article>
        <article>
          <div className="image-container"></div>
          <div className="Cocktail-description"></div>
        </article>
        <article>
          <div className="image-container"></div>
          <div className="Cocktail-description"></div>
        </article>
        <article>
          <div className="image-container"></div>
          <div className="Cocktail-description"></div>
        </article>
        <article>
          <div className="image-container"></div>
          <div className="Cocktail-description"></div>
        </article>
      </div>
    </div>
  );
};

export default Cocktail;
