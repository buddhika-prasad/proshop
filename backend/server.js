import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

const app = express();

connectDB(); // ✅ Connect to the database

app.get("/", (req, res) => {
  res.send("API is running");
}); // ✅ Correctly closed here

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound); // ✅ Use the notFound middleware
app.use(errorHandler); // ✅ Use the errorHandler middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});