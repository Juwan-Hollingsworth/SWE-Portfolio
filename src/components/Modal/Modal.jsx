import React from "react";
import "./modal.css";

function Modal({
  id,
  title,
  description,
  projectPic,
  projectGIF,
  projectLink,
  skills,
  handleClose,
}) {
  return (
    <div className="modal_backdrop">
      <div className="modal">
        <img className="modal_img" src={projectPic} alt="proj pic" />
        <div className="modal_body">
          <div className="modal_title">{title}</div>

          <div className="modal_skills">
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="modal_description">{description}</div>
        </div>
        <button className="close_btn" onClick={handleClose}>
          Close
        </button>
        <button className="open_link">Open Project Link</button>
      </div>
    </div>
  );
}

export default Modal;
