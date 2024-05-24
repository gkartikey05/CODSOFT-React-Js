import Post from "../models/Post.js";

// CREATE POST
const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot create post",
    });
  }
};

// GET POST
const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({
      message: "Post retrieved successfully",
      post,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET ALL POSTS
const getAllPost = async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json({
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// UPDATE POST
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          postId,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json({
          message: "Post updated successfully",
          updatedPost,
        });
      } catch (error) {
        return res.status(500).json(error);
      }
    } else {
      return res.status(401).json("You can update only your post!");
    }
  } catch (error) {
    return res.status(404).json("Something went wrong, please try again");
  }
};

// DELETE POST
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted");
      } catch (error) {
        return res.status(500).json("Something went wrong, please try again");
      }
    } else {
      return res.status(401).json("You can delete only your post!");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

export { createPost, getPost, getAllPost, updatePost, deletePost };
