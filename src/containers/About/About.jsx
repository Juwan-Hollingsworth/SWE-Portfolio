import React from "react";
import "./about.css";
import headshot from "../../assets/headshot.jpg";
import li from "../../assets/linkedIn.png";
import gh from "../../assets/github.png";
import fb from "../../assets/facebook.png";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from "../../assets/gallery_1.jpg";
import image2 from "../../assets/gallery_2.jpg";
import image3 from "../../assets/gallery_3.jpg";

function About() {
  return (
    <div className="about_main">
      <h2 className="about_title">01. Get to know the dev 👋🏾,</h2>
      <div class="about_row">
        <div class="column_1">
          <div className="profile_col">
            <img className="about_headshot" id="about-anchor" src={headshot} />
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
        <div class="column_2">
          <div className="about_statement">
            <p>
              Hi there, nice to meet you! I'm Juwan, a software engineer and
              college graduate with a bachelor's in Computer Science. I'm
              passionate about creating things that live on the web, and I've
              had some pretty cool experiences along the way. My journey began
              back in high school when I ran a sneaker business and discovered
              firsthand how digital implementation can transform a business.
              From there, I taught myself Dreamweaver and continued to build my
              coding skills. While studying biology and computer science at
              Clayton State University, I've been fortunate enough to work with
              some big names in Atlanta such as COX Automotive, MailChimp, and
              Spark Social. These days, my primary focus is on creating digital
              experiences and products that are accessible and inclusive for a
              wide range of clients.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div class="about_row_2">
        <div class="column_3">
          <Carousel showThumbs={false}>
            <div>
              <img src={image3} alt="Image 2" />
              <p className="legend">
                ACM Magic Mirror Project Showcased In ACM MSE Conference
                (Gatlinburg, TN)
              </p>
            </div>
            <div>
              <img src={image2} alt="Image 2" />
              <p className="legend">Hosting The 2nd Annual CIMS Symposium</p>
            </div>

            <div>
              <img src={image1} alt="Image 1" />
              <p className="legend">
                {" "}
                Mailchimp Launchpad: Technology Apprenticeship
              </p>
            </div>

            {/* Add more images as needed */}
          </Carousel>
        </div>
        <div class="column_4">
          {" "}
          Here are a few technologies I've been working with recently:
          <div className="about_technologies">
            <ul className="about_list">
              <li className="about_item">Javascript</li>
              <li className="about_item">Node</li>
              <li className="about_item">React</li>
            </ul>
            <ul className="about_list">
              <li className="about_item">MongoDB</li>
              <li className="about_item">Wordpress</li>
              <li className="about_item">Python</li>
            </ul>
          </div>
          <p>
            If you're looking for a dedicated and innovative software engineer,
            I'd love to connect and see how we can work together!
          </p>
        </div>
      </div>
      <div className="about_row">
        <div className="about_col 2"></div>
        <div className="about_col 3">
          <Carousel showThumbs={false}>
            <div>
              <img src={image3} alt="Image 2" />
              <p className="legend">
                ACM Magic Mirror Project Showcased In ACM MSE Conference
                (Gatlinburg, TN)
              </p>
            </div>
            <div>
              <img src={image2} alt="Image 2" />
              <p className="legend">Hosting The 2nd Annual CIMS Symposium</p>
            </div>

            <div>
              <img src={image1} alt="Image 1" />
              <p className="legend">
                {" "}
                Mailchimp Launchpad: Technology Apprenticeship
              </p>
            </div>

            {/* Add more images as needed */}
          </Carousel>
        </div>
      </div>
      <div className="ctaBtn_container">
        {" "}
        <button id="cta_btn">Get In Touch 📩</button>
      </div>
      <div className="about_arrow_container">
        {" "}
        <AnchorLink
          activeClass="active"
          to="portfolio-anchor"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className="arrow" id="about-arrow" src={arrow} />
        </AnchorLink>
      </div>
    </div>
  );
}

export default About;
