import User from "../models/User.js";
import bcrypt from "bcryptjs";

const cookieOptions = {
  expires: new Date(Date.now() + 604800000),
  httpOnly: true,
  secure: true,
};

// REGISTER
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(422).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    if (!newUser) {
      return res
        .status(503)
        .json({ message: "Something went wrong,please try again" });
    }

    const user = await newUser.save();
    user.password = undefined;

    const token = await user.generateJWTToken();
    res.cookie("token", token, cookieOptions);

    // Save the user to the database
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    user.password = undefined;
    const token = await user.generateJWTToken();
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { register, login };
