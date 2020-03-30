import React from "react";
import ReactDOM from "react-dom";
import CountryState from "./context/country/CountryState";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CountryState>
      <App />
    </CountryState>
  </React.StrictMode>,
  document.getElementById("root")
);
