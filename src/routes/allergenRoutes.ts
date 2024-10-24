import express from "express";
import * as allergenController from "../controllers/allergenController";

const router = express.Router();

// GET all allergens
router.get("/", allergenController.getAllAllergens);

// GET a specific allergen by ID
router.get("/:id", allergenController.getAllergenById);

// POST to create a new allergen
router.post("/", allergenController.createAllergen);

// PUT to update an existing allergen
router.put("/:id", allergenController.updateAllergen);

// DELETE to remove an allergen by ID
router.delete("/:id", allergenController.deleteAllergen);

export default router;
