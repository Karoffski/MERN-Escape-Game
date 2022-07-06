import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  adress: String,
  adressNumber: Number,
  isAdmin: Boolean
})

const User = mongoose.model('users', userSchema);

export default User;