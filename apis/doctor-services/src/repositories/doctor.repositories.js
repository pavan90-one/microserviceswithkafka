const Doctor = require('../models/doctor.model');

class DoctorRepository {
    static async createDoctor(doctorData) {
        const doctor = new Doctor(doctorData);
        return await doctor.save();
    }

    static async createDoctors(doctors) {
        const savedDoctors = [];
        for (const doctorData of doctors) {
            const doctor = new Doctor(doctorData);
            savedDoctors.push(await doctor.save());
        }
        return { insertedCount: savedDoctors.length, doctors: savedDoctors };
    }

    static async getDoctor() {
        return await Doctor.find();
    }

    static async getDoctorById(doctorId) {
        return await Doctor.findById(doctorId);
    }

    static async updateDoctor(doctorId, updateData) {
        return await Doctor.findByIdAndUpdate(doctorId, updateData, { new: true });
    }

    static async deleteDoctor(doctorId) {
        return await Doctor.findByIdAndDelete(doctorId);
    }
}

module.exports = DoctorRepository;