import { Router } from 'express';
import { verifyIdentity } from '../controllers/auth.controller.js';

const router = Router();

router.post('/verification/start', verifyIdentity);

export default router;
