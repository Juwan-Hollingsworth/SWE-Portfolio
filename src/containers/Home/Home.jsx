import React from "react";
import "./home.css";
import heroimg from "../../assets/heroimg.png";
import Navbar from "../../components/Navbar/Navbar";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";

function Home() {
  return (
    <div className="home_main">
      <div className="home_nav">
        <Navbar />
      </div>
      <div className="home_hero">
        <div className="home_row">
          <div className="home_col 1">
            <h1 id="home_title">Juwan Hollingsworth. </h1>
            <br />
            <div class="flipping_words">
              <span className="flipping_w1"> Freelance</span>
              <span className="flipping_w2">Professional</span>
              <span className="flipping_w3">Hobbyist</span>
            </div>
            <span class="home_static_h2">Software Engineer</span> <br />
            <br />
            <span id="location">Atlanta, Georgia 📍</span>
            <br />
          </div>
          <div className="home_col 2">
            <div class="hero_img_container">
              <img src={heroimg} alt="hero image" className="hero__img" />
            </div>
          </div>
        </div>
      </div>
      <div className="home_arrow">
        {" "}
        <AnchorLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className="arrow" src={arrow} />
        </AnchorLink>
      </div>
    </div>
  );
}

export default Home;
