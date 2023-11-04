require ('dotenv').config();
const {DB_DIALECT, DB_USER,DB_PASSWORD,DB_HOST,DB_NAME } =  process.env
const {Sequelize} = require ('sequelize')

const placeModel = require('./models/place')
const userModel = require('./models/user')


const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging: false,
    native:false,
});


placeModel(sequelize)
userModel(sequelize)

const { Place, User } = sequelize.models

module.exports = {...sequelize.models,
    conn:sequelize}