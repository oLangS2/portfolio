import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const ProjectModal = ({ data, onClose }) => {
  const [openState, setOpenState] = useState({
    feature:[],
    trouble:[],
  });

  useEffect(() => {
    // 모달 오픈 시 body 스크롤 막기
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 데이터 값 내려받아 모든 토글 오픈
    if (Array.isArray(data.features)) {
      const featureIndexes = Array.from(data.features, (_, i) => i);
      setOpenState((prev) => ({ ...prev, feature: featureIndexes }));
    }

    if (Array.isArray(data.trouble)) {
      const troubleIndexes = Array.from(data.trouble, (_, i) => i);
      setOpenState((prev) => ({ ...prev, trouble: troubleIndexes }));
    }

    return () => {
      // 모달 클로즈 시 body 스크롤 원복
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [data.features, data.trouble]);

  // 공통 토글 함수
  const toggleSection = (section, index) => {
    setOpenState((prev) => {
      const isOpen = prev[section].includes(index);
      const updated = isOpen
        ? prev[section].filter((i) => i !== index) // 열려있으면 제거 
        : [...prev[section], index]; // 닫혀있으면 추가
      return { ...prev, [section]: updated }; // 업데이트
    });
  };

  return (
    <div className="modal_overlay" onClick={onClose}>
      <>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={onClose}>
            <AiOutlineClose size={40}/>
          </button>
          <div className="bg">
            <span className='icon'>{data.icon}</span> 
            <h4 className='project_title mb-30'>{data.title}</h4>
            <div className='mb-30'>
              <span className='sub_tite'>프로젝트 설명</span>
              <p>{data.account}</p>
            </div>
            <div className="flex gap-30 mb-10">
              <div>
                <span className='sub_tite'>기간</span>
                <p>{data.period}</p>
              </div>
              <div>
                <span className='sub_tite'>참여 인원</span>
                <p>{data.people}</p>
              </div>
            </div>
            <div className="flex gap-30 mb-50">
              <div>
                <span className='sub_tite'>기술 스택</span>
                <p>{data.tech.join(", ")}</p>
              </div>
              <div>
                <span className='sub_tite'>관련 링크</span>
                <a href={data.link} target="_blank" className='link'>사이트로 이동</a>
              </div>
            </div>
            <div className="line"></div>
            {/* 작업 기여도 */}
            {Array.isArray(data.features) && (
              <>
                <strong className='mb-10'>📌  작업 기여도</strong>
                {data.features.map((feature, idx) => (
                  <div key={idx} className="block">
                    <p onClick={() => toggleSection('feature', idx)}>{feature.title}</p>
                    {openState.feature.includes(idx) && (
                      <ul>
                        {feature.descriptions.map((desc, dIdx) => (
                          <li key={dIdx}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </>
            )}
            {/* 트러블 슈팅 (있을 경우에만 표시) */}
            {Array.isArray(data.trouble) && (
              <>
                <div className="line mt-30"></div>
                <strong className='mb-10'>💫 트러블 슈팅</strong>
                {data.trouble.map((trouble, idx) => (
                  <div key={idx} className='block'>
                    <p onClick={() => toggleSection('trouble', idx)}>{trouble.title}</p>
                    {openState.trouble.includes(idx) && (
                      <ul>
                      {trouble.descriptions.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectModal;
