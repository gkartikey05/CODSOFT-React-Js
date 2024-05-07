import "./SinglePost.css";

import { faPenToSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PostCover from "../../assets/post-image.jpg";

function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img src={PostCover} alt="" className="single-post-img" />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.
          <div className="single-post-edit">
            <FontAwesomeIcon className="single-post-icon" icon={faPenToSquare} />
            <FontAwesomeIcon className="single-post-icon" icon={faTrashAlt} />
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">Author: <b>Kartik</b></span>
          <span className="single-post-date">1 hr ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos nemo sint similique omnis facere quod rem ab aperiam tenetur dolorem culpa vero asperiores, corrupti quae quidem, repudiandae atque consectetur quo magnam quas! Tempore sit dicta suscipit, dolorum voluptate dolore magnam, dolores, harum inventore saepe deserunt labore quod officia ipsam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos nemo sint similique omnis facere quod rem ab aperiam tenetur dolorem culpa vero asperiores, corrupti quae quidem, repudiandae atque consectetur quo magnam quas! Tempore sit dicta suscipit, dolorum voluptate dolore magnam, dolores, harum inventore saepe deserunt labore quod officia ipsam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos nemo sint similique omnis facere quod rem ab aperiam tenetur dolorem culpa vero asperiores, corrupti quae quidem, repudiandae atque consectetur quo magnam quas! Tempore sit dicta suscipit, dolorum voluptate dolore magnam, dolores, harum inventore saepe deserunt labore quod officia ipsam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quos nemo sint similique omnis facere quod rem ab aperiam tenetur dolorem culpa vero asperiores, corrupti quae quidem, repudiandae atque consectetur quo magnam quas! Tempore sit dicta suscipit, dolorum voluptate dolore magnam, dolores, harum inventore saepe deserunt labore quod officia ipsam.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
