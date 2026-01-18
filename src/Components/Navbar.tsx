import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const [click, menuClick] = useState(false);

  const handleMenuClick = () => menuClick(!click)
  const closeMobileMenu = () => menuClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu }>
          {/* NOTE: Change to logo instead of just tect */}
            JSMS 
          </Link>

          {/* MENU */}
          <div className="menu-icon" onClick={handleMenuClick}>
            <i className={click ? "fas fa-times" : "fa fa-bars"}></i>
          </div>

          {/* SERVICES Nav */}
          {/* NOTE : Make this part a drop down */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
              Services
              </Link>
            </li>

          {/* OURWORK Nav */}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
              Our Works
              </Link>
            </li>

          {/* WHO Nav */}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
              Who We Are
              </Link>
            </li>

          {/* PRODUCST Nav */}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
              Products
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
