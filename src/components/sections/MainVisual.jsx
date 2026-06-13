import React from 'react'
import "./MainVisual.scss"
import { useTyping } from '../../hooks/useTyping'

const phrases = [
  '퍼블리싱 완성도와 React 개발, 둘 다 합니다.',
  '픽셀 단위로 구현하고, 구조 단위로 설계합니다.',
  '일정 안에 확실하게 구현합니다.',
]

const MainVisual = () => {
  const typingText = useTyping(phrases)

  return (
    <div className='main-visual'>
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