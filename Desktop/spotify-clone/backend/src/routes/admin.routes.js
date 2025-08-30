import express from 'express';
import { getAdmin,createSong,deleteSong,createAlbum,deleteAlbum} from '../controller/admin.controller.js';
import { protectedRoute, requireAdmin } from '../lib/middleware/auth.middleware.js';

const router = express.Router();
router.get('/check', protectedRoute, requireAdmin, getAdmin);
router.post('/songs',protectedRoute, requireAdmin, createSong);
router.delete('/songs/:id', protectedRoute, requireAdmin, deleteSong);
router.post('/albums', protectedRoute, requireAdmin, createAlbum);
router.delete('/albums/:id', protectedRoute, requireAdmin, deleteAlbum);

export default router;