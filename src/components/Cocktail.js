import React from "react";

import "./cocktailstyle.css";
import Button from "@material-ui/core/Button";
const Cocktail = (props) => {
  const { onDetailClick } = props;
  console.log(onDetailClick);

  return (
    <div className="CockTailCenter">
      <div className="content-container">
        <div className="image-container">
          <img className="imagesss" src={props.Imgesss} alt="images" />
        </div>
        <div className="Cocktail-description">
          <h3>{props.title}</h3>
          <h2>{props.description}</h2>
        </div>
        <div className="Detials-Div">
          <Button
            variant="contained"
            color="primary"
            id="homeBtn"
            className="detail-btn"
            onClick={onDetailClick}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
