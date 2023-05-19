import React from "react";
import "./home.css";
import heroimg from "../../assets/heroimg.png";
import dwn__arrow from "../../assets/arrow.png";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="main_sec_1">
      <div className="header__home">
        <Navbar />
      </div>
      <h1>Section 1</h1>
    </div>
  );
}

export default Home;
