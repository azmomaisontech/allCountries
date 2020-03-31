import React, { useReducer } from "react";
import CountryReducer from "./countryReducer";
import CountryContext from "./countryContext";
import axios from "axios";
import {
  GET_COUNTRIES,
  CLEAR_COUNTRIES,
  SET_COUNTRY,
  CLEAR_COUNTRY,
  FILTER_COUNTRY,
  CLEAR_FILTER,
  SET_LOADING,
  FILTER_CONTINENT,
  SET_THEME
} from "../type";

const CountryState = props => {
  const initialState = {
    countries: [],
    country: [],
    filtered: [],
    languages: [],
    loadng: false,
    darkMode: localStorage.getItem("darkMode")
  };
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  //   Load countries from Api
  const getCountries = async () => {
    setLoading();
    try {
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      dispatch({
        type: GET_COUNTRIES,
        payload: res.data
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  // Clear the countries array after app unmounts
  const clearCountries = () => {
    dispatch({
      type: CLEAR_COUNTRIES
    });
  };

  // Set the country array when a country is clicked
  const setCountry = async name => {
    setLoading();

    try {
      const res = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      dispatch({
        type: SET_COUNTRY,
        payload: res.data[0]
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  //Clear the country array when the country page is exited
  const clearCountry = () => {
    dispatch({
      type: CLEAR_COUNTRY
    });
  };

  //Filter Country by name
  const filterCountry = filter => {
    dispatch({
      type: FILTER_COUNTRY,
      payload: filter
    });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };

  //Seach by continent
  const filterContinent = async region => {
    setLoading();
    console.log(region);
    try {
      if (region === "all") {
        getCountries();
      } else {
        const res = await axios.get(
          `https://restcountries.eu/rest/v2/region/${region}`
        );
        dispatch({
          type: FILTER_CONTINENT,
          payload: res.data
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  //   Set Loading to true
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  // Switch between dark and light mode
  const themeSwitch = () => {
    dispatch({
      type: SET_THEME
    });
  };

  return (
    <CountryContext.Provider
      value={{
        countries: state.countries,
        filtered: state.filtered,
        country: state.country,
        loading: state.loading,
        languages: state.languages,
        darkMode: state.darkMode,
        getCountries,
        clearCountries,
        setCountry,
        clearCountry,
        filterCountry,
        filterContinent,
        clearFilter,
        themeSwitch
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
