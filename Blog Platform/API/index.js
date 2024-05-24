import mongoose from "mongoose";
import app from "./app.js";
import { config } from "dotenv";
import multer from "multer";
config();

mongoose.set("strictQuery", false);
const connectionToDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    if (connection) {
      console.log(`Connected to MongoDB: ${connection.host}`);
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectionToDB();
  console.log(`App is running at http:localhost:${PORT}`);
});
