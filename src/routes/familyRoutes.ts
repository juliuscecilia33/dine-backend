import express from "express";
import * as familyController from "../controllers/familyController";

const router = express.Router();

// Add a new family member for a specific user
router.post("/user/:userId", familyController.addFamilyMember);

// Get all family members for a specific user
router.get("/user/:userId", familyController.getFamilyMembers);

// Update a specific family member
router.put("/:id", familyController.updateFamilyMember);

// Delete a specific family member
router.delete("/:id", familyController.deleteFamilyMember);

export default router;
