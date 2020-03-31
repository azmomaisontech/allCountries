import React, { useContext } from "react";
import spinner from "../../img/spinner.svg";
import darkModeSpinner from "../../img/darkModeSpinner.svg";
import CountryContext from "../../context/country/countryContext";

const Spinner = () => {
  const countryContext = useContext(CountryContext);
  const { darkMode } = countryContext;
  return (
    <div className="spinner">
      <img
        src={darkMode ? darkModeSpinner : spinner}
        alt="Loading...."
        className="spinner-image"
      />
    </div>
  );
};

export default Spinner;
