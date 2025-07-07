import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
  getUserprofile,
  updateUserProfile,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

import { getUsers } from "../controllers/userController.js";
router.route("/").get(getUsers).post(registerUser);

// Remove .get(getUsers) if getUsers is not defined
router.route("/").post(registerUser);

router.post("/login", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .post(getUserprofile)
  .put(updateUserProfile);

router
  .route("/:id")
  .get(getUserByID)
  .delete(deleteUser)
  .put(updateUser);

export default router;
