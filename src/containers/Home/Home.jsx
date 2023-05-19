import React from "react";
import "./home.css";
import heroimg from "../../assets/heroimg.png";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="home_main">
      <div className="home_nav">
        <Navbar />
      </div>
      <div className="home_hero">
        <div className="home_row">
          <div className="home_col 1">
            <h1>Juwan Hollingsworth. </h1>
            <br />{" "}
            <h2>
              <div class="flipping_words">
                <span className="flipping_w1"> Freelance</span>
                <span className="flipping_w2">Professional</span>
                <span className="flipping_w3">Hobbyist</span>
              </div>
              <span class="home_static_h2">Software Engineer</span> <br />
              <span>Atlanta, Georgia 📍</span>
            </h2>
            <br />
          </div>
          <div className="home_col 2">
            <div class="hero_img_container">
              <img src={heroimg} alt="hero image" className="hero__img" />
            </div>
          </div>
        </div>
      </div>
      <h1>Section 1</h1>
    </div>
  );
}

export default Home;
