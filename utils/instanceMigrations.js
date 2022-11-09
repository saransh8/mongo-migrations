const { connect, getDB, close } = require('./mongoConnection');
const Customer = require("../models/customer");

module.exports = async (callback) => {
    let customers = await Customer.findAll({ where: { status: 'active' }, raw: true });
    console.log(customers);
    for (var i in customers) {
        try {
            console.log(customers[i]);
            await connect(customers[i]);
            dbConn = await getDB();
            await callback(dbConn);
        } catch (err) {
            console.error(err);
        }
        close();
    }
};