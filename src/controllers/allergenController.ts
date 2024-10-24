import { Request, Response } from "express";
import * as allergenService from "../services/allergenService";

// Get all allergens
export const getAllAllergens = async (req: Request, res: Response) => {
  try {
    const allergens = await allergenService.getAllAllergens();
    console.log("allergens: ", allergens);
    res.status(200).json(allergens);
  } catch (error) {
    console.log("error", error);
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

// More controller methods for create, update, and delete...
