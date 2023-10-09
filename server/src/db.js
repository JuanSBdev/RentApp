
require ('dotenv').config();
const {DB_DIALECT, DB_USER,DB_PASSWORD,DB_HOST,DB_NAME } =  process.env
const {Sequelize} = require ('sequelize')




const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging: false,
    native:false,
});

const {Place} = sequelize.models

module.exports = {...sequelize.models,
    conn:sequelize}