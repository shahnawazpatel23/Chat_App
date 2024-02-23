import express from "express";
import usermiddleware from "../middleware/user.middleware.js";
import { getUsersForSidebar } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", usermiddleware, getUsersForSidebar);

export default router;