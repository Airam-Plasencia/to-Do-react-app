import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {


  return (
    <>
      <div className="check">
        <div className="nav-cont">
          <div >
            <a href="./">
              <img className="logo"

                src="./src/assets/img/logo_1.png"
                alt="Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;