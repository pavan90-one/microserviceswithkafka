const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const Database_URL = process.env.Database_URL || 'mongodb://localhost:27017/doctor-services';
 const config = {
   database: {
     url: Database_URL
   }
 };
 module.exports = config;