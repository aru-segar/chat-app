import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUsersForSidebar } from '../controllers/message.controller.js';
import { getMessages } from '../controllers/message.controller.js';
import { sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/user/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;
