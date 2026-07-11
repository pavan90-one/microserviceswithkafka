const mongoose = require('mongoose');
const Doctor = require('../schema/doctor.schema');
module.exports = mongoose.model('Doctor', Doctor);
