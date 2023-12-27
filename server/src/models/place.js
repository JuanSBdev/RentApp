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
            allowNull:true,

        },
        location:{
            type:DataTypes.STRING,
            allowNull:true,
            
        },
        price_per_night:{
            type:DataTypes.INTEGER,
            allowNull:true,

        },
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1, // Valor mínimo
                max: 5, // Valor máximo
            },
            allowNull:true,

        },
        services: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:true,

        },
        // unavailable_dates: {
        //     type: DataTypes.ARRAY(DataTypes.DATEONLY),
        //     allowNull:true,

        // },
        max_occupancy_per_room:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        number_of_rooms:{
            type: DataTypes.STRING,
            allowNull:true,
            
        }


    },{

        timestamps:
            false
        })
    
}