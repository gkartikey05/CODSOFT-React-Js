import Category from "../models/Category.js";

const newCategory = async (req, res) => {
  const category = await Category(req.body);
  try {
    const savedCat = await category.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { newCategory, getCategory };
