const {Sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize)=> {
    sequelize.define('Reserve',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        dateInit:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        dateEnd:{
            type:DataTypes.DATE,
            allowNull: false,
        },
        status:{
            type:DataTypes.ENUM('confirmed', 'aproved', 'inCourse', 'canceled'),
            defaultValue:'confirmed',
            allowNull: true,
        },
        total:{
            type:DataTypes.INTEGER,
            allowNull: true,
        }
    })
}