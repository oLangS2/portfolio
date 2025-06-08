import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const ProjectModal = ({ data, onClose }) => {
  return (
    <div className="modal_overlay" onClick={onClose}>
      <>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close" onClick={onClose}>
            <AiOutlineClose size={40}/>
          </button>
          <div className="bg">
            <img src={data.image} alt="" /> 
            <h4>{data.title}</h4>
            <div className="flex gap-30">
              <div>
                <span>기간</span>
                <p>{data.period}</p>
              </div>
              <div>
                <span>참여 인원</span>
                <p>{data.people}</p>
              </div>
              <div>
                <span>관련 링크</span>
                <p>{data.link}</p>
              </div>
              <div>
                <span>기술 스택</span>
                <p>{data.tech.join(", ")}</p>
              </div>
            </div>
            <div className="line"></div>
            <strong>상세 내용</strong>
            <ul>
              {Array.isArray(data.description) ? (
                data.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>{data.description}</li> // 배열이 아닌 경우도 표시
              )}
            </ul>
            {/* 트러블 슈팅 있는 경우에만 표시 */}
            {Array.isArray(data.trouble) && data.trouble.length > 0 && (
              <>
                <strong>트러블 슈팅</strong>
                <ul>
                  {data.trouble.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

export default ProjectModal;
