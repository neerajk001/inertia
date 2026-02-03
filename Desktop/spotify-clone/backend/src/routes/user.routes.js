import express from 'express';
import { getAllusers, getMessages } from '../controller/user.controller.js';
import { protectedRoute } from '../lib/middleware/auth.middleware.js';


const router = express.Router();

router.get('/',protectedRoute,getAllusers);
router.get('/messages/:userId',protectedRoute,getMessages)



export default router;