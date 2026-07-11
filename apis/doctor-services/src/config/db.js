const mongoose = require('mongoose');
const config = require('./config');
const connectDB = async () => {
    try {
        await mongoose.connect(config.database.url);
    } catch (error) {
        console.error('Database connection error:', error);
    }
};
module.exports = connectDB;
