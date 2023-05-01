import User from "../models/User.js";
import { createError } from "../error.js";
export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (e) {
      next(e);
    }
  } else {
    return next(createError(403, "You can only update your user"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
    } catch (e) {
      next(e);
    }
  } else {
    return next(createError(403, "You can only delete your user"));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const subscribe = (req, res, next) => {
  console.log("working");
};
export const unsubscribe = (req, res, next) => {
  console.log("working");
};
export const like = (req, res, next) => {
  console.log("working");
};

export const dislike = (req, res, next) => {
  console.log("working");
};
