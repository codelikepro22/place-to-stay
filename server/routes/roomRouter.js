import { Router } from 'express';

import {
  createRoom,
  deleteRoom,
  getRooms,
  updateRoom,
} from '../controllers/room.js';
import auth from '../middleware/auth.js';

const roomRouter = Router();
roomRouter.post('/', auth, createRoom);
roomRouter.get('/', getRooms);
roomRouter.delete('/:roomId', deleteRoom);
roomRouter.patch('/:roomId', updateRoom);
export default roomRouter;
