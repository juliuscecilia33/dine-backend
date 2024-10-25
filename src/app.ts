import express from "express";
import allergenRoutes from "./routes/allergenRoutes";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/allergens", allergenRoutes);
// Add other routes, like users and allergy cards...

export default app;
