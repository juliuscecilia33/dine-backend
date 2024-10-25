import { Request, Response } from "express";
import * as familyService from "../services/familyService";

// Controller to add a new family member
export const addFamilyMember = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const newMember = await familyService.addFamilyMember(userId, req.body);

    if (newMember) {
      res.status(201).json(newMember);
    } else {
      res.status(400).json({ error: "Failed to add family member" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get family members by user ID
export const getFamilyMembers = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const familyMembers = await familyService.getFamilyMembers(userId);

    res.status(200).json(familyMembers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to update a family member
export const updateFamilyMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedMember = await familyService.updateFamilyMember(id, req.body);

    if (updatedMember) {
      res.status(200).json(updatedMember);
    } else {
      res.status(404).json({ error: "Family member not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update family member" });
  }
};

// Controller to delete a family member
export const deleteFamilyMember = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await familyService.deleteFamilyMember(id);

    if (deleted) {
      res.status(200).json({ message: "Family member deleted successfully" });
    } else {
      res.status(404).json({ error: "Family member not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete family member" });
  }
};
