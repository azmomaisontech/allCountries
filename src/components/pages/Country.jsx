import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CountryContext from "../../context/country/countryContext";
import Spinner from "../layouts/Spinner";

const Country = ({ match }) => {
  const countryContext = useContext(CountryContext);
  const {
    country,
    languages,
    loading,
    setCountry,
    clearCountry
  } = countryContext;

  useEffect(() => {
    setCountry(match.params.name);
    return () => {
      clearCountry();
    };

    //eslint-disable-next-line
  }, []);

  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,

    borders
  } = country;

  return (
    <main>
      <div className="container">
        <div className="country-details">
          <Link className="btn" to="/">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
          {loading ? (
            <Spinner />
          ) : (
            <div className="infos">
              <div className="flag">
                <img src={flag} alt="Country Flag" />
              </div>
              <div className="info">
                <h1>{name}</h1>
                <div className="main-info">
                  <div className="left">
                    <p>
                      <strong> Native Name :</strong> {nativeName}
                    </p>
                    <p>
                      <strong> Population :</strong>{" "}
                      {population &&
                        population.toLocaleString(navigator.language, {
                          minimumFractionDigits: 0
                        })}
                    </p>
                    <p>
                      <strong> Region: </strong> {region}
                    </p>
                    <p>
                      <strong> Sub Region :</strong> {subregion}
                    </p>
                    <p>
                      <strong> Capital:</strong> {capital}
                    </p>
                  </div>
                  <div className="right">
                    <p>
                      <strong> Top Level Domain :</strong> {topLevelDomain}
                    </p>
                    <p>
                      <strong> Currencies :</strong>{" "}
                      {currencies && currencies.map(c => c.name)}
                    </p>
                    <p>
                      <strong> Languages : </strong>{" "}
                      {languages &&
                        languages.map(
                          (language, index) => (index ? ", " : "") + language
                        )}
                    </p>
                  </div>
                </div>
                <p className="borders">
                  <strong>
                    Border Countries:{" "}
                    {borders &&
                      borders.map(border => (
                        <span key={uuidv4()} className="border-towns">
                          {border}
                        </span>
                      ))}
                  </strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Country;
