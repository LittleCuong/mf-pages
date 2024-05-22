import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Recipes from "./Recipes";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: pages</div>
    <Recipes/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));