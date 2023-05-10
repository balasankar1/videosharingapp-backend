import Video from "../models/Video.js";
import Comment from "../models/Comment.js";
import { createError } from "../error.js";
export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const cid = req.query.cid;
    const vid = req.query.vid;
    const comment = await Comment.findById(cid);
    const video = await Video.findById(vid);
    if (req.user.id === comment.userId) {
      await Comment.findByIdAndDelete(cid);
      res.status(200).json("the comment is deleted");
    } else if (req.user.id === video.userId) {
      await Comment.findByIdAndDelete(cid);
    } else {
      next(createError(403, "You can only delete your comment"));
    }
  } catch (err) {
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
