import express from "express";

const router = express.Router();

import { signup, login, logout } from "../controllers/auth.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", verifyJWT, logout);
// router.post("/refresh-accessToken",refreshAccessToken);

import { getUserDataById } from "../controllers/auth.js";
router.get("/user/:userId", getUserDataById);
// Export router
export default router; // ES6 syntax
