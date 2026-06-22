import { useEffect, useState } from 'react'
import './ProjectModal.scss'

const STAR_LABELS = { s: '상황', t: '역할', a: '해결', r: '결과' }

export default function ProjectModal({ project, onClose }) {
  const { kicker, title, gradient, metrics, screenshots, star, troubleshooting, links } = project
  const [open, setOpen] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setOpen(true);
    });
  }, []);

  const closeModal = () => {
    setOpen(false);

    setTimeout(() => {
      onClose();
    }, 400);
  };

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={`moverlay ${open ? "open" : ""}`}  onClick={handleOverlay}>
      <div className="modal" role="dialog" aria-modal="true">

        {/* 헤더 */}
        <div className="modal__hero">
          <button className="modal__close"  onClick={closeModal} aria-label="닫기">×</button>
          <div className="modal__hero-content">
            <p className="modal__kicker">{kicker}</p>
            <h2 className="modal__title">{title}</h2>
          </div>
        </div>

        <div className="modal__body">

          {/* 수치 */}
          <div className="modal__metrics">
            {metrics.map((m, i) => (
              <div key={i} className="modal__metric">
                <div className="modal__metric-val">{m.val}</div>
                <div className="modal__metric-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>

          {/* STAR */}
          <p className="modal__label">프로젝트 개요</p>
          <div className="star-table">
            {Object.entries(star).map(([key, val]) => (
              <div key={key} className="star-row">
                <div className="star-key">{STAR_LABELS[key]}</div>
                <div className="star-val">{val}</div>
              </div>
            ))}
          </div>

          {/* 트러블슈팅 */}
          <p className="modal__label">트러블슈팅</p>
          <div className="ts-list">
            {troubleshooting.map((ts, i) => (
              <TsItem key={i} item={ts} />
            ))}
          </div>

          {/* 스크린샷 */}
          <p className="modal__label">작업 화면</p>
          <div className="screenshot-grid">
            {screenshots.map((s, i) => (
              <div key={i} className="screenshot-slot">
                {s.src
                  ? <img src={s.src} alt={s.label} />
                  : <span>{s.label}</span>
                }
              </div>
            ))}
          </div>

          <div className="modal__tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="modal__tag">{tag}</span>
            ))}
          </div>

          {/* 링크 */}
          <div className="modal__links">
            {links.github && <a href={links.github} className="modal__link" target="_blank" rel="noreferrer">GitHub ↗</a>}
            {links.live   && <a href={links.live}   className="modal__link" target="_blank" rel="noreferrer">Live Demo ↗</a>}
          </div>

        </div>
      </div>
    </div>
  )
}

// 아코디언 아이템 분리
function TsItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`ts-item ${open ? 'open' : ''}`}>
      <button className="ts-btn" onClick={() => setOpen(prev => !prev)}>
        <span>
          <span className="ts-tag-pill">{item.tag}</span>
          &nbsp;&nbsp;{item.q}
        </span>
        <span className="ts-icon">+</span>
      </button>
      <div className="ts-body">
        {item.p ? <p>{item.p}</p> : null}
        {item.d ? <p>{item.d}</p> : null}
        {item.s ? <p>{item.s}</p> : null}
        {item.r ? <p>{item.r}</p> : null}
      </div>
    </div>
  )
}