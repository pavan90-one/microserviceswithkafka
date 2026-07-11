const mongoose = require('mongoose');
const confing = require('./config');
const dbUrl = confing.dbUrl || 'mongodb://localhost/appointment-service';
const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
