import React from 'react';
import { AiOutlinePlusCircle } from "react-icons/ai";

const ProjectCard = ({ data, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="desc">
        <h3>{data.company}</h3>
        <span>{data.period}</span>
        <p>{data.title}</p>
      </div>
      <button className="detail_more">
        <AiOutlinePlusCircle size={25}/>
      </button>
    </div>
  );
};

export default ProjectCard;
