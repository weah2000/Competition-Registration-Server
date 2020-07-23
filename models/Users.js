const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName:String,
  phone: String,
  idCard: String,
  gameId: String,
  teamName: String,
  server: String,
  status: String,
  date: { type: Number, default: new Date().getTime() }
});

module.exports = mongoose.model('Users', userSchema);
