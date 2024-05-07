import "./Single.css";

import SideBar from "../../components/SideBar/SideBar";
import SinglePost from "../../components/SinglePost/SinglePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
}

export default Single;
