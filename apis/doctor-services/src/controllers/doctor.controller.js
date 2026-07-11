const DoctorRepository = require("../repositories/doctor.repositories");
class doctorController {
  constructor() {   
    console.log("doctor controller loaded");
  }
  async createDoctor(req, res,next) {
     req.body = req.body || {};
    try {
      const doctorData = req.body;
      const createdDoctor = await DoctorRepository.createDoctor(doctorData);
      res.status(201).json(createdDoctor);
    } catch (error) {
      next(error);
    }
  }
  async getDoctor(req, res,next){
    try {
      const doctors = await DoctorRepository.getDoctor();
      res.status(200).json(doctors);
    } catch (error) {
      next(error);
    }
}

async seedDoctors(req, res, next) {
    try {
      const count = Math.min(Math.max(parseInt(req.params.count || req.query.count || '20', 10), 1), 100);
      const doctors = Array.from({ length: count }, (_, index) => {
        const id = index + 1;
        const suffix = String(id).padStart(3, '0');
        return {
          doctorName: `Doctor ${id}`,
          doctorEmail: `doctor-${suffix}-${Date.now()}-${id}@example.com`,
          doctorPhone: `+1-555-000-${String(id + 100).padStart(3, '0')}`,
          doctorSpecialization: ['Cardiology', 'Neurology', 'Pediatrics', 'Dermatology'][index % 4],
          doctorExperience: 3 + (index % 15),
          doctorLocation: ['New York', 'Chicago', 'Houston', 'Los Angeles'][index % 4],
          doctorQualification: 'MBBS'
        };
      });

      const createdDoctors = await DoctorRepository.createDoctors(doctors);
      res.status(201).json(createdDoctors);
    } catch (error) {
      next(error);
    }
}

async getDoctorById(req, res,next) {
    try {
      const doctorId = req.params.id;
      const doctor = await DoctorRepository.getDoctorById(doctorId);
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor not found' });
      }
      res.status(200).json(doctor);
    } catch (error) {
      next(error);
    }
}
async updateDoctor(req, res,next) {
    try {
      const doctorId = req.params.id;
      const updatedDoctor = await DoctorRepository.updateDoctor(doctorId, req.body);
      res.status(200).json(updatedDoctor);
    } catch (error) {
      next(error);
    }
}
async deleteDoctor(req, res,next) {
    try {
      const doctorId = req.params.id;
      await DoctorRepository.deleteDoctor(doctorId);
      res.status(200).json({ message: 'Doctor deleted successfully' });
    } catch (error) {
      next(error);
    }
  }      

}
module.exports = doctorController;