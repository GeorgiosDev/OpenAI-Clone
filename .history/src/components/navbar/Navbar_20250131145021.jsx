import React from "react";
import "./navbar.css";
import { RiMenu2Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gtp3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
            <a href="#wgpt3">What is GPT?</a>
            <a href="#possibility">Open AI</a>
            <a href="#features">Case Studies</a>
            <a href="#home">Library</a>

          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
