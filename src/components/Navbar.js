import React, { useState } from "react";

import "./Navbarstyle.css";

const Navbar = (props) => {
  return (
    <div className="Nabar_Div">
      <div className="Navbar-center">
        <a>
          <img
            src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg
"
            className="logo"
          />
        </a>
        <ul className="Navbar-link">
          <li>
            <button
              id="homeBtn"
              onClick={(e) => {
                e.stopPropagation();
                props.setChnagePage("home");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                e.stopPropagation();
                props.setChnagePage("about");
              }}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
