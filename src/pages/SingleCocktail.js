import React from "react";
import Cocktail from "../components/Cocktail.js";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = ({ data }) => {
  console.log("fasd", data);
  return (
    <div>
      <Cocktail title={data.title} Imgesss={data.img} description={data.desc} />
    </div>
  );
};

export default SingleCocktail;
