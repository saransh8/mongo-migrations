require('dotenv').config({path: '../.env'});

module.exports = {
    region : process.env.AWS_REGION,
    endpoint : process.env.AWS_ENDPOINT,
    awsKey : process.env.AWS_KEY,
    awsSecret : process.env.AWS_SECRET
};