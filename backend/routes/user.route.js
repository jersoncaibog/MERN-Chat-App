import express from 'express';

import { createUser, updateUser, fetchUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', createUser)
router.get('/:id', fetchUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;