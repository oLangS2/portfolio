import React, { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import projectData from '../../data/projects';

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [moreProject, setMoreProject] = useState(false);

  //더보기 버튼 상태값에 따른 프로젝트 개수 데이터 잘라내기
  const visibleProjects = moreProject ? projectData : projectData.slice(0,6);

  return (
    <>
      <div className="section" id="projects" data-aos="fade-down">
        <div className="section_wrap projects_wrap">
          <div className="title">
            💪 <br />
            다양한 업무를 통해 배우고, 프로젝트마다 성장하고 있습니다.
          </div>
          <section className="card_wrap">
            {/* 프로젝트 카드 */}
            {visibleProjects.map((p) => (
              <ProjectCard key={p.id} data={p} onClick={() => setSelected(p)} />
            ))}
          </section>
          {/* 더보기 버튼 클릭 시 프로젝트 데이터 추가로 불러오기 */}
          {!moreProject ? (
              <button className="more_project" onClick={() => setMoreProject(true)}>
                전체보기
              </button>
            ) : (
              <button className="more_project" onClick={() => setMoreProject(false)}>
                접어두기
              </button>
            )}
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
