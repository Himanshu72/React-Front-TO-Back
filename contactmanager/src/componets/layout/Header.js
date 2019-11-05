import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {props.brand}
        </Link>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  brand: "My App"
};
Header.propTypes = {
  brand: PropTypes.string.isRequired
};
export default Header;
