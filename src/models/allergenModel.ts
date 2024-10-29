import pool from "../config/database";
import { Allergen } from "../types/allergenTypes";

// Get all allergens
export const getAllAllergens = async (): Promise<Allergen[]> => {
  const result = await pool.query("SELECT * FROM allergen");
  return result.rows;
};

// Get a specific allergen by ID
export const getAllergenById = async (id: string): Promise<Allergen | null> => {
  const result = await pool.query("SELECT * FROM allergen WHERE id = $1", [id]);
  return result.rows[0] || null;
};

// TODO: Get user's allergens; im thinking we have a pre-defined bank
// of allergens; and if the user can add a custom one if they can't find theres
// allergens dataset?

// Create a new allergen
export const createAllergen = async (
  data: Partial<Allergen>
): Promise<Allergen> => {
  const { name, severity, description } = data;
  const result = await pool.query(
    `INSERT INTO allergen (name, severity, description, created_at, updated_at)
     VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *`,
    [name, severity, description]
  );
  return result.rows[0];
};

// Update an existing allergen
export const updateAllergen = async (
  id: string,
  data: Partial<Allergen>
): Promise<Allergen | null> => {
  const { name, severity, description } = data;
  const result = await pool.query(
    `UPDATE allergen SET name = $1, severity = $2, description = $3, updated_at = NOW()
     WHERE id = $4 RETURNING *`,
    [name, severity, description, id]
  );
  return result.rows[0] || null;
};

// Delete an allergen
export const deleteAllergen = async (id: string): Promise<boolean> => {
  const result = await pool.query("DELETE FROM allergen WHERE id = $1", [id]);
  return result.rowCount ? result.rowCount > 0 : false;
};
