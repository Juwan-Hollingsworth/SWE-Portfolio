import React, { useState } from "react";
import "./card.css";
import Modal from "../Modal/Modal";

function Card({
  id,
  title,
  description,
  projectPic,
  projectGIF,
  projectLink,
  skills,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card">
        <div className="number">
          {" "}
          {id} | <h1 className="project_title">{title}</h1>{" "}
        </div>
        <img className="projectPic" src={projectPic} alt={`Project ${id}`} />
        <div className="project_info"></div>
        {/* open modal */}
        <div className="card_btns">
          <button className="open_link" onClick={() => setShowModal(true)}>
            Open Project Details
          </button>
          <div className="gh_link">
            <button onClick={() => setShowModal(true)}>Github</button>
          </div>
        </div>
      </div>

      {showModal && (
        // render the modal component
        <Modal
          id={id}
          title={title}
          description={description}
          projectPic={projectPic}
          projectGIF={projectGIF}
          projectLink={projectLink}
          handleClose={handleClose}
          skills={skills}
        />
      )}
    </>
  );
}

export default Card;
