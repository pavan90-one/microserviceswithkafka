const express = require('express');
const router = express.Router();
const AppointmentController = require('../controllers/appointment.controller');

router.post('/create', AppointmentController.createAppointment.bind(AppointmentController));
router.post('/seed', AppointmentController.seedAppointments.bind(AppointmentController));
router.post('/seed/:count', AppointmentController.seedAppointments.bind(AppointmentController));
router.get('/', AppointmentController.getAppointments.bind(AppointmentController));
router.get('/:id', AppointmentController.getAppointmentById.bind(AppointmentController));
router.put('/:id', AppointmentController.updateAppointment.bind(AppointmentController));
router.delete('/:id', AppointmentController.deleteAppointment.bind(AppointmentController));

module.exports = router;