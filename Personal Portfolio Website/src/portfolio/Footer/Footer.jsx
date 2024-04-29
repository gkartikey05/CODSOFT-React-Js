import './Footer.css'

import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by @KartikeGupta | All Rights Reserved</p>
      </div>

      <div className="footer-iconTop">
        <Link to='/home'><FontAwesomeIcon className='icon' icon={faAngleUp} /></Link>
      </div>
    </footer>
  )
}

export default Footer;