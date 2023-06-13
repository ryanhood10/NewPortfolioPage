
import { Col } from "react-bootstrap";
import React, { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <div
          className="proj-imgbx"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4 style={{ color: isHovered ? "white" : "white" }}>{title}</h4>
            <span style={{ color: isHovered ? "white" : "white" }}>
              {description}
            </span>
          </div>
        </div>
      </a>
    </Col>
  );
};
