import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import usermiddleware from "../middleware/user.middleware.js";

const router = express.Router();

router.get("/:id", usermiddleware, getMessage);
router.post("/send/:id", usermiddleware, sendMessage);

export default router;