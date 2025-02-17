import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo-link">
          <img
            src={process.env.PUBLIC_URL + "/logo1.png"}
            alt="MovieFlix Logo"
            className="logo"
          />
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
