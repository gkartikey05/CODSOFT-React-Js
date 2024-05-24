import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title : {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 50
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
