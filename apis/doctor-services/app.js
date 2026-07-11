const express = require('express');
const app = express();
const doctorRoutes = require('./src/routes/doctor.routes');
const PORT = process.env.PORT || 3001;
const connectDB = require('./src/config/db');

app.use(express.json());
app.use('/doctor', doctorRoutes);

connectDB().then(() => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`Doctor service is running on port ${PORT}`);
});