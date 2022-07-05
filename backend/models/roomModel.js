import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  capacity: Number,
  image: String,
  ageLimit: String
})

const Room = mongoose.model('rooms', roomSchema);

export default Room;