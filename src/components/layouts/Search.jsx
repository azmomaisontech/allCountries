import React, { useContext, useRef, useEffect } from "react";
import CountryContext from "../../context/country/countryContext";

const Search = () => {
  const countryContext = useContext(CountryContext);
  const { filterCountry, clearFilter } = countryContext;

  const filter = useRef("");

  const onChange = () => {
    if (filter.current.value !== "") {
      filterCountry(filter.current.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    return () => {
      clearFilter();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div className="search-box">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        ref={filter}
        name="filter"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
