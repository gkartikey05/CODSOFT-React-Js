import "./Post.css";

import PostImage from "../../assets/post-image.jpg";

function Post() {
  return (
    <div className="post">
      <img className="" src={PostImage} alt="" />
      <div className="post-info">
        <div className="post-cat">
          <span>Music</span>
          <span>Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="post-date">1 hr ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia
        eligendi tenetur minus illo vel repellendus odit neque expedita in
        sapiente nostrum, incidunt voluptatum et! Porro ducimus laboriosam
        sapiente officiis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia
        eligendi tenetur minus illo vel repellendus odit neque expedita in
        sapiente nostrum, incidunt voluptatum et! Porro ducimus laboriosam
        sapiente officiis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia
        eligendi tenetur minus illo vel repellendus odit neque expedita in
        sapiente nostrum, incidunt voluptatum et! Porro ducimus laboriosam
        sapiente officiis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia
        eligendi tenetur minus illo vel repellendus odit neque expedita in
        sapiente nostrum, incidunt voluptatum et! Porro ducimus laboriosam
        sapiente officiis!
      </p>
    </div>
  );
}

export default Post;
