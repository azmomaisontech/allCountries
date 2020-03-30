import React from "react";
import spinner from "../../img/spinner.svg";

const Spinner = () => {
  return (
    <div className="spinner">
      <img
        src={spinner}
        alt="Loading...."
        style={{ width: "250px", display: "block", margin: "auto" }}
      />
    </div>
  );
};

export default Spinner;
