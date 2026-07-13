import { useState, useRef } from 'react'
import "./Contact.scss"

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
          <a href="mailto:guswjd8389@gmail.com" className="contact__btn">
            이메일 보내기
          </a>
          <a href="https://o-lang.tistory.com" target='_blank' className="contact__btn">
            개발 블로그
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/오현정_이력서.pdf`}
            download="오현정_이력서.pdf"
            className="contact__btn download"
            onClick={handleClick}
          > 
            이력서 다운로드
          </a>
        </div>
      </div>
      <footer>
        Copyright © 2026 o.lang All rights reserved.
      </footer>
    </div>
  )
}