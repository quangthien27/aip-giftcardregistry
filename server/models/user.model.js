const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User scheme
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email field is required']
  },
  phone: {
    type: String,
    required: [false]
  },
  password: {
    type: String,
    required: [true, 'Password field is required']
  }
});

// Modeling the user
const User = mongoose.model('user', UserSchema);

module.exports = User;
