require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

module.exports = {
    JWT_SECRET: "thisisasecretkey",
    MONGO_URI: MONGO_URI
}