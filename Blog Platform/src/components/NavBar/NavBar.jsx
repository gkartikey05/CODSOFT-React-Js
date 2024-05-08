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
  const user = true;
  return (
    <div className="navbar">
      <div className="social-links">
        <FontAwesomeIcon className="link-icons" icon={faSquareFacebook} />
        <FontAwesomeIcon className="link-icons" icon={faSquareInstagram} />
        <FontAwesomeIcon className="link-icons" icon={faSquarePinterest} />
        <FontAwesomeIcon className="link-icons" icon={faSquareTwitter} />
      </div>

      <div className="nav-links">
        <Link className="nav-link" to="/">
          HOME
        </Link>
        <Link className="nav-link" to="/about">
          ABOUT
        </Link>
        <Link className="nav-link" to="/write">
          WRITE
        </Link>
        <Link className="nav-link" to="/contact">
          CONTACT
        </Link>
        <Link className="nav-link" to="/logout">
          {user && "LOGOUT"}
        </Link>
      </div>
      <div className="nav-right">
        {user ? (
          <img className="user" src={UserAvatar} alt="" />
        ) : (
          <div className="nav-links">
            <Link className="nav-link" to="/login">
              LOGIN
            </Link>
            <Link className="nav-link" to="/register">
              REGISTER
            </Link>
          </div>
        )}
        <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

export default NavBar;
