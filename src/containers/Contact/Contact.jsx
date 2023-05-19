import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact_main">
      <h2 className="contact_title">Let's Connect 👋</h2>
      <button className="ghostBtn__contact">Email 📩</button>
      <button className="ghostBtn__contact">LinkedIn 👨🏾‍💻</button>
      <button className="ghostBtn__contact">Github 👾</button>
      <button className="ghostBtn__contact">Spark ⚡️</button>
    </div>
  );
}

export default Contact;
