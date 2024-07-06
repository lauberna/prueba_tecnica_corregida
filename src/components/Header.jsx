import React from 'react'
import s from "./header.module.css"

const Header = () => {
  return (
    <header className={s.header}>
      <p className={s.bannerTitle}>Release Notes</p>
    </header>
  )
}

export default Header