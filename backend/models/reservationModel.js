import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    numberPlayers: Number,
    firstNames: String,
    lastNames: String,
    userId: Number,
    roomId: Number
})

const Reservation = mongoose.model('reservations', reservationSchema);

export default Reservation;