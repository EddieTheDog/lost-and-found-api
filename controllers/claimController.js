import QRCode from "qrcode";
import { addClaim, findClaimById, getClaims } from "../models/claimModel.js";

export const createClaim = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Name and email required" });

    const id = await addClaim({ name, email });
    const qr = await QRCode.toDataURL(`https://your-frontend-url.com/claim/${id}`);

    res.json({ id, qr, status: "open" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClaim = async (req, res) => {
  try {
    const claim = await findClaimById(req.params.id);
    if (!claim) return res.status(404).json({ error: "Claim not found" });
    res.json(claim);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllClaims = async (req, res) => {
  try {
    const claims = await getClaims();
    res.json(claims);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
