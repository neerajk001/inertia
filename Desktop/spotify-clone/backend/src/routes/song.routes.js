import express from 'express';
import  { getAllSongs, featuredSongs, getMadeForYou, getTrendingSongs } from '../controller/song.controller.js'
import { protectedRoute, requireAdmin } from '../lib/middleware/auth.middleware.js';

 


const router  = express.Router();

router.get('/',protectedRoute,requireAdmin, getAllSongs);
router.get('/featured',featuredSongs);
router.get('/made-for-you',getMadeForYou);
router.get('/trending',getTrendingSongs);



export default router;