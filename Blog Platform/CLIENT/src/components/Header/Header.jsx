import "./Header.css";

import CoverImage from "../../assets/cover-image.jpg";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <span>Blog Platform</span>
      </div>
      <img
        src={CoverImage} alt=""
      />
    </div>
  );
}

export default Header;
