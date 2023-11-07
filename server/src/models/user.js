const {DataTypes, sequelize } = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define( 'User',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        mail:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                notEmpty:{
                    msg:`Place's name couldn't be null`
                },
            },
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }
    )
}

