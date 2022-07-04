import express from "express";
const router = express.Router();
import {createReservation, getReservations, getOneReservation, updateReservation, deleteReservation} from '../controller/user.js';

router.get('/', getReservations);
router.get(':name', getOneReservation);
router.post('/', createReservation);
router.patch('/:name', updateReservation);
router.delete('/:name', deleteReservation);

export default router;