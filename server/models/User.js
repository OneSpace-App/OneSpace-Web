const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  userId: String,
  daoCoin: {
    type: Number,
    default: 50,
  },
  sent: [
    {
      userId: { type: String, default: null },
      daoCoin: { type: Number, default: 0 },
    },
  ],
  received: [
    {
      userId: { type: String, default: null },
      daoCoin: { type: Number, default: 0 },
    },
  ],
});
const User = mongoose.model('User', userSchema);
module.exports = User