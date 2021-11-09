import React from "react";
import "./SingleCocktail.css";
import Cocktail from "../components/Cocktail.js";

const SingleCocktail = ({ data }) => {
  console.log("fasd", data);
  return (
    <div className="SingleCocktail-Sec">
      <Cocktail title={data.title} Imgesss={data.img} description={data.desc} />
    </div>
  );
};

export default SingleCocktail;
