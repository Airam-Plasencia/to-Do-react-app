import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {


  return (
    <>
      <div className="navbar">
        <div className="nav-cont">
          <div >
            <a href="./">
              <img className="logo"

                src="./src/assets/img/logo_1.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="nav-buttons">
            <Link to="/" className="nav-btn">  {/* Link a Home */}
              Home
            </Link>
            <Link to="/About" className="nav-btn">  {/* Link a About */}
              About
            </Link>
          </div>

          <button className="nav-log" type="button">
            <img className="material-icons"

              src="./src/assets/img/person1.png"
              alt="Logo-person"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;