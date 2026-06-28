import { useState, useEffect, useRef } from 'react'
import { PROJECTS } from '../../contants/projects'
import ProjectModal from './ProjectModal'
import CountUp from '../common/CountUp'
import './Projects.scss'

export default function Projects() {
  const [activeId, setActiveId] = useState(null)
  const listRef = useRef(null)
  const [visibleIds, setVisibleIds] = useState(new Set())

  // 현재 스크롤 위치 저장
  const scrollY = useRef(0)

  // ESC 키 닫기
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setActiveId(null)
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [])

  useEffect(() => {
    if (activeId) {
      // 현재 위치 저장
      scrollY.current = window.scrollY

      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
    } else {
      // body 복원
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''

      // 저장 위치로 이동
      window.scrollTo(0, scrollY.current)
    }
  }, [activeId])

// useEffect 안에 setTimeout 정리 추가
useEffect(() => {
  const items = listRef.current?.querySelectorAll('.pcard')
  if (!items) return

  const timeouts = []

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = [...items].indexOf(entry.target)
          const delay = index * 0.1

          entry.target.style.transitionDelay = `${delay}s`
          entry.target.classList.add('visible')

          const id = entry.target.dataset.id
          const t = setTimeout(() => {
            setVisibleIds(prev => new Set(prev).add(id))
          }, delay * 1000 + 500)

          timeouts.push(t)
        }
      })
    },
    { threshold: 0.1 }
  )

  items.forEach(el => observer.observe(el))

  return () => {
    observer.disconnect()
    timeouts.forEach(clearTimeout)
  }
}, [])

  return (
    <section className="projects" id="project">
      <div className="projects__inner">

        <p className="projects__eyebrow">Projects</p>
        <h2 className="projects__title">주요 프로젝트</h2>

        <div className="projects__grid" ref={listRef}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="pcard"
              data-id={project.id}
              onClick={() => setActiveId(project.id)}
            >
              <div
                className="pcard__thumb"
                style={{ background: project.gradient }}
              >
                <span className="pcard__num">{project.num}</span>
                <span className="pcard__badge">{project.badge}</span>
              </div>
              <div className="pcard__body">
                <div className="pcard__title">{project.title}</div>
                <div className="pcard__desc">{project.desc}</div>
                <div className="pcard__metrics">
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="pcard__metric-val">
                        <CountUp value={m.val} active={visibleIds.has(String(project.id))} />
                      </div>
                      <div className="pcard__metric-lbl">{m.lbl}</div>
                    </div>
                  ))}
                </div>
                <div className="pcard__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="pcard__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {activeId && (
        <ProjectModal
          project={PROJECTS.find(p => p.id === activeId)}
          onClose={() => setActiveId(null)}
        />
      )}
    </section>
  )
}