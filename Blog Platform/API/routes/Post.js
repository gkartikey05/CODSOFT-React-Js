import { Router } from "express";
const router = Router();

import {
  createPost,
  deletePost,
  getAllPost,
  getPost,
  updatePost,
} from "../controllers/postController.js";

// CREATE POST
router.post("/create-post", createPost);

// GET POST
router.get("/get-post/:id", getPost);

// GET ALL POST
router.get("/get-all-post", getAllPost);

// UPDATE POST
router.put("/update/:id", updatePost);

// DELETE POST
router.delete("/delete/:id", deletePost);

export default router;
