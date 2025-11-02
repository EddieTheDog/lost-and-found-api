import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import claimRoutes from './routes/claims.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/claims', claimRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
