import React from "react";
import Button from "@material-ui/core/Button";
import "./Navbarstyle.css";

const Navbar = (props) => {
  return (
    <div className="Nabar_Div">
      <div className="Navbar-center">
        <h1>
          <img
            alt="logoo"
            className="logo"
            src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg
"
          />
        </h1>
        <ul className="Navbar-link">
          <li>
            <Button
              variant="contained"
              color="primary"
              id="homeBtn"
              onClick={(e) => {
                e.stopPropagation();
                props.setChnagePage("home");
              }}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
                props.setChnagePage("about");
              }}
            >
              About
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
