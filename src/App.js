import React, { useState } from "react";
import "./pages/AppStyle.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import SearchForm from "./components/SearchForm";
// import components
import Navbar from "./components/Navbar";
import Cocktail from "../src/components/Cocktail.js";
import CocktailList from "../src/components/CocktailList.js";
import Loading from "./components/Loading";
function App() {
  const [pictures, setPicture] = useState(CocktailList);
  return (
    <div>
      <Navbar />
      <SearchForm />
      <Loading />
      <Cocktail />
    </div>
  );
}

export default App;
