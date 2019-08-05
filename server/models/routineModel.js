const mongoose = require('mongoose')

const RoutineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  procedure: {
    type: String,
    required: false,
  },
  calories: {
    type: Number,
    required: false,
  },
  timeline: {
    type: Number,
    required: false,
  },
})

// create the model for the routine and expose it to the application
module.exports = mongoose.model('Routine', RoutineSchema)
