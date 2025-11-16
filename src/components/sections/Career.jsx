import React from 'react'

const career = () => {
  return (
    <div className="section" id="career" data-aos="fade-down">
      <div className="section_wrap career_wrap">
        <div className="title">
          📍 <br />
          경력 및 담당업무
        </div>
        <ul className='box_wrap'>
          <li className='box flex'>
            <div className="left">
              25.08 - 재직중
            </div>
            <div className="right">
              <b>키스템프엘비에스</b>
              <span> 현대면세점 UX전략팀 · 사원 3년차 · 퍼블리셔</span>
              <div className="more">
                <ul>
                  <li>로그인 페이지의 UX를 개선하여 사용자 흐름을 단순화하고 사용성을 향상</li>
                  <li>이벤트 페이지 퍼블리싱을 담당하며 디자인 시안을 기반으로 반응형·웹표준을 준수한 마크업을 구현</li>
                  <li>디자인 요소를 체계화한 템플릿 가이드를 제작해 협업 효율성과 UI 일관성 향상</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='box flex'>
            <div className="left">
              24.06 - 25.03
            </div>
            <div className="right">
              <b>(주) 리더마인</b>
              <span> 프론트엔드팀 · 사원 2년차 · 프론트엔드</span>
              <div className="more">
                <ul>
                  <li>React 및 Shopby 헤드리스 API를 활용하여 메인, 상품 상세, 상품 목록, 장바구니 등 핵심 기능 개발</li>
                  <li>백엔드 API 연동을 통한 관리자 페이지(BO) 개발 및 CRUD 기능 구현</li>
                  <li>카페24 기반 쇼핑몰 구축 및 유지보수 업무 수행, UI/UX 개선 제안 및 적용</li>
                </ul>
              </div>
            </div>
          </li>
          <li className='box flex'>
            <div className="left">
              23.05 - 24.05
            </div>
            <div className="right">
              <b>(주) 하이어랭크</b>
              <span> 디자인팀 · 사원 1년차 · 퍼블리셔</span>
              <div className="more">
                <ul>
                  <li>기획, 디자인, HTML, CSS, JavaScript를 활용하여 웹사이트 구축 및 유지보수 수행</li>
                  <li>카페24 기반 쇼핑몰 구축 및 유지보수 업무 수행, UI/UX 개선 제안 및 적용</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default career