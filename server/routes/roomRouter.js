import { Router } from 'express';

import { createRoom, getRooms } from '../controllers/room.js';
import auth from '../middleware/auth.js';

const roomRouter = Router();
roomRouter.post('/', auth, createRoom);
roomRouter.get('/', getRooms);
export default roomRouter;
