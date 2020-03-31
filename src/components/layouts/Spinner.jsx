import React from "react";
import spinner from "../../img/spinner.svg";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading...." className="spinner-image" />
    </div>
  );
};

export default Spinner;
