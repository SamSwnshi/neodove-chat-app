import express from "express";

import protectRouter from "../middleware/protect.middleware.js";
import { getUserForSideBar } from "../controller/user.controller.js";
const router = express.Router();

router.get("/",protectRouter,getUserForSideBar)

export default router;