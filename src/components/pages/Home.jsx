import React, { useEffect, useContext } from "react";
import Search from "../layouts/Search";
import Filter from "../layouts/Filter";
import CountryContext from "../../context/country/countryContext";
import Countries from "../layouts/Countries";

const Home = () => {
  const countryContext = useContext(CountryContext);
  const { getCountries } = countryContext;

  useEffect(() => {
    getCountries();

    //eslint-disable-next-line
  }, []);

  return (
    <main>
      <div className="container">
        <div className="filter">
          <Search />
          <Filter />
        </div>
        <div className="countries">
          <Countries />
        </div>
      </div>
    </main>
  );
};

export default Home;
