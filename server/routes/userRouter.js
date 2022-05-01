import { Router } from 'express';
import { login, register, updateProfile } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const userRouter = Router();
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.patch('/updateProfile', auth, updateProfile);

export default userRouter;
