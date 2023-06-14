import React from "react";
import "./portfolio.css";
import login from "../../assets/login.png";
import spark from "../../assets/spark.png";
import gpt3 from "../../assets/gpt3.png";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";

import { useState } from "react";

import Card from "../../components/Card/Card.jsx";

function Portfolio() {
  const [projects, updateProject] = useState([
    {
      id: 1,
      title: "Project Sample",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: "https://rb.gy/9jh39",
      projectGIF: "https://rb.gy/9jh39",
      projectlink: "https://rb.gy/9jh39",
    },
    {
      id: 2,
      title: "Project Sample 2",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: "https://rb.gy/9jh39",
      projectGIF: "https://rb.gy/9jh39",
      projectlink: "https://rb.gy/9jh39",
    },
    {
      id: 3,
      title: "Project Sample 3",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: "https://rb.gy/9jh39",
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
    {
      id: 4,
      title: "Project Sample 3",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: "https://rb.gy/9jh39",
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
    {
      id: 5,
      title: "Project Sample 3",
      description: "Descr",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: "https://rb.gy/9jh39",
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
  ]);
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
        <div className="project_card">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                skills={project.skills}
                projectPic={project.projectPic}
                projectGIF={project.projectGIF}
                projectLink={project.projectLink}
              />
            );
          })}
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
