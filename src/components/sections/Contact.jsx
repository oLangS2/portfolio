import React from 'react'
import "./Contact.scss"

export default function Contact() {
  return (
    <div className='contact'>
      <div className="contact__inner">
        <p className="projects__eyebrow">Contact</p>
        <h2 className="projects__title">함께 만들어요</h2>
        <p className="contact__txt">
          퍼블리싱 완성도와 React 개발 경험을 바탕으로 <br />서비스의 품질을 함께 높이고 싶습니다.
        </p>
        <div className="contact__btn-flex">
          <a href="#" className="contact__btn email">이메일 보내기</a>
          <a href="#" className="contact__btn tistory">개발 블로그</a>
          <a href="#" className="contact__btn download">이력서 다운로드</a>
        </div>
      </div>
      <footer>
        Copyright © 2026 o.lang All rights reserved.
      </footer>
    </div>
  )
}
