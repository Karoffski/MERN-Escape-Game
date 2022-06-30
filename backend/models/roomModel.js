import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: String,
  description: String,
  limit: Number,
  capacity: Number,
  id: Number,
  availability: Number
})

const Room = mongoose.model('Rooms', roomSchema);

export default Room;