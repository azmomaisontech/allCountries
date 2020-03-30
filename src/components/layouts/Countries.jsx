import React, { useContext, Fragment } from "react";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import CountryContext from "../../context/country/countryContext";

const Countries = () => {
  const countryContext = useContext(CountryContext);
  const { loading, countries, filtered } = countryContext;

  //Show loading gif if application is loading response from Api
  if (loading)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );

  //If loading is complete and the API is not returning any data
  if (!loading && countries.length === 0) return <h1>API Service is Down</h1>;

  //If everything works well and loading is complete
  const filteredCountries = filtered.length > 0 ? filtered : countries;

  return (
    <Fragment>
      {filteredCountries &&
        filteredCountries.map(country => (
          <CountryItem country={country} key={country.name} />
        ))}
    </Fragment>
  );
};

export default Countries;
