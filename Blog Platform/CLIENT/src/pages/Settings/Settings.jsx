import "./Settings.css";

import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PostImage from "../../assets/post-image.jpg";
import SideBar from "../../components/SideBar/SideBar";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={PostImage} alt="" />
            <label htmlFor="fileInput">
              <FontAwesomeIcon className="settingsPPIcon" icon={faCircleUser} />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Kartik" />
          <label>Email</label>
          <input type="email" placeholder="kartik@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

export default Settings;
