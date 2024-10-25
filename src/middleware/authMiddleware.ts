import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Middleware to verify JWT token
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Access token is missing or invalid" });
    return; // Exit the function after sending a response
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403).json({ error: "Invalid or expired token" });
      return; // Exit the function after sending a response
    }

    // Attach the decoded user information to the request
    (req as any).user = user;
    next(); // Move to the next middleware or route handler
  });
};
