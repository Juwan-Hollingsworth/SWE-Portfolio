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
  //show modal logic
  const [showModal, setShowModal] = useState(false);
  //track the active modal
  const [activeModal, setActiveModal] = useState(null);
  //set showModal to true & activeModal to card ID
  const handleOpenModal = (modalId) => {
    setShowModal(true);
    setActiveModal(modalId);
  };
  //set showModal to false & activeModal to null
  const handleCloseModal = () => {
    setShowModal(false);
    setActiveModal(null);
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
          {/* when btn is clicked, set showModal to true & update activeModal w card id */}
          <button className="open_link" onClick={() => handleOpenModal(id)}>
            Open Project Details
          </button>
          <div className="gh_link">
            <button onClick={() => setShowModal(true)}>Github</button>
          </div>
        </div>
      </div>

      {showModal && activeModal === id && (
        // render the modal component
        <Modal
          id={id}
          title={title}
          description={description}
          projectPic={projectPic}
          projectGIF={projectGIF}
          projectLink={projectLink}
          handleClose={handleCloseModal}
          skills={skills}
        />
      )}
    </>
  );
}

export default Card;
