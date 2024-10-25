import pool from "../config/database";
import { FamilyMember } from "../types/familyCircleTypes";

// Function to create a new family member
export const createFamilyMember = async (
  userId: string,
  data: Partial<FamilyMember>
): Promise<FamilyMember | null> => {
  const { name, email, phone_number, relationship } = data;

  const result = await pool.query(
    `INSERT INTO familyCircle (user_id, name, email, phone_number, relationship)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [userId, name, email, phone_number, relationship]
  );

  return result.rows[0] || null;
};

// Function to get all family members by user ID
export const getFamilyMembersByUserId = async (
  userId: string
): Promise<FamilyMember[]> => {
  const result = await pool.query(
    `SELECT * FROM familyCircle WHERE user_id = $1 ORDER BY created_at DESC`,
    [userId]
  );

  return result.rows;
};

// Function to update a family member
export const updateFamilyMember = async (
  id: string,
  data: Partial<FamilyMember>
): Promise<FamilyMember | null> => {
  const { name, email, phone_number, relationship } = data;

  const result = await pool.query(
    `UPDATE familyCircle
     SET name = COALESCE($1, name),
         email = COALESCE($2, email),
         phone_number = COALESCE($3, phone_number),
         relationship = COALESCE($4, relationship),
         updated_at = NOW()
     WHERE id = $5
     RETURNING *`,
    [name, email, phone_number, relationship, id]
  );

  return result.rows[0] || null;
};

// Function to delete a family member
export const deleteFamilyMember = async (id: string): Promise<boolean> => {
  const result = await pool.query(`DELETE FROM familyCircle WHERE id = $1`, [
    id,
  ]);

  return result.rowCount ? result.rowCount > 0 : false;
};
