import pool from "../../config/database";
import { StandardCard } from "../../types/cards/standardCardTypes";

// Get all standard cards by user
export const getAllStandardCardsByUser = async (
  user_id: string
): Promise<StandardCard[]> => {
  const result = await pool.query(
    "SELECT * FROM standard_card WHERE user_id = $1",
    [user_id]
  );
  return result.rows;
};

// Get a specific standard card by user and card id
export const getStandardCardByUserAndCardID = async (
  id: string,
  user_id: string
): Promise<StandardCard | null> => {
  const result = await pool.query(
    "SELECT * FROM standard_card WHERE id = $1 and user_id = $2",
    [id, user_id]
  );
  return result.rows[0] || null;
};

// Create a standard card
export const createStandardCard = async (
  data: Partial<StandardCard>
): Promise<StandardCard> => {
  const { user_id, description, notes, shared_with } = data;

  const result = await pool.query(
    `INSERT INTO standard_card (user_id, description, notes, shared_with)
     VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *`,
    [user_id, description, notes, shared_with]
  );

  return result.rows[0];
};

// Update an existing standrad card
export const updateStandardCard = async (
  id: string,
  data: Partial<StandardCard>
): Promise<StandardCard | null> => {
  const { description, notes, shared_with } = data;
  const result = await pool.query(
    `UPDATE standard_card SET description = $1, snotes = $2, shared_with = $3, updated_at = NOW()
     WHERE id = $4 RETURNING *`,
    [description, notes, shared_with, id]
  );
  return result.rows[0] || null;
};

// Delete a standard card
export const deleteStandardCard = async (id: string): Promise<boolean> => {
  const result = await pool.query("DELETE FROM standard_card WHERE id = $1", [
    id,
  ]);
  return result.rowCount ? result.rowCount > 0 : false;
};
