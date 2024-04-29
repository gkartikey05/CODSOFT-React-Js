import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Portfolio</Link>
      <FontAwesomeIcon icon={faBars} id="menu-icon" />

      <nav className="navbar">
        <Link to="/home" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header;