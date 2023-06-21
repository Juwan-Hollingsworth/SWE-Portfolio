import React from "react";
import "./contact.css";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";

function Contact() {
  return (
    <div className="contact_main">
      <h2 className="contact_title">Let's Connect 👋</h2>
      <div className="contact_items" id="contact-anchor">
        <button className="ghostBtn_contact">Email 📩</button>
        <button className="ghostBtn_contact">LinkedIn 👨🏾‍💻</button>
        <button className="ghostBtn_contact">Github 👾</button>
        <button className="ghostBtn_contact">Spark ⚡️</button>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="contact_arrow">
        <AnchorLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className="arrow" src={arrow} alt="Arrow" />
        </AnchorLink>
      </div>
    </div>
  );
}

export default Contact;
