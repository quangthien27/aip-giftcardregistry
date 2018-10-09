const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User scheme
const RegistrySchema = new Schema({
  event: {type: String, required: [true, 'Event field is required']},
  greetingMessage: {type: String, required: [true, 'Message field is required']},
  cardDesign: {type: Number, required: [true, 'Card Design field is required']},
  closeDate: {type: Date, required: [true, 'Date field is required']},
  userID: {type: String, required: [true, 'User ID field is required']}
});

// Modeling the user
const Registry = mongoose.model('registry', RegistrySchema);

module.exports = Registry;
