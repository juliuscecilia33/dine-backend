import * as allergenModel from "../models/allergenModel";
import { Allergen } from "../types/allergenTypes";

// Get all allergens
export const getAllAllergens = async (): Promise<Allergen[]> => {
  return await allergenModel.getAllAllergens();
};

// Get a specific allergen by ID
export const getAllergenById = async (id: string): Promise<Allergen | null> => {
  return await allergenModel.getAllergenById(id);
};

// Create a new allergen
export const createAllergen = async (
  data: Partial<Allergen>
): Promise<Allergen> => {
  return await allergenModel.createAllergen(data);
};

// Update an existing allergen
export const updateAllergen = async (
  id: string,
  data: Partial<Allergen>
): Promise<Allergen | null> => {
  return await allergenModel.updateAllergen(id, data);
};

// Delete an allergen
export const deleteAllergen = async (id: string): Promise<boolean> => {
  return await allergenModel.deleteAllergen(id);
};
