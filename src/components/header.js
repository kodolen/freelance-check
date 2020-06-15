import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState}from "react"
import Logo from "../images/fc-logo.png"
import LogoWhite from "../images/logo-fc.svg"


const Header = ({ siteTitle, color }) => {

  let hamburgerColor = "hamburger";

  if (color === "white") {
    hamburgerColor = "hamburger white"
  }

  const [showMenu, setMenu] = useState(false);
  const menuHandler = function () {
    setMenu(showMenu => !showMenu);
  }

  return (
    <div className={showMenu ? 'header-wrapper open' : "header-wrapper"}>
      <header className={showMenu ? 'header-menu open' : "header-menu"}>
        <ul>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/test" activeClassName="active">Test</Link></li>
          <li><Link to="/guide" activeClassName="active">Guide</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>
      </header>
      <div className={hamburgerColor} >
        <div className="hamburger-inner" onClick={menuHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="logo-wrapper">
        {color === "white" ? <Link to="/"><img src={Logo}></img></Link> : <Link to="/"><img src={LogoWhite}></img></Link>}
      </div>
    </div>

  )
}

export default Header
