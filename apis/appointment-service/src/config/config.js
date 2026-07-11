const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    kafkaBroker: process.env.KAFKA_BROKER,
    kafkaTopic: process.env.KAFKA_TOPIC
};
