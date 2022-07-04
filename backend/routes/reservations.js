import express from "express";
const router = express.Router();
import {createReservation, getReservations, getOneReservation, updateReservation, deleteReservation} from '../controller/reservation.js';

router.get('/', getReservations);
router.get('/:id', getOneReservation);
router.post('/', createReservation);
router.patch('/:id', updateReservation);
router.delete('/:id', deleteReservation);

export default router;