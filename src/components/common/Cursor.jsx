import { useEffect, useRef } from 'react'
import "./Cursor.scss"

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let frameId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const loop = () => {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top  = `${my}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${Math.round(rx)}px`
        ringRef.current.style.top  = `${Math.round(ry)}px`
      }

      frameId = requestAnimationFrame(loop)
    }

    const addHover    = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, [data-hover]')) addHover()
    })
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, [data-hover]')) removeHover()
    })

    frameId = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}