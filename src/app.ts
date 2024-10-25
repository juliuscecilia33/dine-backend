import express from "express";
import allergenRoutes from "./routes/allergenRoutes";
import userRoutes from "./routes/userRoutes";
import familyRoutes from "./routes/familyRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
// TODO: Add name for users table
app.use("/api/users", userRoutes);
app.use("/api/allergens", allergenRoutes);
app.use("/api/family", familyRoutes);

export default app;
