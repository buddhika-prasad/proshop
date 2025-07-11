import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ Middleware to parse URL-encoded request bodies

app.use(cookieParser()); // ✅ Middleware to parse cookies
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
