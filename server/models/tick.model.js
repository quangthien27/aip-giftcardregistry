const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tick scheme
const TickSchema = new Schema({
  count: {
    type: Number,
    default: 0
  }
});

// Modeling the tick
const Tick = mongoose.model('tick', TickSchema);

module.exports = Tick;
