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
  const { clearCountries } = countryContext;

  useEffect(() => {
    return () => {
      clearCountries();
    };

    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:name" component={Country} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
