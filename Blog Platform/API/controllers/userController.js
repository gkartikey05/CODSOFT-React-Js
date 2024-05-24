import User from "../models/User.js";
import Post from "../models/Post.js";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

// USER PROFILE
const profile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User profile retrieved successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// LOGOUT USER
const logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      secure: true,
      httpOnly: true,
      maxAge: 1,
    });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// FORGOT PASSWORD
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(422).json({ message: "Email is required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = await user.generatePasswordResetToken();
    await user.save();

    const resetPasswordUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    console.log(resetPasswordUrl);
    const message = `Click the link below to reset your password: ${resetPasswordUrl}`;
    const subject = "Password Reset";

    try {
      await sendEmail(email, subject, message);
      res.status(200).json({ message: `Email sent successfully to ${email}` });
    } catch (error) {
      user.forgotPasswordToken = undefined;
      user.forgotPasswordExpiry = undefined;
      await user.save();

      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(501).json(error);
  }
};

// RESET PASSWORD
const resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  if (!password) {
    return res.status(422).json({ message: "Password is required" });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .json({ message: "Password must be at least 8 characters" });
  }
  if (password.length > 20) {
    return res
      .status(400)
      .json({ message: "Password must be less than 20 characters" });
  }
  if (!resetToken) {
    return res.status(400).json({ message: "Invalid reset token" });
  }

  const forgotPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const user = await User.findOne({
    forgotPasswordToken,
    forgotPasswordExpiry: { $gt: Date.now() },
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid reset token" });
  }
  user.password = password;
  user.forgotPasswordToken = undefined;
  user.forgotPasswordExpiry = undefined;
  user.save();

  res.status(200).json({ message: "Password reset successfully" });
};

// CHANGE PASSWORD
const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user;

  if (!oldPassword || !newPassword) {
    return res.status(422).json({ message: "All fields are required" });
  }

  const user = await User.findById(id).select("+password");
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  user.password = newPassword;
  await user.save();
  user.password = undefined;

  res.status(200).json({ message: "Password changed successfully" });
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "User updated successfully",
      updatedUser,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    await Post.deleteMany({ username: user.username });
    await User.findByIdAndDelete(user);
    res.status(200).json("User has been deleted");
  } catch (error) {
    return res.status(404).json("User not found!");
  }
};

export {
  profile,
  logout,
  forgotPassword,
  resetPassword,
  changePassword,
  updateUser,
  deleteUser,
};
