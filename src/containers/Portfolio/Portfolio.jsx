import React from "react";
import "./portfolio.css";
import login from "../../assets/login.png";
import spark from "../../assets/spark.png";
import gpt3 from "../../assets/gpt3.png";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";

function Portfolio() {
  return (
    <div className="portfolio_main">
      <h2 className="project__title">02. Portfolio</h2>
      <div className="project_categories">
        <label className="menu_options">#️⃣All Projects</label>
        <label className="menu_options">#️⃣Web Development</label>
        <label className="menu_options">#️⃣Data Analysis & Visualization</label>
        <label className="menu_options">#️⃣UX Design</label>
        <label className="menu_options">#️⃣Artifical Intelligence</label>
        <label className="menu_options">#️⃣Algorithmic Trading</label>
        <label className="menu_options">#️⃣Other Projects</label>
      </div>
      <hr className="category_divider" />

      <div className="gallery_container">
        <div className="card web">
          <img src={login}></img>
        </div>
        <div className="card web">
          <img src={spark}></img>
        </div>
        <div className="card web">
          <img src={gpt3}></img>
        </div>
        <div className="card data">
          <img src={spark}></img>
        </div>
        <div className="card data">
          <img src={gpt3}></img>
        </div>
        <div className="card data">
          <img src={login}></img>
        </div>
        <div className="card other">
          <img src={gpt3}></img>
        </div>
        <div className="card other">
          <img src={login}></img>
        </div>
        <div className="card other">
          <img src={spark}></img>
        </div>
      </div>
      <div>
        <div className="port_arrow">
          {" "}
          <AnchorLink
            activeClass="active"
            to="resume"
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

export default Portfolio;
