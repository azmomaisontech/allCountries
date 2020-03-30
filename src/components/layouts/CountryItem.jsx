import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CountryItem = ({ country }) => {
  const { name, flag, population, region, capital } = country;
  return (
    <Link to={`/country/${name}`}>
      <div className="country">
        <div className="flag">
          <img src={flag} alt="Country Flag" />
        </div>
        <div className="info">
          <p className="country-name">{name}</p>
          <p>
            <strong>Population: </strong>
            {population.toLocaleString(navigator.language, {
              minimumFractionDigits: 0
            })}
          </p>
          <p>
            <strong> Region:</strong> {region}
          </p>
          <p>
            <strong> Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

CountryItem.propTypes = {
  country: PropTypes.object.isRequired
};

export default CountryItem;
