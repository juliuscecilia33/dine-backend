import pool from "../../config/database";
import { StandardCard } from "../../types/cards/standardCardTypes";

// Get all standard cards by user
export const getAllStandardCardsByUser = async (
  id: string
): Promise<StandardCard | null> => {
  const result = await pool.query("SELECT * FROM standard_card WHERE id = $1", [
    id,
  ]);
  return result.rows[0] || null;
};
