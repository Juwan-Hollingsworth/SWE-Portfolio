import React from "react";
import "./about.css";
import headshot from "../../assets/headshot.jpg";
import li from "../../assets/linkedIn.png";
import gh from "../../assets/github.png";
import fb from "../../assets/facebook.png";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";
function About() {
  return (
    <div className="about_main">
      <h2 className="about_title">01. About Me</h2>
      <div className="about_row">
        <div className="about_col 1">
          <div className="profile_col">
            <img className="about_headshot" src={headshot} />
            <div className="about_name">
              <h2>Juwan Hollingsworth</h2>
            </div>
            <div className="about_icon">
              <img className="mediaIcons" src={li} />
              <img className="mediaIcons" src={gh} />
              <img className="mediaIcons" src={fb} />
            </div>
          </div>
        </div>
        <div className="about_col 2">
          <div className="about_statement">
            <p>
              Hi there, nice to meet you! I'm Juwan, a software engineer and
              college graduate with a bachelors in Computer Science. I'm
              passionate about creating things that live on the web, and I've
              had some pretty cool experiences along the way. My journey began
              back in high school when I ran a sneaker business and discovered
              firsthand how digital implementation can transform a business.
              From there, I taught myself dreamweaver and continued to build my
              coding skills. While studying biology and computer science at
              Clayton State University, I've been fortunate enough to work with
              some big names in Atlanta such as COX Automotive, MailChimp, and
              Spark Social. These days, my primary focus is on creating digital
              experiences and products that are accessible and inclusive for a
              wide range of clients. <br />
              <br />
              Here are a few technologies I've been working with recently:
              <ul id="about_lists">
                <li>Javascript</li>
                <li>Node</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Wordpress</li>
                <li>Python</li>
              </ul>
              <br />
              <br />
              If you're looking for a dedicated and innovative software
              engineer, I'd love to connect and see how we can work together!
            </p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <button id="cta_btn">Get In Touch 📩</button>
      </div>
      <div>
        {" "}
        <AnchorLink
          activeClass="active"
          to="portfolio"
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

export default About;
