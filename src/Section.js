import React from "react";

const Section = ({
  color,
  currentSection,
  sectionNumber,
  onScrollDown,
  onScrollUp,
}) => {
  const handleScroll = (direction) => {
    if (direction === "down" && onScrollDown) {
      onScrollDown();
    } else if (direction === "up" && onScrollUp) {
      onScrollUp();
    }
  };

  const renderScrollButton = () => {
    if (currentSection === sectionNumber && onScrollDown) {
      return (
        <button
          className="scroll-button down"
          onClick={() => handleScroll("down")}
        >
          <i className="fa fa-caret-down" />
        </button>
      );
    } else if (currentSection === sectionNumber && onScrollUp) {
      return (
        <button className="scroll-button up" onClick={() => handleScroll("up")}>
          <i className="fa fa-caret-up" />
        </button>
      );
    }
    return null;
  };

  return (
    <div className="section" style={{ backgroundColor: color }}>
      {renderScrollButton()}
    </div>
  );
};

export default Section;
