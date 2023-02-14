const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  date: {
    type: Date,
    default: () => {
      return Date.now()
    }
  },
  time: { type: Number },
  length: { type: Number },
  lessonFocus: { type: String },
}, {
  timestamps: true
});

const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  date: {
    type: Date,
    default: () => {
      return Date.now()
    }
  },
  cellphone: { type: Number },
  driversLicense: { type: Number },
  class: { type: Number, default: 7 },
  expires: {
    type: Date,
    default: () => {
      return Date.now()
    }
  },
  email: { type: String },
  dateOfBirth: {
    type: Date,
    default: () => {
      return Date.now()
    }
  },
  restrictions: { type: String, required: true },
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  schedule: [scheduleSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
