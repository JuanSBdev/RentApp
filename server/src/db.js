require ('dotenv').config();
const {DB_DIALECT, DB_USER,DB_PASSWORD,DB_HOST,DB_NAME } =  process.env
const {Sequelize} = require ('sequelize')

const placeModel = require('./models/place')
const userModel = require('./models/user')
const reserveModel = require('./models/reserve')


const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{
    logging: false,
    native:false,
});


placeModel(sequelize)
userModel(sequelize)
reserveModel(sequelize)

const { Place, User, Reserve } = sequelize.models
User.hasMany(Reserve,{foreignKey: 'userId'})
Reserve.belongsTo(User,{foreignKey:'reserveId'})


module.exports = {...sequelize.models,
    conn:sequelize}