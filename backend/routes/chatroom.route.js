import express from 'express';

import { createChatRoom, deleteChatRoom, fetchChatRoom, updateChatRoom } from '../controllers/chatroom.controller.js';

const router = express.Router();

router.get('/:id', fetchChatRoom)
router.put('/:id', updateChatRoom)
router.post('/', createChatRoom)
router.delete('/:id', deleteChatRoom)

export default router;