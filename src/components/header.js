import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import NavBar from "./navigation/nav-bar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
    }}
  >
    <h1 style={{ margin: 0, padding: `1em` }}>
      <Link
        to="/"
        style={{
          color: `#e40c10`,
          textDecoration: `none`,
          textTransform: `uppercase`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
