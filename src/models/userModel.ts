import pool from "../config/database";
import { User } from "../types/userTypes";

// Create a new user
export const createUser = async (data: Partial<User>): Promise<User> => {
  const {
    username,
    password,
    photo_url,
    email,
    phone_number,
    is_child = false,
    emergency_contact_name,
    emergency_contact_email,
  } = data;

  const result = await pool.query(
    `INSERT INTO users (username, password, photo_url, email, phone_number, is_child, emergency_contact_name, emergency_contact_email, created_at, updated_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW()) RETURNING *`,
    [
      username,
      password,
      photo_url,
      email,
      phone_number,
      is_child,
      emergency_contact_name,
      emergency_contact_email,
    ]
  );

  return result.rows[0];
};

// Find a user by username
export const findUserByUsername = async (
  username: string
): Promise<User | null> => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0] || null;
};

// Find a user by ID
export const findUserById = async (id: string): Promise<User | null> => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0] || null;
};

// Update user information
export const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<User | null> => {
  const {
    username,
    password,
    photo_url,
    email,
    phone_number,
    is_child,
    emergency_contact_name,
    emergency_contact_email,
  } = data;

  const result = await pool.query(
    `UPDATE users
     SET username = COALESCE($1, username),
         password = COALESCE($2, password),
         photo_url = COALESCE($3, photo_url),
         email = COALESCE($4, email),
         phone_number = COALESCE($5, phone_number),
         is_child = COALESCE($6, is_child),
         emergency_contact_name = COALESCE($7, emergency_contact_name),
         emergency_contact_email = COALESCE($8, emergency_contact_email),
         updated_at = NOW()
     WHERE id = $9
     RETURNING *`,
    [
      username,
      password,
      photo_url,
      email,
      phone_number,
      is_child,
      emergency_contact_name,
      emergency_contact_email,
      id,
    ]
  );

  return result.rows[0] || null;
};

// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
};
