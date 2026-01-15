import React from 'react';
import { SiAqua } from "react-icons/si";

const ProjectCard = ({ data, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="desc">
        <img src="" alt="" />
        <h3>{data.company}</h3>
        <p>{data.title}</p>``
      </div>
    </div>
  );
};

export default ProjectCard;
