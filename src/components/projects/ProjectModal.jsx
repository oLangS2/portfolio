import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const ProjectModal = ({ data, onClose }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    // 모달 열릴 때 스크롤 막기
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // 모달 닫힐 때 스크롤 복원
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  // 상세내용 토글 상태 (모두 펼쳐진 상태)
  useEffect(() => {
    if (Array.isArray(data.features)) {
      const allIndexes = data.features.map((_, idx) => idx);
      setOpenIndexes(allIndexes);
    }
  }, [data.features]);

  const toggleFeature = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
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
            {/* 작업 내용 */}
            {Array.isArray(data.features) && (
              <>
                <strong className='mb-10'>💫  작업 내용</strong>
                {data.features.map((feature, idx) => (
                  <div key={idx} className="feature-block mb-10">
                    <p onClick={() => toggleFeature(idx)}>{feature.title}</p>
                    {openIndexes.includes(idx) && (
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
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectModal;
