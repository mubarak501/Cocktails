import React from "react";
import Cocktail from "../components/Cocktail.js";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = ({ data }) => {
  return (
    <div>
      <Cocktail />
    </div>
  );
};

export default SingleCocktail;
