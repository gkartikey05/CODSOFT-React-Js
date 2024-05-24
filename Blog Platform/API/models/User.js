import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (value) {
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
        },
        message: "Please enter a valid email address",
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      select: false, // to hide the password from the response
      validate: {
        validator: function (value) {
          return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
        },
        message:
          "Password must be at least 8 characters long and contain at least one letter and one number",
      },
    },
    profilePic: {
      type: String,
      default: "",
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  // Hash the password before saving it to the database
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hashSync(this.password, 10);
  this.confirmPassword = undefined;
});

UserSchema.methods = {
  generateJWTToken: async function () {
    return await jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
  },
  
  generatePasswordResetToken: async function () {
    const resetToken = await crypto.randomBytes(20).toString("hex");

    this.forgotPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    
    this.forgotPasswordExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes from now

    return resetToken;
  },
};

const User = model("User", UserSchema);

export default User;
