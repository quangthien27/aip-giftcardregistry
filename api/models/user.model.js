const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User scheme
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full name field is required']
  },
  email: {
    type: String,
    unique: true, required: [true, 'Email field is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone field is required']
  },
  password: {
    type: String,
    required: [true, 'Password field is required']
  },
  address: {
    type: String,
    required: [true, 'Address field is required']
  },
  suburb: {
    type: String,
    required: [true, 'Suburb field is required']
  },
  state: {
    type: String,
    required: [true, 'State field is required']
  },
  postcode: {
    type: String,
    required: [true, 'Postcode field is required']
  },
  country: {
    type: String,
    required: [true, 'Country field is required']
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// Modeling the user
const User = mongoose.model('user', UserSchema);

module.exports = User;
