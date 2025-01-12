import express from 'express';

import { createUser, deleteUser, fetchUser, loginUser, logoutUser, refreshAccessToken, updateUser } from '../controllers/user.controller.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createUser)
router.post('/login', loginUser)
router.get('/:username', fetchUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/refresh-token', refreshAccessToken)
router.post('/logout', logoutUser)

// Example protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ success: true, message: 'Protected route accessed' });
});

export default router;