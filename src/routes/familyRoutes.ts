import express from "express";
import * as familyController from "../controllers/familyController";

const router = express.Router();

// TODO: Need to add another user id, for the user themselves,
// and the user they have a relationship with
// Add a new family member for a specific user
router.post("/user/:userId", familyController.createFamilyRelationship);

// Get all family members for a specific user
router.get("/user/:userId", familyController.getFamilyByUserId);

// Update a specific family member
router.put("/:id", familyController.updateFamilyRelationship);

// Delete a specific family member
router.delete("/:id", familyController.deleteFamilyRelationship);

// TODO: Add a route to approve a family member

export default router;
