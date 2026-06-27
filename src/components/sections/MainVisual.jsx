import React from 'react'
import "./MainVisual.scss"
import { useTyping } from '../../hooks/useTyping'

const phrases = [
  '귀찮은 반복은 줄이고, 좋은 경험은 늘리고.',
  '사용자와 팀 모두가 편한 서비스를 만들어갑니다.',
  '단순히 화면이 아닌, 경험을 설계합니다.',
]

const MainVisual = () => {
  const typingText = useTyping(phrases)

  return (
    <div className='main-visual' id="main">
      <div className="main-visual__inner">
        <div className="main-visual__tag">
          <span>3년차</span>
          <span>웹 퍼블리셔</span>
          <span>프론트엔드 개발자</span>
        </div>
        <div className='main-visual__title'>마크업을 정확하게,<br />컴포넌트를 <span className="main-visual__highlight">유연하게.</span></div>
       
        <p className="main-visual__typing">
          {typingText}
          <span className="main-visual__caret" />
        </p>
{/* 
        <a href='#projects' className="main-visual__btn">
          프로젝트 보기
          <span className="main-visual__btn-icon">↓</span>
        </a> */}
      </div>
    </div>
  )
}

export default MainVisual