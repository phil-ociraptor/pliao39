import React from 'react'
import Logo from './logo'

const Nav = () => (
  <nav>
    <div className="nav-container">
      <Logo size={'small'}/>
    </div>

    <style jsx>{`
    .nav-container {
      margin: 20px 10px;
    }
    `}</style>
  </nav>
)

export default Nav
