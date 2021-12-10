import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
      textAlign: `center`,
      padding: `2em`,
    }}
  >
    <h1 style={{ margin: 0 }}>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
