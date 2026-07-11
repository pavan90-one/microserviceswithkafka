const appointmentRepository = require('../repository/appointment.repositories');
class AppointmentController {
    static async createAppointment(req, res) {
        try {
            const appointmentData = req.body;
            const createdAppointment = await appointmentRepository.createAppointment(appointmentData);
            res.status(201).json(createdAppointment);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create appointment' });
        }
    }
    static async getAppointments(req, res) {
        try {
            const appointments = await appointmentRepository.getAppointments();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch appointments' });
        }   
    }
    static async getAppointmentById(req, res) {
        try {
            const appointmentId = req.params.id;
            const appointment = await appointmentRepository.getAppointmentById(appointmentId);
            if (!appointment) {
                return res.status(404).json({ error: 'Appointment not found' });
            }
            res.status(200).json(appointment);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch appointment' });
        }
    }
    static async updateAppointment(req, res) {
        try {
            const appointmentId = req.params.id;
            const updateData = req.body;
            const updatedAppointment = await appointmentRepository.updateAppointment(appointmentId, updateData);    
        if (!updatedAppointment) {
                return res.status(404).json({ error: 'Appointment not found' });
            }   
            res.status(200).json(updatedAppointment);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update appointment' });
        }
    }
    static async deleteAppointment(req, res) {
        try {   
            const appointmentId = req.params.id;
            const deletedAppointment = await appointmentRepository.deleteAppointment(appointmentId);
            if (!deletedAppointment) {
                return res.status(404).json({ error: 'Appointment not found' });
            }
            res.status(200).json({ message: 'Appointment deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete appointment' });
        }   
    }

    static async seedAppointments(req, res) {
        try {
            const count = Math.min(Math.max(parseInt(req.params.count || req.query.count || '5', 10), 1), 20);
            const appointments = Array.from({ length: count }, (_, index) => ({
                patientId: '64f000000000000000000001',
                doctorId: '64f000000000000000000001',
                appointmentDate: new Date(Date.now() + index * 86400000),
                status: ['Booked', 'Completed', 'Cancelled'][index % 3]
            }));

            const createdAppointments = await appointmentRepository.createAppointments(appointments);
            res.status(201).json(createdAppointments);
        } catch (error) {
            res.status(500).json({ error: 'Failed to seed appointments' });
        }
    }
}

module.exports = AppointmentController;
