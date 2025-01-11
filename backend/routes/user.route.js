import express from 'express';

import { createUser, updateUser, fetchUser, deleteUser, refreshAccessToken, logoutUser } from '../controllers/user.controller.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createUser)
router.get('/:id', fetchUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/refresh-token', refreshAccessToken)
router.post('/logout', logoutUser)

// Example protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ success: true, message: 'Protected route accessed' });
});

export default router;