import React from 'react'

const career = () => {
  return (
    <div className="section" id="career">
      <div className="section_wrap career_wrap">
        <div className="title">
          경력
        </div>
        <ul className='box_wrap'>
          <li className='box flex'>
            <div className="left">
              24.06 - 24.03
            </div>
            <div className="right">
              <b>(주) 리더마인</b>
              <span> 프론트엔드팀 · 사원 2년차 · 프론트엔드</span>
              <div className="more">
                <ul>
                  <li>React, shopby 헤드리스 API를 활용하여 메인, 상품 상세, 조회, 장바구니 등 주요 기능을 개발 </li>
                  <li>백엔드 API를 활용한 관리자 페이지 개발</li>
                  <li>카페24 플랫폼을 활용한 쇼핑몰 구축 및 UI/UX 개선, 유지보수 업무 수행</li>
                </ul>
              </div>
              {/* TODO - 사용툴 태그 넣을지 말지 고민중 */}
            </div>
          </li>
          <li className='box flex'>
            <div className="left">
              24.06 - 24.03
            </div>
            <div className="right">
              <b>(주) 하이어랭크</b>
              <span> 디자인팀 · 사원 1년차 · 퍼블리셔</span>
              <div className="more">
                <ul>
                  <li>기획, 디자인, HTML, CSS, JavaScript 사용하여 웹사이트를 구축 및 유지보수</li>
                  <li>카페24 플랫폼을 활용한 쇼핑몰 구축 및 UI/UX 개선, 유지보수 업무 수행</li>
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