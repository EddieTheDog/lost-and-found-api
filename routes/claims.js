import express from 'express';
import { createClaim, getClaim } from '../controllers/claimController.js';

const router = express.Router();

// Create a new claim
router.post('/', createClaim);

// Get a claim by ID
router.get('/:id', getClaim);

export default router;
