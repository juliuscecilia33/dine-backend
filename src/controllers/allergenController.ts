import { Request, Response } from "express";
import * as allergenService from "../services/allergenService";

// Get all allergens
export const getAllAllergens = async (req: Request, res: Response) => {
  try {
    const allergens = await allergenService.getAllAllergens();
    res.status(200).json(allergens);
  } catch (error) {
    res.status(500).json({
      msg: "Failed to retrieve allergens",
      error: error,
    });
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
    res.status(500).json({
      msg: "Failed to retrieve allergen",
      error: error,
    });
  }
};

// Create a new allergen
export const createAllergen = async (req: Request, res: Response) => {
  try {
    const newAllergen = await allergenService.createAllergen(req.body);
    res.status(201).json(newAllergen);
  } catch (error) {
    res.status(500).json({
      msg: "Failed to create allergen",
      error: error,
    });
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
    res.status(500).json({
      msg: "Failed to update allergen",
      error: error,
    });
  }
};

// Delete an allergen
export const deleteAllergen = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await allergenService.deleteAllergen(id);
    if (deleted) {
      res.status(200).json({ msg: "Successfully deleted Allergen" }); // No content on successful delete
    } else {
      res.status(404).json({ error: "Allergen not found" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Failed to delete allergen",
      error: error,
    });
  }
};
