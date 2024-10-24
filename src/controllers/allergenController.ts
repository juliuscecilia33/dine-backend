import { Request, Response } from "express";
import * as allergenService from "../services/allergenService";

// Get all allergens
export const getAllAllergens = async (req: Request, res: Response) => {
  try {
    const allergens = await allergenService.getAllAllergens();
    res.status(200).json(allergens);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve allergens" });
  }
};

// Get a specific allergen by ID
export const getAllergenById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const allergen = await allergenService.getAllergenById(id);
    if (allergen) {
      res.status(200).json(allergen);
    } else {
      res.status(404).json({ error: "Allergen not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve allergen" });
  }
};

// Create a new allergen
export const createAllergen = async (req: Request, res: Response) => {
  try {
    const newAllergen = await allergenService.createAllergen(req.body);
    res.status(201).json(newAllergen);
  } catch (error) {
    res.status(500).json({ error: "Failed to create allergen" });
  }
};

// Update an existing allergen
export const updateAllergen = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedAllergen = await allergenService.updateAllergen(id, req.body);
    if (updatedAllergen) {
      res.status(200).json(updatedAllergen);
    } else {
      res.status(404).json({ error: "Allergen not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update allergen" });
  }
};

// Delete an allergen
export const deleteAllergen = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await allergenService.deleteAllergen(id);
    if (deleted) {
      res.status(204).send(); // No content on successful delete
    } else {
      res.status(404).json({ error: "Allergen not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete allergen" });
  }
};
