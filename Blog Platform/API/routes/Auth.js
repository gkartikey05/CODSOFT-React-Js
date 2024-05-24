import { Router } from "express";
const router = Router();

import {
  login,
  register,
} from "../controllers/authController.js";

// REGISTER
router.post("/register", register);

// LOGIN
router.post("/login", login);

export default router;
