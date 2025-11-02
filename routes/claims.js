import express from "express";
import { createClaim, getClaim, getAllClaims } from "../controllers/claimController.js";

const router = express.Router();

router.post("/", createClaim);
router.get("/:id", getClaim);
router.get("/", getAllClaims);

export default router;
