import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = 8800;
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, console.log(`app listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
