import React from "react";
import { useState } from "react";


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
              <button className="nav-btn" type="button">
                Home
              </button>
              <button className="nav-btn" type="button">
                About
              </button>
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