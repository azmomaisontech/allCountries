import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountryContext from "../../context/country/countryContext";

const NavBar = () => {
  const countryContext = useContext(CountryContext);
  const { themeSwitch, darkMode } = countryContext;

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h3>
            <Link to="/">Azmo World</Link>{" "}
          </h3>
        </div>
        <div className="dark-mode" onClick={themeSwitch}>
          <span>
            <i className="fas fa-moon"></i>{" "}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
