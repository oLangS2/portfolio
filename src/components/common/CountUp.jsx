import { useEffect, useRef, useState } from 'react'

export default function CountUp({ value, active }) {
    const [display, setDisplay] = useState(value)
    const rafRef = useRef(null)
  
    const parse = (val) => {
      const match = String(val).match(/^([\d.]+)(.*)$/)
      if (!match) return null
      return { num: parseFloat(match[1]), suffix: match[2] }
    }
  
    useEffect(() => {
      if (!active) return
      const parsed = parse(value)
      if (!parsed) return
  
      const { num, suffix } = parsed
      const duration = 1200
      const start = performance.now()
  
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        setDisplay(`${Math.round(eased * num)}${suffix}`)
        if (progress < 1) rafRef.current = requestAnimationFrame(tick)
      }
  
      rafRef.current = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(rafRef.current)
    }, [active])
  
    return <span>{display}</span>
}