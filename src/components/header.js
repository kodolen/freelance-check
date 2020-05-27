import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/test">Test</Link></li>
      <li><Link to="/guide">Guide</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
