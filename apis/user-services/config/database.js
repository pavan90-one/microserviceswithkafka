const moogoose = require('mongoose');
const dbConfig = require('./config');
const connectDB = async () => {
    try {
        await moogoose.connect(dbConfig.url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB; 