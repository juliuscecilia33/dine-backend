import pool from "../config/database";
import { FamilyCircle } from "../types/familyCircleTypes";

// Create a new family relationship
export const createFamilyRelationship = async (
  userId: string,
  relatedUserId: string,
  relationship: string
): Promise<FamilyCircle | null> => {
  const result = await pool.query(
    `INSERT INTO familyCircle (user_id, related_user_id, relationship)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [userId, relatedUserId, relationship]
  );
  return result.rows[0] || null;
};

// Get all family members related to a user
export const getFamilyByUserId = async (
  userId: string
): Promise<FamilyCircle[]> => {
  const result = await pool.query(
    `SELECT * FROM familyCircle WHERE related_user_id = $1`,
    [userId]
  );
  return result.rows;
};

// Update a family relationship
export const updateFamilyRelationship = async (
  id: string,
  relationship: string
): Promise<FamilyCircle | null> => {
  const result = await pool.query(
    `UPDATE familyCircle
     SET relationship = COALESCE($1, relationship), updated_at = NOW()
     WHERE id = $2
     RETURNING *`,
    [relationship, id]
  );
  return result.rows[0] || null;
};

// Delete a family relationship
export const deleteFamilyRelationship = async (
  id: string
): Promise<boolean> => {
  const result = await pool.query(`DELETE FROM familyCircle WHERE id = $1`, [
    id,
  ]);
  return result.rowCount ? result.rowCount > 0 : false;
};
