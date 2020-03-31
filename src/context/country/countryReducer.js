import {
  GET_COUNTRIES,
  CLEAR_COUNTRIES,
  FILTER_CONTINENT,
  FILTER_COUNTRY,
  CLEAR_FILTER,
  SET_COUNTRY,
  CLEAR_COUNTRY,
  SET_LOADING,
  SET_THEME
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
    case FILTER_CONTINENT:
      return {
        ...state,
        countries: action.payload,
        loading: false
      };
    case CLEAR_COUNTRIES:
      return {
        ...state,
        countries: [],
        country: [],
        languages: [],
        loading: false
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
        languages: action.payload.languages.map(language => language.name),
        loading: false
      };
    case CLEAR_COUNTRY:
      return {
        ...state,
        country: [],
        languages: []
      };
    case FILTER_COUNTRY:
      return {
        ...state,
        filtered: state.countries.filter(country => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return country.name.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: []
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_THEME:
      localStorage.setItem("darkMode", !state.darkMode);
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};
