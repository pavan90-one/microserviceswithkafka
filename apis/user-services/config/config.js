const dotenv = require('dotenv').config();
const dbConfig = {
    url: process.env.DATABASE_URL
};
module.exports = dbConfig;