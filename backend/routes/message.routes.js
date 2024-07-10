import express from "express";
import { getMessage,sendMessage } from "../controller/message.countroller.js";
import protectRouter from "../middleware/protect.middleware.js";

const router = express.Router()

router.get("/:id",protectRouter,getMessage)
router.post("/send/:id",protectRouter,sendMessage)

export default router; 

