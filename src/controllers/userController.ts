import { Request, Response } from "express";
import * as userService from "../services/userService";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// User registration
export const register = async (req: Request, res: Response) => {
  try {
    const newUser = await userService.registerUser(req.body);
    const {
      id,
      username,
      photo_url,
      email,
      phone_number,
      is_child,
      emergency_contact_name,
      emergency_contact_email,
      created_at,
      updated_at,
    } = newUser;

    res.status(201).json({
      id,
      username,
      photo_url,
      email,
      phone_number,
      is_child,
      emergency_contact_name,
      emergency_contact_email,
      created_at,
      updated_at,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
};

// User login
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await userService.authenticateUser(username, password);

    if (user) {
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24h" });
      res.status(200).json({
        token,
        user: {
          id: user.id,
          username: user.username,
          photo_url: user.photo_url,
          email: user.email,
          phone_number: user.phone_number,
          is_child: user.is_child,
          emergency_contact_name: user.emergency_contact_name,
          emergency_contact_email: user.emergency_contact_email,
        },
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to authenticate user" });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser = await userService.updateUser(id, req.body);

    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
