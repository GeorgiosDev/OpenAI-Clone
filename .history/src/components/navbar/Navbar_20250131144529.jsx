import React from "react";
import "./navbar.css";
import { RiMenu2Line, RiCloseLin } from "react-icons/ri";
import logo from "../../"

const Navbar = () => {
  return (
    <div className="gpt_navbar">
      <div className="gpt_navbar-links">
        <div className="gtp3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
