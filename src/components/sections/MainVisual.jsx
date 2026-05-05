import React from 'react'
import "./MainVisual.scss"

const MainVisual = () => {
  return (
    <div className='main-visual'>
      <div className="main-visual__inner">
        <div className="main-visual__tag">
          <span>3년차</span>
          <span>웹 퍼블리셔</span>
          <span>프론트엔드 개발자</span>
        </div>
        <div className='main-visual__title'>마크업을 정확하게,<br />컴포넌트를 유연하게.</div>
        <button className="main-visual__btn">
          프로젝트 보기
          <span className="main-visual__btn-icon">↓</span>
        </button>
      </div>
    </div>
  )
}

export default MainVisual