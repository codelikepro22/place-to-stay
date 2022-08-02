import Room from '../models/Room.js';
import tryCatch from './utils/tryCatch.js';

export const createRoom = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newRoom = new Room({ ...req.body, uid, uName, uPhoto });
  await newRoom.save();
  res.status(201).json({ success: true, result: newRoom });
});

export const getRooms = tryCatch(async (req, res) => {
  const rooms = await Room.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: rooms });
});

export const deleteRoom = tryCatch(async (req, res) => {
  const { _id } = await Room.findByIdAndDelete(req.params.roomId);
  res.status(200).json({ success: true, result: { _id } });
});

export const updateRoom = tryCatch(async (req, res) => {
  const updatedRoom = await Room.findByIdAndUpdate(
    req.params.roomId,
    req.body,
    { new: true }
  );
  res.status(200).json({ success: true, result: updatedRoom });
});
