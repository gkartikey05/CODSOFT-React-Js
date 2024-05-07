import "./NavBar.css";

import {
  faSquareFacebook,
  faSquareInstagram,
  faSquarePinterest,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import UserAvatar from "../../assets/user-avatar.jpg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="social-links">
        <FontAwesomeIcon className="link-icons" icon={faSquareFacebook} />
        <FontAwesomeIcon className="link-icons" icon={faSquareInstagram} />
        <FontAwesomeIcon className="link-icons" icon={faSquarePinterest} />
        <FontAwesomeIcon className="link-icons" icon={faSquareTwitter} />
      </div>

      <div className="nav-links">
        <Link to="/#home">HOME</Link>
        <Link to="/#about">ABOUT</Link>
        <Link to="/#write">WRITE</Link>
        <Link to="/#contact">CONTACT</Link>
        <Link to="/#logout">LOGOUT</Link>
      </div>
      <div className="nav-right">
        <img className="user" src={UserAvatar} alt="" />
        <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

export default NavBar;
