import { Router } from "express";
const router = Router();

import {
  changePassword,
  deleteUser,
  forgotPassword,
  logout,
  profile,
  resetPassword,
  updateUser,
} from "../controllers/userController.js";
import isLoggedIn from "../middleware/authMiddleware.js";

// USER PROFILE
router.get("/profile", isLoggedIn, profile);

// LOGOUT
router.get("/logout", logout);

// FORGOT PASSWORD
router.post("/reset", forgotPassword);

// RESET PASSWORD
router.post("/reset/:resetToken", resetPassword);

// CHANGE PASSWORD
router.post("/change-password", isLoggedIn, changePassword);

// UPDATE USER
router.put("/update", isLoggedIn, updateUser);

// DELETE USER
router.delete("/delete", isLoggedIn, deleteUser);

export default router;