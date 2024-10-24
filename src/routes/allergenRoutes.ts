import express from "express";
import * as allergenController from "../controllers/allergenController";

const router = express.Router();

router.get("/", allergenController.getAllAllergens);
router.get("/:id", allergenController.getAllergenById);
// Add routes for create, update, delete...

export default router;
