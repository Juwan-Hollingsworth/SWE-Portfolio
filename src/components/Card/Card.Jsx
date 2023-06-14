import React, { useState } from "react";
import "./card.css";

function Card() {
  const Card = ({
    id,
    title,
    description,
    projectPic,
    projectGif,
    projectLink,
    skills,
  }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
      setShowModal(false);
    };
  };

  return (
    <div className="card">
      <div className="id"> {id}</div>
      <div className="title">{title}</div>
      <div className="description"> {description} </div>
      <div className="projectPic">{projectPic} </div>
      <div className="projectGIF">{projectGIF} </div>
      <div className="projectLink">{projectLink} </div>
    </div>
  );
}

export default Card;
