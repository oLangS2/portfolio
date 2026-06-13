import React from 'react'
import "./Carrer.scss"

export default function Career() {
    return (
      <div className="career">
        <div className="career__inner">
          <p className="career__eyebrow">Career</p>
          <h2 className="career__title">경력</h2>
          <ul className="career__list">
  
            <li className="career__item">
              <div className="career__period">
                <span>25.08</span>
                <em className="career__badge career__badge--active">재직중</em>
              </div>
              <div className="career__content">
                <b className="career__company">키스템프엘비에스</b>
                <span className="career__info">현대면세점 UX전략팀 (파견) · 사원 3년차 · 퍼블리셔</span>
                <ul className="career__detail">
                  <li>UX를 개선하여 사용자 흐름을 단순화하고 사용성을 향상</li>
                  <li>디자인 요소를 체계화한 템플릿 가이드를 제작해 협업 효율성과 UI 일관성 향상</li>
                  <li>이벤트 페이지 퍼블리싱을 담당하며 반응형·웹표준을 준수한 마크업 구현</li>
                </ul>
              </div>
            </li>
  
            <li className="career__item">
              <div className="career__period">
                <span>24.06 — 25.03</span>
              </div>
              <div className="career__content">
                <b className="career__company">(주) 리더마인</b>
                <span className="career__info">웹 에이전시 · 프론트엔드팀 · 사원 2년차 · 프론트엔드</span>
                <ul className="career__detail">
                  <li>React 및 Shopby 헤드리스 API를 활용하여 메인, 상품 상세, 장바구니 등 핵심 기능 개발</li>
                  <li>백엔드 API 연동을 통한 관리자 페이지(BO) 개발 및 CRUD 기능 구현</li>
                  <li>카페24 기반 쇼핑몰 구축 및 유지보수, UI/UX 개선 제안 및 적용</li>
                </ul>
              </div>
            </li>
  
            <li className="career__item">
              <div className="career__period">
                <span>23.05 — 24.05</span>
              </div>
              <div className="career__content">
                <b className="career__company">(주) 하이어랭크</b>
                <span className="career__info"> 웹 에이전시 · 디자인팀 · 사원 1년차 · 퍼블리셔</span>
                <ul className="career__detail">
                  <li>기획, 디자인, HTML, CSS, JavaScript를 활용하여 웹사이트 구축 및 유지보수 수행</li>
                  <li>카페24 기반 쇼핑몰 구축 및 유지보수, UI/UX 개선 제안 및 적용</li>
                </ul>
              </div>
            </li>
  
          </ul>
        </div>
      </div>
    )
  }
