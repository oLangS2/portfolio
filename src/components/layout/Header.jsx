import React from 'react'
import "./Header.scss"

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        O
        <span className="point">.</span>
        lang
      </div>
      <nav>
        <ul className='header__list'>
          <li className='header__item'>skill</li>
          <li className='header__item'>project</li>
          <li className='header__item'>contact</li>
        </ul>
      </nav>
    </header>
    
  )
}
