import express from 'express';
import { getFooter } from '../controller/footer.js';

const router = express.Router();

router.get('/', getFooter);

export default router;