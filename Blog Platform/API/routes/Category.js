import { Router } from "express";
import { getCategory, newCategory } from "../controllers/categoryController.js";
const router = Router();

router.post("/add-category", newCategory);

router.get("/get-category", getCategory);

export default router;
