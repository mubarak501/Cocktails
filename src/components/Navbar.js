import React from "react";

import "./Navbarstyle.css";

const Navbar = () => {
  return (
    <div className="Nabar_Div">
      <div className="Navbar-center">
        <a>
          <img src="/static/media/logo.9a3d2645.svg" className="logo" />
        </a>
        <ul className="Navbar-link">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
