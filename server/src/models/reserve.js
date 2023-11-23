const {Sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize)=> {
    sequelize.define('Reserve',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        dateInit:{
            type:DataTypes.DATEONLY,
            allowNull: false,
        },
        dateEnd:{
            type:DataTypes.DATEONLY,
            allowNull: false,
        },
        status:{
            type:DataTypes.ENUM('confirmed', 'aproved', 'inCourse', 'canceled'),
            allowNull: true,
        }
    })
}