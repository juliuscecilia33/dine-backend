import express from "express";
import * as userController from "../controllers/userController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

// User registration route
router.post("/register", userController.register);

// User login route
router.post("/login", userController.login);

// Update user route (protected by authentication middleware)
router.put("/:id", authenticateToken, userController.updateUser);

// Delete user route (protected by authentication middleware)
router.delete("/:id", authenticateToken, userController.deleteUser);

export default router;
