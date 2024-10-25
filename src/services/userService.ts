import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../types/userTypes";
import * as userModel from "../models/userModel";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Register a new user with hashed password
export const registerUser = async (data: Partial<User>): Promise<User> => {
  // Hash the password before saving
  if (!data.password) {
    throw new Error("Password is required");
  }

  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  // Create the user in the database
  const newUser = await userModel.createUser({
    ...data,
    password: hashedPassword,
  });

  return newUser;
};

// Authenticate a user with username and password
export const authenticateUser = async (
  username: string,
  password: string
): Promise<User | null> => {
  const user = await userModel.findUserByUsername(username);

  if (user) {
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return user;
    }
  }

  return null;
};

// Get user by ID
export const getUserById = async (id: string): Promise<User | null> => {
  const user = await userModel.findUserById(id);
  return user;
};

// Update user information
export const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<User | null> => {
  // If there's a new password, hash it before updating
  if (data.password) {
    data.password = await bcrypt.hash(data.password, SALT_ROUNDS);
  }

  const updatedUser = await userModel.updateUser(id, data);
  return updatedUser;
};

// Delete user by ID
export const deleteUser = async (id: string): Promise<void> => {
  await userModel.deleteUser(id);
};
