import { Router, Request, Response } from "express";
import db from "./db";

const router = Router();

// Test route
router.get("/", (req: Request, res: Response) => {
  res.send("Backend is working with TypeScript!");
});

// Example route to fetch all allergies from the database
router.get("/allergen", async (req: Request, res: Response) => {
  try {
    const allergies = await db.any("SELECT * FROM allergen");
    res.json(allergies);
  } catch (error) {
    console.log("Error getting allergen: ", error);
    res.status(500).send("Error fetching allergies");
  }
});

export default router;
