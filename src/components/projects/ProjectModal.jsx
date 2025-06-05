import React from 'react';

const ProjectModal = ({ data, onClose }) => {
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <h2>{data.title}</h2>
        <p><strong>기간:</strong> {data.period}</p>
        <p><strong>설명:</strong> {data.description}</p>
        <p><strong>사용 기술:</strong> {data.tech.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
