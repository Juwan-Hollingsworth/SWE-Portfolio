import React from "react";
import "./card.css";

function Card({
  id,
  title,
  description,
  projectPic,
  projectGIF,
  projectLink,
  skills,
  handleOpenModal,
}) {
  return (
    <div className="card">
      <div className="number">
        {id} | <h1 className="project_title">{title}</h1>
      </div>
      <img className="projectPic" src={projectPic} alt={`Project ${id}`} />
      <div className="project_info"></div>
      <div className="card_btns">
        <button className="open_link" onClick={() => handleOpenModal(id)}>
          Open Project Details
        </button>
        <div className="gh_link">
          <button onClick={() => window.open(projectLink)}>Github</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
