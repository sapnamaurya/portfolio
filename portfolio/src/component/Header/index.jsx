import React from "react";
import "./style.css";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="left">Portfolio</div>
        <div className="right">
          <a href="" className="nav_item">
            Home
          </a>
          <a href="" className="nav_item">
            About
          </a>
          <a href="" className="nav_item">
            Skills
          </a>
          <a href="" className="nav_item">
            Projects
          </a>
          <a href="" className="nav_item">
            Education
          </a>
          <a href="" className="nav_item">
            Experience
          </a>
          <a href="" className="nav_item">
            Tools
          </a>
        </div>
        <button>Contact Me</button>
      </div>
    </>
  );
};
export default Header;
