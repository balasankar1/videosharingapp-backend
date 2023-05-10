import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";
import { verifyToken } from "../verifytoken.js";
const router = express.Router();

router.post("/", verifyToken, addComment);
router.delete("/deletecomment", verifyToken, deleteComment);
router.get("/:videoId", getComments);

export default router;
