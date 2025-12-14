import React, { useState } from 'react';

const Career = () => {
  const [activeIndex, setActiveIndex] = useState([false, false, false]); // more_btn 상태값

  const handleToggle = (index) => {
    setActiveIndex((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const careerData = [
    {
      period: '25.08 -',
      company: '키스템프엘비에스',
      position: '현대면세점 UX전략팀 · 퍼블리셔',
      tasks: [
        '로그인 페이지의 UX를 개선하여 사용자 흐름을 단순화하고 사용성을 향상',
        '이벤트 페이지 퍼블리싱을 담당하며 디자인 시안을 기반으로 반응형·웹표준을 준수한 마크업을 구현',
        '디자인 요소를 체계화한 템플릿 가이드를 제작해 협업 효율성과 UI 일관성 향상',
      ],
    },
    {
      period: '24.06 - 25.03',
      company: '(주) 리더마인',
      position: '프론트엔드팀 · 프론트엔드',
      tasks: [
        'React 및 Shopby 헤드리스 API를 활용하여 메인, 상품 상세, 상품 목록, 장바구니 등 핵심 기능 개발',
        '백엔드 API 연동을 통한 관리자 페이지(BO) 개발 및 CRUD 기능 구현',
        '카페24 기반 쇼핑몰 구축 및 유지보수 업무 수행, UI/UX 개선 제안 및 적용',
      ],
    },
    {
      period: '23.05 - 24.05',
      company: '(주) 하이어랭크',
      position: '디자인팀 · 퍼블리셔',
      tasks: [
        '기획, 디자인, HTML, CSS, JavaScript를 활용하여 웹사이트 구축 및 유지보수 수행',
        '카페24 기반 쇼핑몰 구축 및 유지보수 업무 수행, UI/UX 개선 제안 및 적용',
      ],
    },
  ];

  return (
    <div className="section" id="career" data-aos="fade-down">
      <div className="section_wrap career_wrap">
        <div className="title">Career</div>
        <ul className="box_wrap">
          {careerData.map((item, i) => (
            <li className="box flex" key={i}>
              <div className="left">{item.period}</div>
              <div className="right" onClick={() => handleToggle(i)}>
                <b>{item.company}</b>
                <p>{item.position}</p>
                <div className={`more ${activeIndex[i] ? 'active' : ''}`}>
                  <ul>
                    {item.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className={`more_btn ${activeIndex[i] ? 'active' : ''}`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Career;
