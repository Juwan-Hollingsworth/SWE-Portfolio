import React, { useState } from "react";
import "./portfolio.css";
import login from "../../assets/login.png";
import spark from "../../assets/spark.png";
import gpt3 from "../../assets/gpt3.png";
import { Link as AnchorLink } from "react-scroll";
import arrow from "../../assets/arrow.png";
import Card from "../../components/Card/Card.jsx";
import Modal from "../../components/Modal/Modal";
import { Carousel } from "@trendyol-js/react-carousel";

function Portfolio() {
  const leftArrow = (
    <span className="material-symbols-outlined">arrow_back_ios</span>
  );

  const rightArrow = (
    <span className="material-symbols-outlined">arrow_forward_ios</span>
  );

  const projects = [
    {
      id: 1,
      title: "CRUD Login",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: login,
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
    {
      id: 2,
      title: "Agency UX Design",
      description: "Descr",
      skills: ["ZTML", "CSS", "JavaScript", "React", "Next.js"],
      projectPic: spark,
      projectGIF: "https://rb.gy/9jh39",
      projectLink: "https://rb.gy/9jh39",
    },
    {
      id: 3,
      title: "Responsive GPT3 Site",
      description: "Descr",
      skills: ["KTML", "CSS", "JavaScript", "React", "Next.js"],
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
  ];

  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalId) => {
    setShowModal(true);
    setActiveModal(modalId);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveModal(null);
  };

  return (
    <div className="portfolio_main">
      <h2 className="portfolio_title">02. Recent projects 👾</h2>
      <div className="project_categories">
        {/* Category labels */}
        <label className="menu_options">#️⃣All Projects</label>
        <label className="menu_options">#️⃣Web Development</label>
        <label className="menu_options">#️⃣Data Analysis & Visualization</label>
        <label className="menu_options">#️⃣UX Design</label>
        <label className="menu_options">#️⃣Artificial Intelligence</label>
        <label className="menu_options">#️⃣Algorithmic Trading</label>
        <label className="menu_options">#️⃣Other Projects</label>
        <div id="portfolio-anchor"></div>
      </div>
      <hr className="category_divider" />

      <div className="gallery_container">
        <Carousel
          show={3}
          slide={3}
          swiping={true}
          rightArrow={rightArrow}
          leftArrow={leftArrow}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              projectPic={project.projectPic}
              projectGIF={project.projectGIF}
              projectLink={project.projectLink}
              skills={project.skills}
              handleOpenModal={handleOpenModal}
            />
          ))}
        </Carousel>
        <div>
          <div className="port_arrow">
            <AnchorLink
              activeClass="active"
              to="resume-anchor"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <img className="arrow" src={arrow} alt="Scroll Down" />
            </AnchorLink>
          </div>
        </div>
      </div>

      {showModal && activeModal && (
        <Modal
          id={activeModal}
          title={projects[activeModal - 1].title}
          description={projects[activeModal - 1].description}
          projectPic={projects[activeModal - 1].projectPic}
          projectGIF={projects[activeModal - 1].projectGIF}
          projectLink={projects[activeModal - 1].projectLink}
          handleClose={handleCloseModal}
          skills={projects[activeModal - 1].skills}
        />
      )}
    </div>
  );
}

export default Portfolio;
