import express from "express";
const router = express.Router();
import {createRoom, getRooms, getOneRoom, updateRoom, deleteRoom} from '../controller/room.js';

router.get('/', getRooms);
router.get('/:id', getOneRoom);
router.post('/', createRoom);
router.patch('/:id', updateRoom);
router.delete('/:id', deleteRoom);

export default router;