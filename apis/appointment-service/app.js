const express = require('express');
const config = require('./src/config/config');
const connectDB = require('./src/config/db');
const app = express();
const cors = require('cors');
const PORT = config.port || 3002;
app.use(cors());
app.use(express.json());
const appointmentRoutes = require('./src/routes/appointment.routes');
app.use('/appointment', appointmentRoutes);
connectDB().then(() => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
});
app.get('/', (req, res) => {
    console.log('Appointment service is running');
    res.send('Appointment service is running');
})
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({    
    success: false, 
    message: err.message || "Internal Server Error"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});