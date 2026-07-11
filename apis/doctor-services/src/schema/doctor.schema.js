const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true
  },
  doctorEmail: {
    type: String,
    required: true,
    sparse: true
  },
  doctorPhone: {
    type: String,
    required: true
  },
  doctorSpecialization: {
    type: String,
    required: true},
    doctorExperience: {
    type: Number,
    required: true
    },
    doctorLocation: {
    type: String,
    required: true
    },
    doctorQualification: {
    type: String,
    required: true
    }
}, {
  timestamps: true
});

module.exports = doctorSchema;