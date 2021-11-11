import React, { useState } from "react";
import "./pages/AppStyle.css";

import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";

import SearchForm from "./components/SearchForm";

import Navbar from "./components/Navbar";

import Loading from "./components/Loading";
function App() {
  const [changeCompo, setChnagePage] = useState("home");
  const [singleCard, setSingleCocktail] = useState({});

  return (
    <div>
      <Navbar setChnagePage={setChnagePage} />

      {changeCompo === "home" ? (
        <>
          <SearchForm />
          <Loading navPage={setChnagePage} setSingleCard={setSingleCocktail} />
        </>
      ) : changeCompo === "about" ? (
        <About />
      ) : changeCompo === "details" ? (
        <SingleCocktail data={singleCard} />
      ) : (
        <h1>Not Foundtion</h1>
      )}
    </div>
  );
}

export default App;
