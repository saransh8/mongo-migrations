const Sequelize = require('sequelize');
const sequelize = require('../utils/sqlConnection');

const Customer = sequelize.define('customers', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    url: Sequelize.STRING,
    instance: Sequelize.STRING,
    status: Sequelize.STRING,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE,
    redirect_url: Sequelize.STRING,
    secret_arn: Sequelize.STRING,
    secret_arn_mongo: Sequelize.STRING,
    client_id: Sequelize.STRING,
    type: Sequelize.STRING,
});

sequelize.sync().catch((err) => console.log);

module.exports = Customer;