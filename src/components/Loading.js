import React, { useState } from "react";
import Cocktail from "./Cocktail.js";
import CocktailList from "./CocktailList.js";
import "./loadingStyle.css";
const Loading = (props) => {
  const [fetch, setFetch] = useState("");
  const handleChange = (e) => {
    setFetch(e.target.value);
  };
  return (
    <>
      <div className="inputsSearch">
        <input type="text" name="name" id="name" onChange={handleChange} />
      </div>
      <div className="main-section">
        {fetch && CocktailList ? (
          CocktailList.map((cocktail) => {
            // eslint-disable-next-line no-lone-blocks
            {
              if (fetch === cocktail.category) {
                return (
                  <Cocktail
                    Imgesss={cocktail.img}
                    title={cocktail.title}
                    pri={cocktail.price}
                    description={cocktail.desc}
                  />
                );
              }
            }
          })
        ) : (
          <>
            {CocktailList.map((cocktail) => {
              return (
                <Cocktail
                  Imgesss={cocktail.img}
                  title={cocktail.title}
                  pri={cocktail.price}
                  description={cocktail.desc}
                />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Loading;
