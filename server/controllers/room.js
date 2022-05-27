import Room from '../models/Room.js';
import tryCatch from './utils/tryCatch.js';

export const createRoom = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newRoom = new Room({ ...req.body, uid, uName, uPhoto });
  await newRoom.save();
  res.status(201).json({ success: true, result: newRoom });
});
