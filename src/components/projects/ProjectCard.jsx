import React from 'react';
import { SiAqua } from "react-icons/si";

const ProjectCard = ({ data, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="desc">
        <h3>{data.company}</h3>
        <span>{data.period}</span>
        <p>{data.title}</p>
      </div>
      <button className="detail_more">
        자세히 보기
      </button>
    </div>
  );
};

export default ProjectCard;
