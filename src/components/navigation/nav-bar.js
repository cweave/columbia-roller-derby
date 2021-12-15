import React from "react"

import { Link } from "gatsby"
import "../../styles/components/navigation/nav-bar.scss"

const NavBar = () => {
  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      id="Navbar"
      role="banner"
      className="navbar w-nav"
    >
      <div className="navigation-container">
        <nav role="navigation" className="nav-menu w-nav-menu" tabIndex="0">
          <Link to="rookie-skaters" className="nav-link w-nav-link">
            Rookie Skaters
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
