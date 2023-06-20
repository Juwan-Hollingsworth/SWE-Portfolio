import React from "react";
import "./portfolio.css";
import login from "../../assets/login.png";
import spark from "../../assets/spark.png";
import gpt3 from "../../assets/gpt3.png";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";
import { useState } from "react";
import Card from "../../components/Card/Card.jsx";
import { Carousel } from "@trendyol-js/react-carousel";

function Portfolio() {
  //styled icons for carousel
  const leftArrow = (
    <span className="material-symbols-outlined">arrow_back_ios</span>
  );

  const rightArrow = (
    <span class="material-symbols-outlined">arrow_forward_ios</span>
  );

  const [projects, updateProject] = useState([
    {
      id: 1,
      title: "CRUD Login",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: login,
      projectGIF: "https://rb.gy/9jh39",
      projectlink: "https://rb.gy/9jh39",
    },
    {
      id: 2,
      title: "Agency UX Design",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: spark,
      projectGIF: "https://rb.gy/9jh39",
      projectlink: "https://rb.gy/9jh39",
    },
    {
      id: 3,
      title: "Responsive GPT3 Site",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: gpt3,
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
    {
      id: 4,
      title: "Banking Application",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: login,
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
    {
      id: 5,
      title: "Social Media Metrics App",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: spark,
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
  ]);
  return (
    <div className="portfolio_main">
      <h2 className="portfolio_title">02. Recent projects 👾 </h2>
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
        <Carousel
          show={3.5}
          slide={3}
          swiping={true}
          rightArrow={rightArrow}
          leftArrow={leftArrow}
        >
          {/* map over project data */}
          {projects.map((project) => (
            //render and pass data to card component
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              projectPic={project.projectPic}
              projectGIF={project.projectGIF}
              projectLink={project.projectLink}
              skills={project.skills}
            />
          ))}
        </Carousel>
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
    </div>
  );
}

export default Portfolio;
