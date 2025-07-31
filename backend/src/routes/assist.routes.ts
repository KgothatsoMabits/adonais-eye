import express from "express";
import { createAssistanceRequest, getAllRequests } from "../controllers/assist.controller";

const router = express.Router();

router.post("/", createAssistanceRequest);
router.get("/", getAllRequests);

export default router;

