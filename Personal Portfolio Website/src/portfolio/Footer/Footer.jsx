import "./Footer.css";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="footer">
      <Fade direction="left" triggerOnce={true}>
        <div className="footer-text">
          <p>Copyright &copy; 2024 by @KartikeGupta | All Rights Reserved</p>
        </div>
      </Fade>

      <Fade direction="right" triggerOnce={true}>
        <div className="footer-iconTop">
          <Link to="/#">
            <FontAwesomeIcon className="icon" icon={faAngleUp} />
          </Link>
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
