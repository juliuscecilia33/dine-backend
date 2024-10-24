import express from "express";
import allergenRoutes from "./routes/allergenRoutes";
// Import other routes...

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/allergens", allergenRoutes);
// Add other routes, like users and allergy cards...

export default app;
