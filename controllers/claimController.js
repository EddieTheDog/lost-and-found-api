import QRCode from 'qrcode';
import { addClaim, findClaimById } from '../models/claimModel.js';

// Create a new claim
export const createClaim = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

    const id = await addClaim({ name, email });
    const qr = await QRCode.toDataURL(`https://yourfrontend.com/claim/${id}`);

    res.json({ id, qr, status: 'open' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a claim by ID
export const getClaim = async (req, res) => {
  try {
    const claim = await findClaimById(req.params.id);
    if (!claim) return res.status(404).json({ error: 'Claim not found' });
    res.json(claim);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
