const dotenv = require('dotenv').config();
const config = {
    port : process.env.PORT || 4000,
    userServicePort : process.env.USER_SERVICE_PORT,
    doctorServicePort : process.env.DOCTOR_SERVICE_PORT ,
    appointmentServicePort : process.env.APPOINTMENT_SERVICE_PORT 

}
module.exports = config;