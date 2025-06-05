import React from 'react';

const ProjectCard = ({ data, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{data.company}</h3>
      <span>{data.period}</span>
      <p>{data.title}</p>
      <button className="see-more">자세히 보기</button>
    </div>
  );
};

export default ProjectCard;
