import React, { useState } from "react";
import Cocktail from "./Cocktail.js";
import CocktailList from "./CocktailList.js";
import "./loadingStyle.css";

const Loading = ({ navPage, setSingleCard }) => {
  const [fetch, setFetch] = useState("");
  const handleChange = (e) => {
    setFetch(e.target.value);
  };

  const handleDetailClick = (data) => {
    navPage("details");
    setSingleCard(data);
  };
  return (
    <>
      <div className="inputsSearch">
        <input
          className="serach-input"
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="main-section">
        {fetch && CocktailList ? (
          CocktailList.map((cocktail) => {
            if (fetch === cocktail.category) {
              return (
                <Cocktail
                  Imgesss={cocktail.img}
                  title={cocktail.title}
                  pri={cocktail.price}
                  description={cocktail.desc}
                  onDetailClick={() => {
                    handleDetailClick(cocktail);
                  }}
                />
              );
            } else {
              return null;
            }
          })
        ) : (
          <>
            {CocktailList.map((cocktail) => (
              <Cocktail
                Imgesss={cocktail.img}
                title={cocktail.title}
                pri={cocktail.price}
                description={cocktail.desc}
                onDetailClick={() => {
                  handleDetailClick(cocktail);
                }}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Loading;
