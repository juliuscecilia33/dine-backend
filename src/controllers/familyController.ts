import { Request, Response } from "express";
import * as familyCircleService from "../services/familyService";

// Create a new family relationship
export const createFamilyRelationship = async (req: Request, res: Response) => {
  try {
    const { userId, relatedUserId, relationship } = req.body;
    const newFamily = await familyCircleService.createFamilyRelationship(
      userId,
      relatedUserId,
      relationship
    );

    if (newFamily) {
      res.status(201).json(newFamily);
    } else {
      res.status(400).json({ error: "Failed to create family relationship" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Failed to create a new family relationship",
      error: error,
    });
  }
};

// Get family members related to a user
export const getFamilyByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const family = await familyCircleService.getFamilyByUserId(userId);
    res.status(200).json(family);
  } catch (error) {
    res.status(500).json({
      msg: "Failed to get family members",
      error: error,
    });
  }
};

// Update a family relationship
export const updateFamilyRelationship = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { relationship } = req.body;

    const updatedFamily = await familyCircleService.updateFamilyRelationship(
      id,
      relationship
    );

    if (updatedFamily) {
      res.status(200).json(updatedFamily);
    } else {
      res.status(404).json({ error: "Family relationship not found" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Failed to update family relationship",
      error: error,
    });
  }
};

// Delete a family relationship
export const deleteFamilyRelationship = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await familyCircleService.deleteFamilyRelationship(id);

    if (deleted) {
      res
        .status(200)
        .json({ message: "Family relationship deleted successfully" });
    } else {
      res.status(404).json({ error: "Family relationship not found" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Failed to delete family relationship",
      error: error,
    });
  }
};
