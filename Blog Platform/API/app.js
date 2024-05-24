import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/Auth.js";
import userRoutes from './routes/User.js'
import postRoutes from './routes/Post.js'
import categoryRoutes from './routes/Category.js'

// ENV config
import { config } from "dotenv";
config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    Credential: true,
  })
);

// Route of models
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/category", categoryRoutes);

app.all("*", (req, res) => {
  res.status(404).send("OOPS! 404 page not found");
});

export default app;
