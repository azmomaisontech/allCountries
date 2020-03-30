import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h3>
            <Link to="/">Azmo World</Link>{" "}
          </h3>
        </div>
        <div className="dark-mode">
          <p>
            <i className="far fa-moon"></i> Dark Mode
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
