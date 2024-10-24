import pool from "../config/database";
import { Allergen } from "../types/allergenTypes";

// Example function to get all allergens
export const getAllAllergens = async (): Promise<Allergen[]> => {
  const result = await pool.query("SELECT * FROM allergen");
  return result.rows;
};

// Example function to get a specific allergen by ID
export const getAllergenById = async (id: string): Promise<Allergen | null> => {
  const result = await pool.query("SELECT * FROM allergen WHERE id = $1", [id]);
  return result.rows[0] || null;
};
