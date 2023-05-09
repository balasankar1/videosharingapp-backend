import express from "express";
import { verifyToken } from "../verifytoken.js";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  random,
  trend,
  sub,
} from "../controllers/video.js";
const router = express.Router();

router.get("/find/:id", getVideo);
router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verifyToken, sub);
router.get("/tags", sub);
router.get("/search", sub);

export default router;
