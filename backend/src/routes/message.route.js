import express from 'express';
import { protectRoute } from '../middleware/auth.middleware';
import { getUsersForSidebar } from '../controllers/user.controller';
import { getMessages } from '../controllers/message.controller';

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/user/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;
