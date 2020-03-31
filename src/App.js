import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Country from "./components/pages/Country";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import CountryContext from "./context/country/countryContext";
import "./App.css";

const App = () => {
  const countryContext = useContext(CountryContext);
  const { clearCountries, darkMode } = countryContext;

  useEffect(() => {
    return () => {
      clearCountries();
    };

    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : "light"}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/country/:name" component={Country} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
