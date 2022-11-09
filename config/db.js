require('dotenv').config({path: '../.env'});

module.exports = {
    arn : process.env.DB_ALLBOUND_ARN,
    database : process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    allboundMongoUrl: process.env.ALLBOUND_MONGO_URL
};