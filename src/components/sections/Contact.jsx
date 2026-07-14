import { useState, useRef } from 'react'
import "./Contact.scss"
import { LuMail } from "react-icons/lu";
import { LuBookText } from "react-icons/lu";
import { LuDownload } from "react-icons/lu";
import { LuArrowUpRight } from "react-icons/lu";

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)

  const handleClick = (e) => {
    if (status !== 'idle') { e.preventDefault(); return }

    setStatus('loading')
    const start = performance.now()
    const duration = 800

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      setProgress(Math.round(p * 100))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
      else setStatus('done')
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  return (
    <div className='contact' id='contact'>
      <div className="contact__inner">
        <p className="projects__eyebrow">Contact</p>
        <h2 className="projects__title">함께 만들어요.</h2>
        <p className="contact__txt">
          퍼블리싱 완성도와 React 개발 경험을 바탕으로 <br />서비스의 품질을 함께 높이고 싶습니다.
        </p>
        <div className="contact__btn-flex">
          <a className="contact__btn" href="mailto:guswjd8389@gmail.com">
            <div className="contact__arrow">
              <LuArrowUpRight size={30}/>
            </div>
            <div className="contact__icon">
              <LuMail size={30}/>
            </div>
            <h3 className="contact__btn-title">이메일 보내기</h3>
            <p className="contact__btn-desc">메일함으로 바로 연결돼요</p>
          </a>
          <a href="https://o-lang.tistory.com" target='_blank' className="contact__btn">
            <div className="contact__arrow">
              <LuArrowUpRight size={30}/>
            </div>
            <div className="contact__icon">
              <LuBookText size={30}/>
            </div>
            <h3 className="contact__btn-title">개발 블로그</h3>
            <p className="contact__btn-desc">그동안 쓴 글을 확인해보세요</p>
          </a>
          <a href={`${process.env.PUBLIC_URL}/오현정_이력서.pdf`} download="오현정_이력서.pdf" className="contact__btn download" onClick={handleClick}>
            <div className="contact__arrow">
              <LuArrowUpRight size={30}/>
            </div>
            <div className="contact__icon">
              <LuDownload size={30}/>
            </div>
            <h3 className="contact__btn-title">이력서 다운로드</h3>
            <p className="contact__btn-desc">PDF로 바로 받아보세요</p>
          </a>
        </div>
      </div>
      <footer>
        Copyright © 2026 o.lang All rights reserved.
      </footer>
    </div>
  )
}