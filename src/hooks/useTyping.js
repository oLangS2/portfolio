import { useState, useEffect } from 'react'

export function useTyping(phrases, typeSpeed = 65, deleteSpeed = 30, pauseTime = 2000) {
  const [text, setText] = useState('')

  useEffect(() => {
    let pi = 0    // 현재 몇 번째 문장인지
    let ci = 0    // 현재 몇 글자까지 보여줄지
    let del = false  // 지우는 중인지 여부
    let timer

    const tick = () => {
      const current = phrases[pi]

      if (!del) {
        // 한 글자씩 추가
        setText(current.slice(0, ++ci))

        if (ci === current.length) {
          // 문장 다 썼으면 잠깐 멈췄다가 지우기 시작
          del = true
          timer = setTimeout(tick, pauseTime)
          return
        }
        timer = setTimeout(tick, typeSpeed)

      } else {
        // 한 글자씩 삭제
        setText(current.slice(0, --ci))

        if (ci === 0) {
          // 다 지웠으면 다음 문장으로
          del = false
          pi = (pi + 1) % phrases.length
          timer = setTimeout(tick, 400)
          return
        }
        timer = setTimeout(tick, deleteSpeed)
      }
    }

    timer = setTimeout(tick, 1000)  // 첫 시작 딜레이
    return () => clearTimeout(timer)  // 컴포넌트 사라질 때 타이머 정리
  }, [])

  return text  // 현재 보여줄 문자열 반환
}