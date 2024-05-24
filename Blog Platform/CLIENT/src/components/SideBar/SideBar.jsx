import "./SideBar.css";

import {
  faSquareFacebook,
  faSquareInstagram,
  faSquarePinterest,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutImage from "../../assets/about-image.jpg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <span className="sidebar-title">ABOUT ME</span>
        <img src={AboutImage} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
      </div>
      <div className="sidebar-items">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="list-items">Life</li>
          <li className="list-items">Music</li>
          <li className="list-items">Style</li>
          <li className="list-items">Sports</li>
          <li className="list-items">Tech</li>
          <li className="list-items">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-items">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <FontAwesomeIcon className="sidebar-icon" icon={faSquareFacebook} />
          <FontAwesomeIcon className="sidebar-icon" icon={faSquareInstagram} />
          <FontAwesomeIcon className="sidebar-icon" icon={faSquarePinterest} />
          <FontAwesomeIcon className="sidebar-icon" icon={faSquareTwitter} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
