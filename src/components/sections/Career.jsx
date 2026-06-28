import React, { useEffect, useRef } from 'react'
import "./Career.scss"

export default function Career() {
const listRef = useRef(null)

useEffect(() => {
  const items = listRef.current?.querySelectorAll('.career__item')
  if (!items) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.2 }
  )

  items.forEach(el => observer.observe(el))

  return () => observer.disconnect()
}, []) 
    
return (
      <div className="career" id='career'>
        <div className="career__inner">
          <p className="career__eyebrow">Career</p>
          <h2 className="career__title">경력</h2>
          <ul className="career__list"  ref={listRef}>
  
            <li className="career__item">
              <div className="career__period">
                <span>25.08</span>
                <em className="career__badge career__badge--active">재직중</em>
              </div>
              <div className="career__content">
                <b className="career__company">키스템프엘비에스</b>
                <span className="career__info">현대면세점 UX전략팀 (파견) · 사원 3년차 · 퍼블리셔</span>
                <ul className="career__detail">
                  <li>명품관 · 브랜드관 · 로그인 · 웰니스관 리뉴얼 퍼블리싱 단독 수행</li>
                  <li>이벤트 페이지 템플릿 가이드 제작으로 협업 효율성과 UI 일관성 향상</li>
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
                  <li>React + Shopby 헤드리스 API 기반 주요 페이지(메인, 상품상세, 마이페이지 등) 개발·배포</li>
                  <li>숏츠 플랫폼 및 관리자 게시판(BO) 백엔드 API 연동 개발</li>
                  <li>카페24 쇼핑몰 구축·유지보수 및 게임형 이벤트 페이지 월 1회 정기 제작</li>
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
                  <li>광고 에이전시 회사소개 사이트 디자인·반응형 퍼블리싱 직접 수행</li>
                  <li>학생복 브랜드 UI/UX 리디자인 및 구현</li>
                  <li>카페24 기반 쇼핑몰 브랜드 디자인 및 반응형 퍼블리싱</li>
                </ul>
              </div>
            </li>
  
          </ul>
        </div>
      </div>
    )
  }
