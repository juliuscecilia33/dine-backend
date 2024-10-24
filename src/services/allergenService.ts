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

// More service methods for create, update, and delete...
