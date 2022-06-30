import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    numberPlayers: Number,
    firstName: String,
    lastName: String,
    birthday: Date
  
})

const Reservation = mongoose.model('Reservations', reservationSchema);

export default Reservation;