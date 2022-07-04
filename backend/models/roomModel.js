import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  capacity: Number,
  image: String,
  ageLimit: String,
  reservation: []
})

const Room = mongoose.model('rooms', roomSchema);

export default Room;