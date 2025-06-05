import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import projectData from '../../data/projects';

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="section" id="projects">
        <div className="section_wrap projects_wrap">
          <div className="title">
            👊 <br />
            다양한 업무를 통해 배우고, 프로젝트마다 성장하고 있습니다.
          </div>
          <section className="project_wrap flex flex-wrap justify-start gap-20">
            {/* 프로젝트 카드 */}
            {projectData.map((p) => (
              <ProjectCard key={p.id} data={p} onClick={() => setSelected(p)} />
            ))}
          </section>
        </div>
      </div>
      {/* 프로젝트 카드 클릭 시 모달 활성화 */}
      {selected && (
        <ProjectModal data={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default Projects;
