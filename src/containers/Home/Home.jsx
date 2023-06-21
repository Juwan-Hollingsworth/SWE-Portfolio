import React from "react";
import "./home.css";
import heroimg from "../../assets/heroimg.png";
import Navbar from "../../components/Navbar/Navbar";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";

function Home() {
  return (
    <div className="home_main">
      <div className="home_container">
        <div className="home_nav">
          <Navbar />
        </div>
        <div className="home_hero">
          <div className="home_row">
            <div className="home_col 1">
              <h1 id="home_title">Juwan Hollingsworth. </h1>

              <div class="flipping_words" id="flipping_words_container">
                <span className="flipping_w1">
                  {" "}
                  Freelance Software Engineer
                </span>
                <span className="flipping_w2">
                  Professional Software Engineer
                </span>
                <span className="flipping_w3">Hobbyist Software Engineer</span>
              </div>
              <span class="home_static_h2" id="static_h2"></span>
              <span id="location">Atlanta, Georgia 📍</span>
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
            to="about-anchor"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img className="arrow" src={arrow} />
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
