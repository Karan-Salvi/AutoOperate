import express from "express";
import { joinWaitlist } from "../controllers/waitlist.controller.js";

const router = express.Router();

router.post("/join", joinWaitlist);

export default router;
