const appointmentModel = require('../model/appointment.model');

class AppointmentRepository {
    static async createAppointment(appointmentData) {
        const appointment = new appointmentModel(appointmentData);
        return await appointment.save();
    }

    static async createAppointments(appointments) {
        const createdAppointments = [];
        for (const appointmentData of appointments) {
            const appointment = new appointmentModel(appointmentData);
            createdAppointments.push(await appointment.save());
        }
        return createdAppointments;
    }

    static async getAppointments() {
        return await appointmentModel.find();
    }
    static async getAppointmentById(appointmentId) {
        return await appointmentModel.findById(appointmentId);
    }
    static async updateAppointment(appointmentId, updateData) {
        return await appointmentModel.findByIdAndUpdate(appointmentId, updateData, { new: true });
    }
    static async deleteAppointment(appointmentId) { 
        return await appointmentModel.findByIdAndDelete(appointmentId);
    }
    
}
module.exports = AppointmentRepository;