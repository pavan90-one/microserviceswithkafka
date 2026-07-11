const mongoose = require('mongoose');
const appointmentSchema = require('../schema/appointment.schema');
const Appointment = mongoose.model('Appointment', appointmentSchema);