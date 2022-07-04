import express from "express";
const router = express.Router();
import {createRoom, getRooms, getOneRoom, updateRoom, deleteRoom} from '../controller/room.js';

router.get('/', getRooms);
router.get(':name', getOneRoom);
router.post('/', createRoom);
router.patch('/:name', updateRoom);
router.delete('/:name', deleteRoom);

export default router;