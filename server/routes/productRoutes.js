import express from "express";
import Product from "../models/Product.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// ==========================================
// GET ALL PRODUCTS - PUBLIC
// ==========================================
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==========================================
// GET SINGLE PRODUCT - PUBLIC
// ==========================================
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==========================================
// CREATE PRODUCT - ADMIN ONLY
// ==========================================
router.post("/", protect, adminOnly, async (req, res) => {
  try {
    const {
      name,
      price,
      category,
      description,
      image,
      stock,
    } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        message: "Name, price and category are required",
      });
    }

    const product = await Product.create({
      name,
      price,
      category,
      description,
      image,
      stock,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==========================================
// UPDATE PRODUCT - ADMIN ONLY
// ==========================================
router.put("/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const {
      name,
      price,
      category,
      description,
      image,
      stock,
    } = req.body;

    product.name = name;
    product.price = price;
    product.category = category;
    product.description = description;
    product.image = image;
    product.stock = stock;

    await product.save();

    res.json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ==========================================
// DELETE PRODUCT - ADMIN ONLY
// ==========================================
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;