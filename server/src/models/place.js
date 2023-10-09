const {DataTypes, Sequelize} = require ('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('Place',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:false,
            validate:{
                notEmpty:{
                    msg:`Place's name couldn't be null`
                },
            },
        },
        type:{
            type:DataTypes.STRING,

        },
        location:{
            type:DataTypes.STRING,
            
        },
        price_per_night:{
            type:DataTypes.INTEGER,
        },
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1, // Valor mínimo
                max: 5, // Valor máximo
            }
        },
        services: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        unavailable_dates: {
            type: DataTypes.ARRAY(DataTypes.DATE),
        },


    })
}