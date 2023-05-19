import React from "react";
import "./navbar.css";
import logo from "../../assets/sparkbtn.png";

function Navbar() {
  function myFunction(x) {
    x.classList.toggle("change");
  }
  return (
    <div className="navbar">
      {/* <img className="logo" src={logo} /> */}
      <ul className="nav_ul">
        <li className="nav_li">
          <div class="menu__container" onClick={(e) => myFunction(e.target)}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </li>
        <li className="nav_li">
          <a classname="resume_btn" href="contact.asp">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
