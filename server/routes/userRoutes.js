import express from "express";
import User from "../models/User.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all users
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Block / unblock user
router.put("/:id/block", protect, adminOnly, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.isBlocked = !user.isBlocked;

    await user.save();

    res.json({
      message: user.isBlocked
        ? "User blocked successfully"
        : "User unblocked successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        isBlocked: user.isBlocked,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;