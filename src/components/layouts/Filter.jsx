import React, { useContext, useRef } from "react";
import CountryContext from "../../context/country/countryContext";

const Filter = () => {
  const countryContext = useContext(CountryContext);
  const { filterContinent } = countryContext;

  const continents = useRef("");

  const handleChange = () => {
    filterContinent(continents.current.value);
  };

  return (
    <select name="continents" ref={continents} onChange={handleChange}>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Filter;
