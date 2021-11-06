import React from "react";
import { Link } from "react-router-dom";
import "./cocktailstyle.css";

const Cocktail = (props) => {
  const { onDetailClick } = props;
  return (
    <div className="CockTailCenter">
      <div className="content-container">
        <div className="image-container">
          <img className="imagesss" src={props.Imgesss} />
        </div>
        <div className="Cocktail-description">
          <h3>{props.title}</h3>
          <h2>{props.description}</h2>
        </div>
        <div className="Detials-Div">
          <button onClick={onDetailClick} id="Detials-btn">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
